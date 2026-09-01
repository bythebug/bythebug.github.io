# bythebug portfolio

Astro 4 static site for Suraj Van Verma (bythebug brand). Deployed to GitHub Pages at **https://bythebug.github.io** via GitHub Actions.

## Commands

```bash
npm run dev      # dev server → http://localhost:4321
npm run build    # build to dist/
git push origin main  # triggers GitHub Actions deploy
```

## Stack

- **Astro 4.16** (output: static) + `@astrojs/sitemap@3.1.6` (pinned — 3.7+ breaks on Astro 4.16) + `@astrojs/rss`
- Hand-crafted CSS — no Tailwind, no component libraries
- GitHub Pages CI: `.github/workflows/deploy.yml`

## Design system

- **Fonts:** Fraunces (display serif) + DM Sans (body) via Google Fonts
- **Colors:** `--bg: #F9F8F5` · `--text: #1A1916` · `--accent: #E06B45` · `--border: #E8E6E0`
- **Dark mode:** `[data-theme="dark"]` on `<html>`, toggled via localStorage + system preference
- **CSS vars:** `--pad-x`, `--max-w`, `--font-display`, `--font-body`, `--ease-out`

## Key files

| File | What it is |
|------|-----------|
| `src/layouts/Layout.astro` | Shell: full SEO meta, OG/Twitter, JSON-LD Person, manifest, RSS link |
| `src/components/Nav.astro` | Sticky nav with frosted-glass scroll state + theme toggle |
| `src/components/IMessagePopup.astro` | iOS-style Calendly popup (1.8s delay, session-dismissed) |
| `src/pages/index.astro` | Home: Nav → Hero → OrgStrip → About → Contact |
| `src/pages/archive.astro` | YouTube grid (3-col) + Spotify grid (5-col) + platform chips |
| `src/pages/blog/[slug].astro` | Blog post with BlogPosting JSON-LD |
| `src/pages/rss.xml.js` | RSS feed at /rss.xml |
| `src/pages/404.astro` | Custom 404 |
| `public/og-image.png` | 1200×630 OG card (rendered from browse skill) |
| `public/robots.txt` | Allows all AI crawlers explicitly |
| `public/llms.txt` | llms.txt standard for AI/LLM discovery |
| `public/llms-full.txt` | Full content dump for AI indexing |
| `public/manifest.json` | PWA manifest |
| `public/spotify/album.jpg` | Spotify album art (hotlink-blocked, served locally) |
| `public/DPs.png` | Profile photo used in Nav popup + OG image |

## SEO / discoverability

Everything is wired up:
- Sitemap at `/sitemap-index.xml`
- `robots.txt` allows GPTBot, ClaudeBot, Google-Extended, PerplexityBot, meta-externalagent, etc.
- `llms.txt` + `llms-full.txt` for AI crawlers
- Full OG/Twitter/canonical/JSON-LD in Layout
- RSS at `/rss.xml`
- PWA manifest + icons at `/icons/`

## Skill routing

When the user's request matches an available skill, invoke it via the Skill tool. When in doubt, invoke the skill.

Key routing rules:
- Product ideas/brainstorming → invoke /office-hours
- Strategy/scope → invoke /plan-ceo-review
- Architecture → invoke /plan-eng-review
- Design system/plan review → invoke /design-consultation or /plan-design-review
- Full review pipeline → invoke /autoplan
- Bugs/errors → invoke /investigate
- QA/testing site behavior → invoke /qa or /qa-only
- Code review/diff check → invoke /review
- Visual polish → invoke /design-review
- Ship/deploy/PR → invoke /ship or /land-and-deploy
- Save progress → invoke /context-save
- Resume context → invoke /context-restore
- Author a backlog-ready spec/issue → invoke /spec
