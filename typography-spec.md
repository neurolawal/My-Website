# Typography & Visual Language Spec
> Inspired by alljoined.com — for use as an AI coding prompt / design system reference

---

## Fonts

### Display / Headings
- **Font**: `arizona_mix` (licensed, not publicly available)
- **Free alternative**: Use [`"Cabinet Grotesk"`](https://www.fontshare.com/fonts/cabinet-grotesk) from Fontshare — same editorial, slightly-condensed geometric feel
- **Fallback stack**: `"Cabinet Grotesk", "DM Sans", ui-sans-serif, system-ui, sans-serif`
- **Weight**: 400 (regular) — intentionally light for large display text, not bold
- **Usage**: ALL headings (h1–h6)

### Body / Blog prose
- **Font**: `"Newsreader"` — available on Google Fonts
- **Import**: `@import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300..700;1,6..72,300..700&display=swap')`
- **Usage**: Long-form paragraphs, blog post body copy, blockquotes
- **Weight**: 400 regular, 500 for emphasis
- **Style**: Italic available for in-text emphasis (`<em>`, `*term*`)

### UI / Navigation / Labels
- **Font**: System sans — `ui-sans-serif, system-ui, sans-serif`
- **Usage**: Nav links, buttons, metadata labels, captions, footer

---

## Type Scale (CSS Custom Properties)

```css
:root {
  /* Display sizes — used for hero headings */
  --text-7xl: 4.5rem;     /* line-height: 0.85  | letter-spacing: -0.04em */
  --text-6xl: 4rem;       /* line-height: 1     | letter-spacing: -0.04em */
  --text-5xl: 3rem;       /* line-height: 1 */
  --text-4xl: 2.5rem;     /* line-height: 1     | letter-spacing: -0.04em */
  --text-3xl: 2rem;       /* line-height: 1.25  | letter-spacing: -0.02em */
  --text-2xl: 1.5rem;     /* line-height: 1.167 | letter-spacing: -0.04em */

  /* Body sizes */
  --text-xl:   1.25rem;   /* line-height: 1.1   | letter-spacing: -0.02em */
  --text-lg:   1.125rem;  /* line-height: 1.556 */
  --text-base: 1rem;      /* line-height: 1.5 */
  --text-sm:   0.875rem;  /* line-height: 1.429 */
  --text-xs:   0.75rem;   /* line-height: 1.333 */

  /* Letter spacing tokens */
  --tracking-tighter: -0.04em;
  --tracking-tight:   -0.02em;
}
```

---

## Heading Styles

All headings use **font-weight: 400** (not bold). Tightening letter-spacing at large sizes is the key visual move.

```css
h1, h2, h3, h4, h5, h6 {
  font-family: "Cabinet Grotesk", "DM Sans", ui-sans-serif, system-ui, sans-serif;
  font-weight: 400;
}

h1 {
  font-size: 4.5rem;    /* --text-7xl */
  line-height: 0.85;
  letter-spacing: -0.04em;
}

h2 {
  font-size: 4rem;      /* --text-6xl */
  line-height: 1;
  letter-spacing: -0.04em;
}

h3 {
  font-size: 2rem;      /* --text-3xl */
  line-height: 1.25;
  letter-spacing: -0.02em;
}

h4, h5, h6 {
  font-size: 1.25rem;   /* --text-xl */
  line-height: 1.1;
  letter-spacing: -0.02em;
}
```

---

## Body / Blog Copy

```css
p, li, blockquote {
  font-family: "Newsreader", serif;
  font-size: 1rem;          /* --text-base */
  line-height: 1.5;
  font-weight: 400;
}

/* Blog articles — bump up for readability */
article p {
  font-size: 1.125rem;      /* --text-lg */
  line-height: 1.75;
}

em {
  font-style: italic;       /* Newsreader's italic is intentional, use it */
}
```

---

## Colors

```css
:root {
  --color-primary:        #000000;        /* Main text */
  --color-primary-light:  #ffffff;        /* Light text on dark sections */
  --color-off-black:      #1e1e1e;        /* Softer alternative to pure black */

  /* Off-white backgrounds — layered for depth */
  --color-off-white-50:   #fdfcfb;        /* Lightest — page base */
  --color-off-white-80:   #fcfbf8;        /* Mid */
  --color-off-white-200:  #faf6f0;        /* Warmest — cards, sections */

  /* Muted text — secondary labels, captions */
  --color-muted:          #000000a3;      /* ~64% black */
}
```

---

## Scroll Animation (Focus Fade)

Every text element fades in as it enters the viewport. This is the signature interaction.

```css
@keyframes focus-fade {
  from {
    opacity: 0;
    filter: blur(4px);
  }
  to {
    opacity: 1;
    filter: blur(0);
  }
}

main p,
main h1, main h2, main h3, main h4, main h5, main h6,
main li,
main a,
main span {
  animation: 0.25s ease-in backwards focus-fade;
  animation-timeline: view();
  animation-range: 0% 25vh;
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  main p, main h1, main h2, main h3, main h4, main h5, main h6,
  main li, main a, main span {
    animation: none;
  }
}
```

> **Note**: `animation-timeline: view()` requires Chrome 115+ / Safari 18+. For broader support, use an IntersectionObserver fallback.

---

## Blog Post Specific Rules

```css
/* Blog title */
.blog-title {
  font-family: "Cabinet Grotesk", ui-sans-serif, sans-serif;
  font-size: 4rem;
  line-height: 1;
  letter-spacing: -0.04em;
  font-weight: 400;
}

/* Blog subheading / intro */
.blog-subtitle {
  font-family: "Cabinet Grotesk", ui-sans-serif, sans-serif;
  font-size: 1.25rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--color-muted);
}

/* Blog body prose */
.blog-body {
  font-family: "Newsreader", serif;
  font-size: 1.125rem;
  line-height: 1.75;
  color: var(--color-off-black);
}

/* Metadata: date, author, tags */
.blog-meta {
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 0.875rem;
  color: var(--color-muted);
  letter-spacing: 0;
}
```

---

## Summary for AI IDE Prompt

Paste this into your IDE system prompt or context:

```
Typography system:
- Display/headings: "Cabinet Grotesk" (Fontshare), weight 400, with tight letter-spacing (-0.04em at large sizes).
  Headings are NOT bold — the scale and spacing do the visual work.
- Body/blog prose: "Newsreader" (Google Fonts), serif, weight 400, italic supported.
- UI labels/nav: system sans-serif stack.
- Background: warm off-white (#fdfcfb to #faf6f0), not pure white.
- Text color: pure black (#000) for headings, #1e1e1e for body, #000000a3 for secondary/muted.
- Scroll animation: elements fade+blur in using CSS scroll-driven animation (animation-timeline: view()).
- Blog posts: large display heading (4rem, weight 400), Newsreader body at 1.125rem/1.75 line-height.
```
