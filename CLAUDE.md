# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.


## Project Overview

Personal portfolio website for Ian Little, hosted on GitHub Pages at `ianlittle.com`. No build system or package manager — pure vanilla HTML, CSS, and JavaScript.

## Deployment

Changes pushed to `main` are automatically deployed to GitHub Pages. There is no build step; files are served directly.

## Design Preferences

I am not a frontend developer. Keep all designs clean, modern, and minimal.

## Architecture

### Component Loading
`script.js` dynamically fetches and injects `header.html` and `footer.html` into every page on load. After injection, it marks the current page's nav link as active by comparing `window.location.pathname` against each link's `href`. It also initialises the dark mode toggle and persists the theme preference in `localStorage`.

### Theme
Each page includes an inline `<script>` in `<head>` that reads `localStorage` (or `prefers-color-scheme`) and sets `data-theme="dark"` before paint, preventing a flash of wrong theme. The toggle button in `header.html` is wired up by `initThemeToggle()` in `script.js` after header injection.

### Page Template
All pages follow the same structure:
```html
<link rel="stylesheet" href="styles.css">
<header></header>
<section> ... </section>
<footer></footer>
<script src="script.js"></script>
```

### Pages
- `index.html` — homepage with bio, About Me section, and profile photo
- `professional-profile.html` — Education, Experience, Skills, Highlights & Activities, CV download
- `projects.html` — University Projects and Personal Projects
- `contact.html` — links to GitHub, LinkedIn, email
- `education.html` — standalone education page (mirrors education section of profile)
- `cv.html` — standalone experience page (mirrors experience section of profile)

### Shared Components
- `header.html` — site title, subtitle, nav links, dark mode toggle
- `footer.html` — copyright and contact email link

### Other Files
- `styles.css` — single stylesheet; CSS variables for light/dark themes; responsive breakpoint at 600px
- `script.js` — component injection, active nav state, dark mode toggle
- `CNAME` — sets custom domain to `ianlittle.com`
- PDF assets (`CV.pdf`, project PDFs) live in the repo root

### Content Duplication
`education.html` and `cv.html` duplicate content from `professional-profile.html`. When editing education or experience entries, update all three files to keep them in sync.

## Styling Patterns

- **Card list entries**: `section > ul > li` — cards with blue left accent border
- **Tag pills**: `ul.tag-list > li` — used for courses, skills
- **Activity lists**: `ul.activity-list` — bulleted sub-lists (extracurriculars, highlights)
- **Expandable sections**: native `<details>/<summary>` elements with custom arrow styling
- **Contact cards**: `li:has(> a:only-child)` — hover effect with arrow icon

## Editing Guidelines

- To add a new nav link, edit only `header.html` — it propagates to all pages automatically.
- CSS uses flexbox for layout; the 600px media query switches to mobile layout.
- PDF assets live in the repo root alongside HTML files.
- When adding new content sections, use `<h2>` headings with `<hr/>` separators and existing card/tag-list/activity-list patterns.
- Remember to update `education.html` / `cv.html` when changing their counterpart sections in `professional-profile.html`.
