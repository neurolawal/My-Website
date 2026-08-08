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
      { label: "See selected work", href: "projects.html", variant: "primary" },
      { label: "Read the writing", href: "writing", variant: "ghost" }
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
      slug: "vofa",
      title: "Vofa",
      shortSummary: "Real-time neural & hardware signal monitor.",
      body: "Vofa is a high-velocity signal visualization tool designed for inspecting multi-channel sensor feeds, neural spikes, and telemetry data. It combines sub-millisecond canvas rendering with flexible decoding rules.",
      status: "live",
      type: "neurotech",
      topics: ["neurotechnology", "design-engineering"],
      year: "2026",
      roles: ["Creator", "Interface Lead"],
      collaborators: [],
      tools: ["Canvas 2D", "WebSockets", "Vanilla JS"],
      outcome: "Deployed and in active use for real-time waveform monitoring.",
      cover: "assets/project_vofa.png",
      links: [{ label: "Open Vofa", href: "https://usevofa.com/" }],
      featured: true
    },
    {
      slug: "alljoined-prepro",
      title: "Alljoined Prepro",
      shortSummary: "Neural signal preprocessing & EEG cleaning.",
      body: "An open repository focusing on robust preprocessing primitives for EEG and continuous electrophysiology recordings, including notch filtering, ICA artefact removal, and spectral decomposition.",
      status: "active",
      type: "neuroscience",
      topics: ["neuroscience", "neurotechnology"],
      year: "2026",
      roles: ["Researcher", "Developer"],
      collaborators: [],
      tools: ["Python", "MNE", "NumPy"],
      outcome: "Open source preprocessing reference pipeline for lab dataset preparation.",
      cover: "assets/project_alljoined.png",
      links: [{ label: "View GitHub Repo", href: "https://github.com/neurolawal/Alljoined_prepro" }],
      featured: true
    },
    {
      slug: "sensory-latency-lab",
      title: "Sensory Latency Lab",
      shortSummary: "Prototyping latency bounds in tactile feedback.",
      body: "An experimental testbed measuring human perception thresholds when auditory and tactile feedback loops are delayed between 5ms and 120ms.",
      status: "experiment",
      type: "neurotech",
      topics: ["neuroscience", "ux-product-thinking"],
      year: "2026",
      roles: ["Experimenter", "HCI Researcher"],
      collaborators: [],
      tools: ["Web Audio API", "WebHID", "JS"],
      outcome: "Established perceptual delay limits for non-invasive sensory mapping interfaces.",
      cover: "assets/project_sensory.png",
      links: [],
      featured: true
    },
    {
      slug: "design-engineering-system",
      title: "Design Engineering System",
      shortSummary: "Typographic tokens for scientific tools.",
      body: "A home for the interfaces, design tokens, and coded artifacts that sit between product design and scientific tooling. Built around Instrument Serif and Cabinet Grotesk typography.",
      status: "in progress",
      type: "design engineering",
      topics: ["design-engineering"],
      year: "2026",
      roles: ["Designer", "Front-end Builder"],
      collaborators: [],
      tools: ["CSS Custom Props", "Vanilla JS", "Figma"],
      outcome: "Provides unified visual language across scientific tools and personal web builds.",
      cover: "assets/project_designtokens.png",
      links: [],
      featured: true
    },
    {
      slug: "cortical-canvas",
      title: "Cortical Canvas Engine",
      shortSummary: "3D WebGL neural activity visualizer.",
      body: "A high-performance interactive raster plot and 3D brain electrode coordinate map capable of rendering 100k neural spikes per second.",
      status: "prototype",
      type: "neurotech",
      topics: ["neurotechnology", "design-engineering"],
      year: "2025",
      roles: ["Graphics Engineer"],
      collaborators: [],
      tools: ["Three.js", "WebGL", "GLSL"],
      outcome: "Proved 60fps rendering feasibility for dense electrode array streams in-browser.",
      cover: "assets/project_cortical.png",
      links: [],
      featured: true
    },
    {
      slug: "frictionless-adaptive-ui",
      title: "Frictionless Adaptive UI Suite",
      shortSummary: "Accessibility-first adaptive UI framework.",
      body: "An interface design suite exploring adaptive hit-target expansion, gesture prediction, and friction-free keyboard navigation.",
      status: "shipped",
      type: "design engineering",
      topics: ["ux-product-thinking", "design-engineering"],
      year: "2025",
      roles: ["UX Designer", "Front-end Architect"],
      collaborators: [],
      tools: ["Accessibility API", "CSS", "JS"],
      outcome: "Reduced interaction friction by 35% for motor-constrained test users.",
      cover: "assets/project_adaptive.png",
      links: [],
      featured: true
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
      link: "writing",
      relatedProjectSlugs: [],
      relatedPostSlugs: [
        "why-neurotechnology-keeps-pulling-me-in",
        "on-design-as-a-scientific-tool",
        "notes-from-building-in-public"
      ]
    }
  ]
};
