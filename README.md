# Gourishankar Shiragur — Portfolio

A single-page portfolio built around the Bronze → Silver → Gold medallion architecture as its
actual information structure: **Bronze** (raw profile), **Silver** (refined skills),
**Pipeline Runs** (work experience, styled as execution history), **Gold** (curated projects).
A scrollspy "pipeline rail" tracks your position down the page.

No build step, no framework, no backend — plain HTML/CSS/JS, deployable free on GitHub Pages
in about two minutes.

## 1. Add your resume PDF

Drop your resume as `assets/resume.pdf` (replacing `assets/RESUME_PLACEHOLDER.txt`). The
"Download Résumé" buttons already point at that path.

## 2. Preview locally

No build tools needed — just open it:

```bash
# option A: just open the file directly
open index.html          # macOS
xdg-open index.html      # Linux
start index.html         # Windows

# option B: serve it (avoids any browser file:// quirks)
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 3. Deploy for free (GitHub Pages)

```bash
git init
git add .
git commit -m "Portfolio site"
git remote add origin https://github.com/Gourishshiragur/portfolio.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: main, folder: / (root)**.
Your site goes live at `https://gourishshiragur.github.io/portfolio/` within a minute or two.

## Editing content

Everything on the page — your summary, skills, work history, and projects — lives in one file:
**`js/data.js`**. It's plain, readable JavaScript. To make a change:

1. Open `js/data.js` and edit the `PORTFOLIO_DATA` object directly — add a project by copying
   an existing entry in the `projects` array, remove one by deleting its entry, edit any field
   as plain text.
2. Commit and push:
   ```bash
   git add js/data.js
   git commit -m "Update portfolio content"
   git push
   ```
3. GitHub Pages redeploys automatically — your change is live within a minute or two.

There's no in-browser editor. A static site with no backend has nowhere to durably save a live
edit for other visitors — editing the source file and pushing is the one real way to change
what's on the site, so that's the only workflow this project has.

## Structure

```
portfolio-site/
├── index.html          # page structure
├── css/styles.css       # design system (medallion-themed palette + type)
├── js/data.js            # ALL content — edit this to update your portfolio
├── js/render.js          # renders data.js into the DOM + scrollspy
└── assets/
    └── resume.pdf         # your resume (add this)
```

## Updating project links

Each project in `js/data.js` has `github` and `demo` fields. Once DataDoctor AI is deployed on
Streamlit Community Cloud, add its `*.streamlit.app` URL to that project's `demo` field in
`data.js` and push — the "Live demo ↗" link will appear on the card automatically.
