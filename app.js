(function () {
  const data = window.SITE_DATA;
  const page = document.body.dataset.page;

  function $(selector) {
    return document.querySelector(selector);
  }

  function $all(selector) {
    return Array.from(document.querySelectorAll(selector));
  }

  function params() {
    return new URLSearchParams(window.location.search);
  }

  function bySlug(items, slug) {
    return items.find((item) => item.slug === slug);
  }

  function byId(items, id) {
    return items.find((item) => item.id === id);
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function setGlobalChrome() {
    const settings = data.siteSettings;

    $all("#brand-name").forEach((el) => {
      el.textContent = settings.name;
    });

    $all("#brand-title").forEach((el) => {
      el.textContent = settings.title;
    });

    const footerCopy = $("#footer-copy");
    if (footerCopy) {
      footerCopy.textContent = settings.shortBio;
    }

    const footerLinks = $("#footer-links");
    if (footerLinks) {
      footerLinks.innerHTML = settings.socialLinks
        .concat(settings.externalLinks)
        .map((link) => `<a class="text-link" href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a>`)
        .join("");
    }

    const navTarget = page === "project-detail" || page === "topic-detail"
      ? "work"
      : page === "post-detail"
        ? "writing"
        : page;
    const activeNav = document.querySelector(`[data-nav="${navTarget}"]`);
    if (activeNav) {
      activeNav.classList.add("active");
    }
  }

  function renderPills(values, withLinks) {
    return values
      .map((value) => {
        const topic = data.topics.find((item) => item.slug === value);
        const label = topic ? topic.name : value;
        if (withLinks && topic) {
          return `<span class="pill"><a href="topic.html?slug=${escapeHtml(topic.slug)}">${escapeHtml(label)}</a></span>`;
        }
        return `<span class="pill">${escapeHtml(label)}</span>`;
      })
      .join("");
  }

  function labelForFilter(value) {
    if (value === "all") {
      return "All";
    }

    const topic = data.topics.find((item) => item.slug === value);
    if (topic) {
      return topic.name;
    }

    return value
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  }

  function renderFeatureProject(project) {
    return `
      <a class="feature-item" href="project.html?slug=${escapeHtml(project.slug)}">
        <p class="eyebrow">${escapeHtml(project.type)}</p>
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.shortSummary)}</p>
        <div class="meta-row">
          <span>${escapeHtml(project.status)}</span>
          <span>${escapeHtml(project.year)}</span>
        </div>
      </a>
    `;
  }

  function renderFeaturePost(post) {
    return `
      <a class="feature-item" href="post.html?slug=${escapeHtml(post.slug)}">
        <p class="eyebrow">${escapeHtml(post.series)}</p>
        <h3>${escapeHtml(post.title)}</h3>
        <p>${escapeHtml(post.excerpt)}</p>
        <div class="meta-row">
          <span>${escapeHtml(post.readingTime)}</span>
          <span>${escapeHtml(post.publishedDate)}</span>
        </div>
      </a>
    `;
  }

  function renderExperienceCard(item) {
    const bullets = item.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("");
    const link = item.link ? `<a class="text-link" href="${escapeHtml(item.link)}">Related link</a>` : "";
    return `
      <article class="experience-card" data-category="${escapeHtml(item.category)}">
        <p class="eyebrow">${escapeHtml(item.category)}</p>
        <h2>${escapeHtml(item.title)}</h2>
        <div class="meta-row">
          <span>${escapeHtml(item.organization)}</span>
          <span>${escapeHtml(item.startDate)} - ${escapeHtml(item.endDate)}</span>
          <span>${escapeHtml(item.location)}</span>
        </div>
        <p>${escapeHtml(item.summary)}</p>
        <ul>${bullets}</ul>
        ${link}
      </article>
    `;
  }

  function createFilterChips(containerSelector, values, activeValue, onClick) {
    const container = $(containerSelector);
    if (!container) {
      return;
    }

    container.innerHTML = values
      .map((value) => `<button class="filter-chip ${value === activeValue ? "active" : ""}" data-value="${escapeHtml(value)}">${escapeHtml(labelForFilter(value))}</button>`)
      .join("");

    container.querySelectorAll(".filter-chip").forEach((button) => {
      button.addEventListener("click", () => onClick(button.dataset.value));
    });
  }

  function renderHome() {
    const settings = data.siteSettings;

    $("#hero-title").innerHTML = `I&rsquo;m building a career in <span class="hero-highlight">neuroscience</span>, with strong <span class="hero-italic">neurotechnology</span> interests.`;
    $("#hero-summary").textContent = settings.shortBio;
    $("#current-focus").textContent = settings.currentFocus;
    $("#career-arc").textContent = settings.careerArc;
    $("#interest-pills").innerHTML = settings.interests.map((interest) => `<span class="pill">${escapeHtml(interest)}</span>`).join("");
    $("#hero-actions").innerHTML = settings.primaryCtas
      .map((cta) => `<a class="button ${cta.variant === "primary" ? "primary-button" : "ghost-button"}" href="${escapeHtml(cta.href)}">${escapeHtml(cta.label)}</a>`)
      .join("");
    $("#featured-projects").innerHTML = settings.featuredProjectSlugs
      .map((slug) => bySlug(data.projects, slug))
      .filter(Boolean)
      .map(renderFeatureProject)
      .join("");
    $("#featured-posts").innerHTML = settings.featuredPostSlugs
      .map((slug) => bySlug(data.posts, slug))
      .filter(Boolean)
      .map(renderFeaturePost)
      .join("");
    $("#highlight-experience").innerHTML = settings.featuredExperienceIds
      .map((id) => byId(data.experience, id))
      .filter(Boolean)
      .map((item) => `
        <article class="timeline-item">
          <p class="eyebrow">${escapeHtml(item.category)}</p>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.summary)}</p>
        </article>
      `)
      .join("");
    $("#long-bio-snippet").textContent = settings.longBio[0];
  }

  function attachHeroMotion() {
    const heroContainer = document.querySelector(".hero-mask-container");
    if (!heroContainer) {
      return;
    }

    let rafId = 0;
    let nextX = 52;
    let nextY = 38;

    function clamp(value, min, max) {
      return Math.max(min, Math.min(max, value));
    }

    function paint() {
      rafId = 0;
      const points = [
        [nextX - 10, nextY - 23],
        [nextX + 6, nextY - 26],
        [nextX + 18, nextY - 16],
        [nextX + 22, nextY + 1],
        [nextX + 14, nextY + 19],
        [nextX, nextY + 31],
        [nextX - 14, nextY + 25],
        [nextX - 22, nextY + 8],
        [nextX - 18, nextY - 12]
      ];

      points.forEach((point, index) => {
        const x = clamp(point[0], 0, 100);
        const y = clamp(point[1], 0, 100);
        heroContainer.style.setProperty(`--blob-p${index + 1}`, `${x}% ${y}%`);
      });
    }

    function queuePaint() {
      if (!rafId) {
        rafId = window.requestAnimationFrame(paint);
      }
    }

    function updateMask(event) {
      const rect = heroContainer.getBoundingClientRect();
      nextX = ((event.clientX - rect.left) / rect.width) * 100;
      nextY = ((event.clientY - rect.top) / rect.height) * 100;
      queuePaint();
    }

    heroContainer.addEventListener("pointerenter", () => {
      heroContainer.classList.add("is-active");
    });

    heroContainer.addEventListener("pointermove", updateMask);

    heroContainer.addEventListener("pointerleave", () => {
      heroContainer.classList.remove("is-active");
      nextX = 52;
      nextY = 38;
      queuePaint();
    });

    paint();
  }

  function renderProjects() {
    const grid = $("#projects-grid");
    const types = ["all"].concat(Array.from(new Set(data.projects.map((item) => item.type))));
    const topics = ["all"].concat(data.topics.map((item) => item.slug));
    const state = { type: "all", topic: "all" };

    function draw() {
      const filtered = data.projects.filter((project) => {
        const typeMatch = state.type === "all" || project.type === state.type;
        const topicMatch = state.topic === "all" || project.topics.includes(state.topic);
        return typeMatch && topicMatch;
      });

      createFilterChips("#project-type-filters", types, state.type, (value) => {
        state.type = value;
        draw();
      });

      createFilterChips("#project-topic-filters", topics, state.topic, (value) => {
        state.topic = value;
        draw();
      });

      grid.innerHTML = filtered.length
        ? filtered
            .map((project) => `
              <article class="project-card">
                <p class="eyebrow">${escapeHtml(project.type)}</p>
                <h2>${escapeHtml(project.title)}</h2>
                <p>${escapeHtml(project.shortSummary)}</p>
                <div class="pill-row">${renderPills(project.topics, true)}</div>
                <div class="project-card-footer">
                  <div class="meta-row">
                    <span>${escapeHtml(project.status)}</span>
                    <span>${escapeHtml(project.year)}</span>
                  </div>
                  <a class="text-link" href="project.html?slug=${escapeHtml(project.slug)}">Open project</a>
                </div>
              </article>
            `)
            .join("")
        : `<div class="empty-state">No projects match this combination yet.</div>`;
    }

    draw();
  }

  function renderPosts() {
    const list = $("#posts-list");
    const topics = ["all"].concat(data.topics.map((item) => item.slug));
    const series = ["all"].concat(Array.from(new Set(data.posts.map((item) => item.series))));
    const state = { topic: "all", series: "all" };

    function draw() {
      const filtered = data.posts.filter((post) => {
        const topicMatch = state.topic === "all" || post.topics.includes(state.topic);
        const seriesMatch = state.series === "all" || post.series === state.series;
        return topicMatch && seriesMatch;
      });

      createFilterChips("#post-topic-filters", topics, state.topic, (value) => {
        state.topic = value;
        draw();
      });

      createFilterChips("#post-series-filters", series, state.series, (value) => {
        state.series = value;
        draw();
      });

      list.innerHTML = filtered.length
        ? filtered
            .map((post) => `
              <article class="post-card">
                <p class="eyebrow">${escapeHtml(post.series)}</p>
                <h2>${escapeHtml(post.title)}</h2>
                <p>${escapeHtml(post.excerpt)}</p>
                <div class="pill-row">${renderPills(post.topics, true)}</div>
                <div class="post-card-footer">
                  <div class="meta-row">
                    <span>${escapeHtml(post.readingTime)}</span>
                    <span>${escapeHtml(post.publishedDate)}</span>
                  </div>
                  <a class="text-link" href="post.html?slug=${escapeHtml(post.slug)}">Read post</a>
                </div>
              </article>
            `)
            .join("")
        : `<div class="empty-state">No posts match this combination yet.</div>`;
    }

    draw();
  }

  function renderAbout() {
    const settings = data.siteSettings;
    $("#about-short").textContent = settings.shortBio;
    $("#about-long").innerHTML = settings.longBio.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
    $("#about-values").innerHTML = settings.values.map((value) => `<span class="pill">${escapeHtml(value)}</span>`).join("");
    $("#about-interests").innerHTML = settings.interests.map((interest) => `<span class="pill">${escapeHtml(interest)}</span>`).join("");
    $("#about-links").innerHTML = settings.socialLinks
      .concat(settings.externalLinks)
      .map((link) => `<a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a>`)
      .join("");
    $("#about-experience").innerHTML = data.experience
      .slice(0, 3)
      .map((item) => `
        <article class="timeline-item">
          <p class="eyebrow">${escapeHtml(item.category)}</p>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.summary)}</p>
        </article>
      `)
      .join("");
  }

  function renderExperience() {
    const categories = ["all"].concat(Array.from(new Set(data.experience.map((item) => item.category))));
    const list = $("#experience-list");
    const state = { category: "all" };

    function draw() {
      createFilterChips("#experience-category-filters", categories, state.category, (value) => {
        state.category = value;
        draw();
      });

      const filtered = data.experience.filter((item) => state.category === "all" || item.category === state.category);
      list.innerHTML = filtered.map(renderExperienceCard).join("");
    }

    draw();
  }

  function renderProjectDetail() {
    const project = bySlug(data.projects, params().get("slug"));
    const container = $("#project-detail");
    if (!project) {
      container.innerHTML = `<section class="card"><p>Project not found.</p></section>`;
      return;
    }

    const relatedPosts = data.posts.filter((post) => post.relatedProjectSlugs.includes(project.slug));
    container.innerHTML = `
      <section class="card detail-layout">
        <div class="detail-header">
          <p class="eyebrow">${escapeHtml(project.type)}</p>
          <h1>${escapeHtml(project.title)}</h1>
          <p class="hero-summary">${escapeHtml(project.shortSummary)}</p>
          <div class="meta-row">
            <span>${escapeHtml(project.status)}</span>
            <span>${escapeHtml(project.year)}</span>
          </div>
          <div class="pill-row">${renderPills(project.topics, true)}</div>
        </div>
        <div class="detail-body">${escapeHtml(project.body)}</div>
        <div class="divider"></div>
        <div class="meta-row">
          <span>Roles: ${escapeHtml(project.roles.join(", "))}</span>
          <span>Tools: ${escapeHtml(project.tools.join(", "))}</span>
        </div>
        <p><strong>Outcome:</strong> ${escapeHtml(project.outcome)}</p>
        <div class="link-list">
          ${project.links.map((link) => `<a class="text-link" href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a>`).join("")}
        </div>
      </section>
      <section class="card detail-related">
        <h2>Related writing</h2>
        <div class="detail-related-grid">
          ${relatedPosts.length ? relatedPosts.map((post) => `
            <a class="detail-related-card" href="post.html?slug=${escapeHtml(post.slug)}">
              <p class="eyebrow">${escapeHtml(post.series)}</p>
              <h3>${escapeHtml(post.title)}</h3>
              <p>${escapeHtml(post.excerpt)}</p>
            </a>
          `).join("") : `<div class="empty-state">No related writing linked yet.</div>`}
        </div>
      </section>
    `;
  }

  function renderPostDetail() {
    const post = bySlug(data.posts, params().get("slug"));
    const container = $("#post-detail");
    if (!post) {
      container.innerHTML = `<section class="card"><p>Post not found.</p></section>`;
      return;
    }

    const relatedProjects = data.projects.filter((project) => post.relatedProjectSlugs.includes(project.slug));
    container.innerHTML = `
      <section class="card detail-layout">
        <div class="detail-header">
          <p class="eyebrow">${escapeHtml(post.series)}</p>
          <h1>${escapeHtml(post.title)}</h1>
          <p class="hero-summary">${escapeHtml(post.excerpt)}</p>
          <div class="meta-row">
            <span>${escapeHtml(post.publishedDate)}</span>
            <span>${escapeHtml(post.readingTime)}</span>
          </div>
          <div class="pill-row">${renderPills(post.topics, true)}</div>
        </div>
        <div class="detail-body">${escapeHtml(post.body)}</div>
      </section>
      <section class="card detail-related">
        <h2>Related work</h2>
        <div class="detail-related-grid">
          ${relatedProjects.length ? relatedProjects.map((project) => `
            <a class="detail-related-card" href="project.html?slug=${escapeHtml(project.slug)}">
              <p class="eyebrow">${escapeHtml(project.type)}</p>
              <h3>${escapeHtml(project.title)}</h3>
              <p>${escapeHtml(project.shortSummary)}</p>
            </a>
          `).join("") : `<div class="empty-state">No related projects linked yet.</div>`}
        </div>
      </section>
    `;
  }

  function renderTopicDetail() {
    const topic = bySlug(data.topics, params().get("slug"));
    const container = $("#topic-detail");
    if (!topic) {
      container.innerHTML = `<section class="card"><p>Topic not found.</p></section>`;
      return;
    }

    const relatedProjects = data.projects.filter((project) => project.topics.includes(topic.slug));
    const relatedPosts = data.posts.filter((post) => post.topics.includes(topic.slug));

    container.innerHTML = `
      <section class="card detail-layout">
        <div class="detail-header">
          <p class="eyebrow">Topic</p>
          <h1>${escapeHtml(topic.name)}</h1>
          <p class="hero-summary">${escapeHtml(topic.description)}</p>
        </div>
      </section>
      <section class="card detail-related">
        <h2>Projects in this topic</h2>
        <div class="detail-related-grid">
          ${relatedProjects.length ? relatedProjects.map((project) => `
            <a class="detail-related-card" href="project.html?slug=${escapeHtml(project.slug)}">
              <p class="eyebrow">${escapeHtml(project.type)}</p>
              <h3>${escapeHtml(project.title)}</h3>
              <p>${escapeHtml(project.shortSummary)}</p>
            </a>
          `).join("") : `<div class="empty-state">No projects under this topic yet.</div>`}
        </div>
      </section>
      <section class="card detail-related">
        <h2>Writing in this topic</h2>
        <div class="detail-related-grid">
          ${relatedPosts.length ? relatedPosts.map((post) => `
            <a class="detail-related-card" href="post.html?slug=${escapeHtml(post.slug)}">
              <p class="eyebrow">${escapeHtml(post.series)}</p>
              <h3>${escapeHtml(post.title)}</h3>
              <p>${escapeHtml(post.excerpt)}</p>
            </a>
          `).join("") : `<div class="empty-state">No posts under this topic yet.</div>`}
        </div>
      </section>
    `;
  }

  setGlobalChrome();
  attachHeroMotion();

  switch (page) {
    case "home":
      renderHome();
      break;
    case "work":
      renderProjects();
      break;
    case "writing":
      renderPosts();
      break;
    case "about":
      renderAbout();
      break;
    case "experience":
      renderExperience();
      break;
    case "project-detail":
      renderProjectDetail();
      break;
    case "post-detail":
      renderPostDetail();
      break;
    case "topic-detail":
      renderTopicDetail();
      break;
    default:
      break;
  }
})();
