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
`script.js` dynamically fetches and injects `header.html` and `footer.html` into every page on load. After injection, it marks the current page's nav link as active by comparing `window.location.pathname` against each link's `href`.

### Page Template
All pages follow the same structure:
```html
<link rel="stylesheet" href="styles.css">
<div id="header-placeholder"></div>
<section> ... </section>
<div id="footer-placeholder"></div>
<script src="script.js"></script>
```

### Files
- `header.html` / `footer.html` — shared navigation and footer, loaded via fetch
- `styles.css` — single stylesheet for the entire site (responsive, breakpoint at 600px)
- `script.js` — handles component injection and active nav state
- `CNAME` — sets custom domain to `ianlittle.com`

## Editing Guidelines

- To add a new nav link, edit only `header.html` — it propagates to all pages automatically.
- CSS uses flexbox for layout; the 600px media query switches to mobile layout.
- PDF assets live in the repo root alongside HTML files.
