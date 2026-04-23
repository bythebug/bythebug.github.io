# bythebug.github.io

Personal portfolio website for **Suraj Van Verma** — Backend Engineer & AI Builder.

🔗 [bythebug.github.io](https://bythebug.github.io)

## Pages

| Page | URL | Description |
|---|---|---|
| Portfolio | `/` | Hero, featured projects, about, skills, experience, contact |
| Projects | `/projects/` | Full list of all projects with one-liners and tech stacks |

## Stack

- **Jekyll** — static site generator, hosted on GitHub Pages
- **HTML/CSS** — no frameworks, no JavaScript dependencies
- **Inter** — font via Google Fonts
- **Dark theme** — custom CSS design system

## Structure

```
├── index.html               # Main portfolio page
├── projects/
│   └── index.html           # All projects listing
├── assets/
│   └── photo.jpg            # Profile photo
├── stylesheets/
│   ├── portfolio.css        # Main design system
│   └── blog-modern.css      # Blog page styles
├── _layouts/
│   ├── default.html         # Base layout (used by blog)
│   └── post.html            # Individual post layout
├── _posts/                  # Blog posts (Markdown)
└── _config.yml              # Jekyll config
```

## Local Development

```bash
bundle install
bundle exec jekyll serve
```

Open [http://localhost:4000](http://localhost:4000)

## Contact

- Email: suraj.verma@mail.mcgill.ca
- LinkedIn: [linkedin.com/in/bythebug](https://www.linkedin.com/in/bythebug)
- GitHub: [github.com/bythebug](https://github.com/bythebug)
