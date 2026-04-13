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

    const heroTitle = $("#hero-title");
    if (heroTitle) heroTitle.innerHTML = `I&rsquo;m building a career in <span class="hero-highlight">neuroscience</span>, with strong <span class="hero-italic">neurotechnology</span> interests.`;
    
    if ($("#hero-summary")) $("#hero-summary").textContent = settings.shortBio;
    if ($("#current-focus")) $("#current-focus").textContent = settings.currentFocus;
    if ($("#career-arc")) $("#career-arc").textContent = settings.careerArc;
    if ($("#interest-pills")) $("#interest-pills").innerHTML = settings.interests.map((i) => `<span class="pill">${escapeHtml(i)}</span>`).join("");
    if ($("#hero-actions")) $("#hero-actions").innerHTML = settings.primaryCtas
      .map((cta) => `<a class="button ${cta.variant === "primary" ? "primary-button" : "ghost-button"}" href="${escapeHtml(cta.href)}">${escapeHtml(cta.label)}</a>`)
      .join("");
    if ($("#featured-projects")) $("#featured-projects").innerHTML = settings.featuredProjectSlugs
      .map((slug) => bySlug(data.projects, slug))
      .filter(Boolean)
      .map(renderFeatureProject)
      .join("");
    if ($("#featured-posts")) $("#featured-posts").innerHTML = settings.featuredPostSlugs
      .map((slug) => bySlug(data.posts, slug))
      .filter(Boolean)
      .map(renderFeaturePost)
      .join("");
    if ($("#highlight-experience")) $("#highlight-experience").innerHTML = settings.featuredExperienceIds
      .map((id) => byId(data.experience, id))
      .filter(Boolean)
      .map((item) => `<article class="timeline-item"><p class="eyebrow">${escapeHtml(item.category)}</p><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.summary)}</p></article>`)
      .join("");
    if ($("#long-bio-snippet")) $("#long-bio-snippet").textContent = settings.longBio[0];
  }

  function attachHeroMotion() {
    const heroContainer = document.querySelector(".hero-mask-container");
    if (!heroContainer) {
      return;
    }

    let rafId = 0;
    let currentX = 50;
    let currentY = 50;
    let targetX = 50;
    let targetY = 50;
    let currentSize = 0;
    let targetSize = 0;
    let isActive = false;

    function paint() {
      // Smooth interpolation (lerp) for fluid motion
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      currentSize += (targetSize - currentSize) * 0.12;

      heroContainer.style.setProperty('--mouse-x', `${currentX}%`);
      heroContainer.style.setProperty('--mouse-y', `${currentY}%`);
      heroContainer.style.setProperty('--mask-size', `${currentSize}vw`);

      // Keep animating if active or if variables haven't completely settled yet
      if (isActive || Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1 || Math.abs(targetSize - currentSize) > 0.05) {
        rafId = window.requestAnimationFrame(paint);
      } else {
        rafId = 0;
        // Snap explicitly to 0 when definitely stopped shrinking
        if (!isActive) heroContainer.style.setProperty('--mask-size', `0vw`);
      }
    }

    function queuePaint() {
      if (!rafId) {
        rafId = window.requestAnimationFrame(paint);
      }
    }

    function updateMask(event) {
      const rect = heroContainer.getBoundingClientRect();
      targetX = ((event.clientX - rect.left) / rect.width) * 100;
      targetY = ((event.clientY - rect.top) / rect.height) * 100;
      queuePaint();
    }

    heroContainer.addEventListener("pointerenter", (event) => {
      const rect = heroContainer.getBoundingClientRect();
      // Snap position to exactly where the mouse enters to originate the bloom there
      currentX = targetX = ((event.clientX - rect.left) / rect.width) * 100;
      currentY = targetY = ((event.clientY - rect.top) / rect.height) * 100;
      
      isActive = true;
      targetSize = 24; // Expanded blob size
      heroContainer.classList.add("is-active");
      queuePaint();
    });

    heroContainer.addEventListener("pointermove", updateMask);

    heroContainer.addEventListener("pointerleave", () => {
      isActive = false;
      targetSize = 0; // Shrink blob to 0
      heroContainer.classList.remove("is-active");
      queuePaint();
    });

    // Initialize CSS vars immediately
    heroContainer.style.setProperty('--mouse-x', `50%`);
    heroContainer.style.setProperty('--mouse-y', `50%`);
    heroContainer.style.setProperty('--mask-size', `0vw`);
  }

  function renderProjects() {
    // Render stripped for content rewrite mode
  }

  function renderPosts() {
    // Render stripped out for blank canvas mode
  }

  function renderAbout() {
    // Logic rendered mute
  }

  function renderExperience() {
    // Eliminated
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

  function initNeuronNetwork() {
    const canvas = document.getElementById("neuron-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width, height;
    let particles = [];
    let rafId = 0;

    // Mouse tracking for fluid push effect
    const mouse = { x: -1000, y: -1000 };
    const interactionRadius = 240;

    function resize() {
      // Calculate layout bounds
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      
      // Best Practice: Handle high-res retina screens cleanly
      // We scale the actual canvas bitmap pixel ratio up to match the hardwaredpi
      const dpi = window.devicePixelRatio || 1;
      canvas.width = width * dpi;
      canvas.height = height * dpi;
      ctx.scale(dpi, dpi);
      
      initParticles();
    }

    function initParticles() {
      particles = [];
      // Calculate a density that looks dense but maintains 60fps
      // For average laptops, generating points based on area ensures no perf drop
      const particleCount = Math.min(Math.floor((width * height) / 9000), 200); 
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35, // Slow, undulating drift
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 1.5 + 0.6 // Tiny axon/neuron node sizes
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        
        // 1. Natural drift
        p.x += p.vx;
        p.y += p.vy;

        // 2. Wrap around the screen bounds seamlessly
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // 3. Fluid Mouse Repulsion interaction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < interactionRadius) {
          const force = (interactionRadius - dist) / interactionRadius;
          // Subtly push neurons away from cursor
          p.x -= (dx / dist) * force * 1.8;
          p.y -= (dy / dist) * force * 1.8;
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(43, 52, 55, 0.7)"; 
        ctx.fill();

        // 4. Draw connecting lines (synaptic webs)
        for (let j = i + 1; j < particles.length; j++) {
          let p2 = particles[j];
          let dx2 = p.x - p2.x;
          let dy2 = p.y - p2.y;
          let dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          // Only connect if they drift close to each other
          if (dist2 < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            // Opacity scales with distance seamlessly
            const opacity = 1 - (dist2 / 120);
            ctx.strokeStyle = `rgba(43, 52, 55, ${opacity * 0.28})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      rafId = requestAnimationFrame(draw);
    }

    window.addEventListener("resize", () => {
      // Best Practice: Clear old animation loop when resizing window
      cancelAnimationFrame(rafId);
      resize();
      draw();
    });

    // Listen to mouse actions directly on hero to feed cursor positions to the canvas
    const heroVisual = document.querySelector(".hero-mask-container");
    if (heroVisual) {
      heroVisual.addEventListener("pointermove", (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      });
      heroVisual.addEventListener("pointerleave", () => {
        // Shunt mouse coords off-screen when out of focus
        mouse.x = -1000;
        mouse.y = -1000;
      });
    }

    resize();
    draw();
  }

  function initDynamicFavicon() {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      
      // Paint the non-transparent pixels appropriately
      ctx.globalCompositeOperation = "source-in";
      ctx.fillStyle = isDark ? "#ffffff" : "#1e1e1e"; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      let link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.href = canvas.toDataURL("image/png");
    };
    img.src = 'data:image/webp;base64,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';
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', initDynamicFavicon);

  setGlobalChrome();
  attachHeroMotion();
  initNeuronNetwork();
  initDynamicFavicon();

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

  // Setup Mobile Navigation Toggle
  const menuBtn = document.getElementById("mobile-menu-btn");
  const navDropdown = document.getElementById("mobile-menu-dropdown");
  const navWrap = document.querySelector(".global-floating-nav");
  if (menuBtn && navWrap) {
    menuBtn.addEventListener("click", () => {
      navWrap.classList.toggle("is-open");
      const expanded = navWrap.classList.contains("is-open");
      menuBtn.setAttribute("aria-expanded", expanded);
      
      const icon = menuBtn.querySelector(".material-symbols-rounded");
      if (icon) icon.textContent = expanded ? "close" : "menu";
    });
  }

})();
