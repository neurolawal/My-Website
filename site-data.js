window.SITE_DATA = {
  siteSettings: {
    name: "Your Name",
    title: "Neuroscience-focused builder",
    shortBio: "I am building a career in neuroscience with strong neurotechnology interests, and I also make things across design, code, and interfaces.",
    longBio: [
      "This site is meant to feel like a professional home rather than a portfolio. The through-line is a scientific career in progress, with neurotechnology as a major frontier and design as one of the ways I think, prototype, and communicate.",
      "I previously freelanced as a UX designer, and that work still matters here, but it now sits alongside experiments, technical builds, research interests, and writing. The point is not to separate past and future too sharply. It is to show how those threads are converging.",
      "Use this space to document what you are learning, what you are building, and the kinds of questions you want to stay close to over time."
    ],
    currentFocus: "Learning deeply, writing consistently, and building a body of work that connects neuroscience, neurotechnology, and design engineering.",
    careerArc: "From UX and interface thinking toward neuroscience and neurotechnology, while keeping a builder's instinct alive in the process.",
    interests: [
      "Neuroscience",
      "Neurotechnology",
      "Design engineering",
      "Human-computer interaction",
      "Tools for thinking",
      "Writing in public"
    ],
    values: [
      "Scientific curiosity with public-facing clarity",
      "Interfaces as research tools, not just products",
      "A body of work that can grow across disciplines"
    ],
    primaryCtas: [
      { label: "See selected work", href: "work.html", variant: "primary" },
      { label: "Read the writing", href: "writing.html", variant: "ghost" }
    ],
    socialLinks: [
      { label: "Email", href: "mailto:you@example.com" },
      { label: "GitHub", href: "https://github.com/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/" }
    ],
    externalLinks: [
      { label: "Temporary Framer portfolio", href: "#" },
      { label: "Research profile", href: "#" },
      { label: "CV PDF", href: "#" }
    ],
    featuredProjectSlugs: [
      "neurotech-reading-lab",
      "design-engineering-system",
      "ux-case-study-archive"
    ],
    featuredPostSlugs: [
      "why-neurotechnology-keeps-pulling-me-in",
      "on-design-as-a-scientific-tool",
      "notes-from-building-in-public"
    ],
    featuredExperienceIds: [
      "exp-neuro-transition",
      "exp-freelance-ux",
      "exp-writing-practice"
    ]
  },
  topics: [
    {
      slug: "neuroscience",
      name: "Neuroscience",
      description: "Questions, reading, and reflections around mind, brain, and method.",
      featuredPostSlugs: ["why-neurotechnology-keeps-pulling-me-in"],
      featuredProjectSlugs: ["neurotech-reading-lab"]
    },
    {
      slug: "neurotechnology",
      name: "Neurotechnology",
      description: "Interfaces, tools, and systems that connect engineering to neural inquiry.",
      featuredPostSlugs: ["why-neurotechnology-keeps-pulling-me-in"],
      featuredProjectSlugs: ["neurotech-reading-lab"]
    },
    {
      slug: "design-engineering",
      name: "Design engineering",
      description: "Making software and interfaces that think carefully about form and behavior.",
      featuredPostSlugs: ["on-design-as-a-scientific-tool"],
      featuredProjectSlugs: ["design-engineering-system"]
    },
    {
      slug: "ux-product-thinking",
      name: "UX / product thinking",
      description: "Past freelance work and enduring lessons in interface design.",
      featuredPostSlugs: ["notes-from-building-in-public"],
      featuredProjectSlugs: ["ux-case-study-archive"]
    },
    {
      slug: "notes-reflections",
      name: "Notes / reflections",
      description: "Lighter notes, questions, and fragments from ongoing work.",
      featuredPostSlugs: ["notes-from-building-in-public"],
      featuredProjectSlugs: []
    }
  ],
  projects: [
    {
      slug: "neurotech-reading-lab",
      title: "Neurotech Reading Lab",
      shortSummary: "A concept for a public-facing reading and synthesis practice around neurotechnology papers, tools, and open questions.",
      body: "Use this entry for research notes, paper breakdowns, concept maps, and experimental directions. The goal is to show serious scientific interest in public, even before you have a traditional publication list.\n\nGood future additions here could include paper notes, annotated diagrams, prototype interfaces, and short essays about where a line of inquiry might lead.",
      status: "in progress",
      type: "neurotech",
      topics: ["neuroscience", "neurotechnology"],
      year: "2026",
      roles: ["Research learner", "Writer", "Builder"],
      collaborators: [],
      tools: ["Notion or Obsidian", "Figma", "HTML/CSS/JS"],
      outcome: "Positions scientific curiosity as an active body of work rather than a private backlog.",
      cover: "",
      links: [
        { label: "Related topic", href: "topic.html?slug=neurotechnology" }
      ],
      featured: true
    },
    {
      slug: "design-engineering-system",
      title: "Design Engineering System",
      shortSummary: "A home for the interfaces, prototypes, and coded artifacts that sit between product design and software implementation.",
      body: "This project acts as a parent container for the kinds of builds that demonstrate taste, systems thinking, and front-end craft. It is where you can show that design engineering is not a side note but a real capability that complements scientific ambitions.\n\nExamples could include interactive essays, prototype tools, personal utilities, or internal systems you have built for yourself.",
      status: "in progress",
      type: "design engineering",
      topics: ["design-engineering"],
      year: "2026",
      roles: ["Designer", "Front-end builder"],
      collaborators: [],
      tools: ["Framer", "Figma", "Vanilla JS"],
      outcome: "Shows that you can think through interaction, structure, and implementation together.",
      cover: "",
      links: [],
      featured: true
    },
    {
      slug: "ux-case-study-archive",
      title: "Selected UX Case Study Archive",
      shortSummary: "A curated pointer to earlier freelance UX work without making it the main frame of the site.",
      body: "This entry is the bridge to prior freelance and UX projects. Keep it curated rather than exhaustive. The point is to preserve useful evidence of experience while letting the broader website tell a bigger story.\n\nYou can link outward to your temporary Framer portfolio until you decide to migrate selected case studies into this site.",
      status: "shipped",
      type: "ux",
      topics: ["ux-product-thinking", "design-engineering"],
      year: "2024-2026",
      roles: ["Freelance UX designer"],
      collaborators: [],
      tools: ["Framer", "Figma", "Research synthesis"],
      outcome: "Retains prior credibility while keeping the site's center of gravity on where you are headed.",
      cover: "",
      links: [
        { label: "Open temporary Framer portfolio", href: "#" }
      ],
      featured: true
    },
    {
      slug: "interface-experiments",
      title: "Interface Experiments",
      shortSummary: "A running collection of smaller ideas and prototypes that sharpen your instincts as a builder.",
      body: "Use this for lower-stakes work that still deserves a public footprint. Small projects can prove range, discipline, and curiosity when they are framed clearly.",
      status: "idea",
      type: "experiment",
      topics: ["design-engineering", "notes-reflections"],
      year: "2026",
      roles: ["Builder"],
      collaborators: [],
      tools: ["HTML/CSS", "Sketches", "Rapid prototypes"],
      outcome: "Turns unfinished-but-useful experiments into part of the site's living record.",
      cover: "",
      links: [],
      featured: false
    }
  ],
  posts: [
    {
      slug: "why-neurotechnology-keeps-pulling-me-in",
      title: "Why neurotechnology keeps pulling me in",
      excerpt: "A note on why the intersection of neuroscience, tools, and interface design feels like the right long-term frontier.",
      body: "This is a starter post placeholder. Replace it with your own essay about the scientific and human questions that make neurotechnology compelling to you.\n\nYou can use posts like this to make your trajectory legible before your external credentials fully catch up.",
      publishedDate: "2026-03-18",
      updatedDate: "2026-03-18",
      topics: ["neuroscience", "neurotechnology"],
      series: "career arc",
      readingTime: "4 min read",
      featured: true,
      relatedProjectSlugs: ["neurotech-reading-lab"],
      canonicalUrl: ""
    },
    {
      slug: "on-design-as-a-scientific-tool",
      title: "On design as a scientific tool",
      excerpt: "A reflection on interface design, communication, and prototyping as part of serious inquiry rather than separate from it.",
      body: "This placeholder can become a useful framing essay for the whole site. It explains why design is still part of your identity even as the site becomes more scientist-first.\n\nIt also helps recruiters, collaborators, and researchers understand that your design background is not a detour. It is part of the method.",
      publishedDate: "2026-03-12",
      updatedDate: "2026-03-15",
      topics: ["design-engineering", "ux-product-thinking"],
      series: "working principles",
      readingTime: "5 min read",
      featured: true,
      relatedProjectSlugs: ["design-engineering-system"],
      canonicalUrl: ""
    },
    {
      slug: "notes-from-building-in-public",
      title: "Notes from building in public again",
      excerpt: "A lighter note about publishing unfinished work, keeping a blog, and resisting the urge to wait until everything is polished.",
      body: "Use this type of post for lighter reflections and working notes. These entries make the website feel lived-in and current, especially when your larger projects are still forming.",
      publishedDate: "2026-03-09",
      updatedDate: "2026-03-09",
      topics: ["notes-reflections", "ux-product-thinking"],
      series: "field notes",
      readingTime: "3 min read",
      featured: true,
      relatedProjectSlugs: ["interface-experiments"],
      canonicalUrl: ""
    }
  ],
  experience: [
    {
      id: "exp-neuro-transition",
      title: "Neuroscience transition in progress",
      organization: "Self-directed",
      category: "research",
      startDate: "2025",
      endDate: "Present",
      location: "Remote",
      summary: "Building the foundations of a neuroscience-oriented career through sustained study, writing, and project development.",
      bullets: [
        "Tracking questions that sit between neuroscience, neurotechnology, and interface design",
        "Using public writing and project work as proof of direction and seriousness",
        "Developing an identity that is grounded in science without discarding design craft"
      ],
      link: "",
      relatedProjectSlugs: ["neurotech-reading-lab"],
      relatedPostSlugs: ["why-neurotechnology-keeps-pulling-me-in"]
    },
    {
      id: "exp-freelance-ux",
      title: "Freelance UX designer",
      organization: "Independent",
      category: "freelance",
      startDate: "2022",
      endDate: "2025",
      location: "Remote",
      summary: "Worked on interface and product design problems across client contexts, building a base in UX, systems thinking, and presentation.",
      bullets: [
        "Created case-study material that can still support current opportunities",
        "Built habits around structured communication and iteration",
        "Developed taste for the overlap between interaction, product thinking, and implementation"
      ],
      link: "#",
      relatedProjectSlugs: ["ux-case-study-archive"],
      relatedPostSlugs: ["on-design-as-a-scientific-tool"]
    },
    {
      id: "exp-writing-practice",
      title: "Multi-topic writing practice",
      organization: "Personal blog",
      category: "publication",
      startDate: "2026",
      endDate: "Present",
      location: "Online",
      summary: "Maintaining a blog that makes room for serious topics, exploratory notes, and cross-disciplinary thinking.",
      bullets: [
        "Organized by topic and series to keep variety coherent",
        "Supports public thinking around career direction and technical interests",
        "Creates continuity between the Work and Writing sections of the site"
      ],
      link: "writing.html",
      relatedProjectSlugs: [],
      relatedPostSlugs: [
        "why-neurotechnology-keeps-pulling-me-in",
        "on-design-as-a-scientific-tool",
        "notes-from-building-in-public"
      ]
    }
  ]
};
