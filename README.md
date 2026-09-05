# Department of Statistics — HSTU Website

Official-style website for the **Department of Statistics, Hajee Mohammad Danesh Science and Technology University (HSTU), Dinajpur, Bangladesh**.

Built with plain HTML, CSS and vanilla JavaScript — no framework, no build step. Open `index.html` to view.

## Pages

| Page | Purpose |
| --- | --- |
| `index.html` | Homepage with graffiti hero, quick stats, programmes, faculty preview, research areas, notices |
| `about.html` | History (1979 → today), mission & vision, chairman's message |
| `academics.html` | B.Sc. (Hons.), MS and PhD programmes, course structure, admission steps |
| `faculty.html` | All faculty members and staff with contact details |
| `research.html` | Research areas, featured projects, publications |
| `notices.html` | Departmental notices and downloads |
| `contact.html` | Contact details, enquiry form and map |

## Structure

```
├── index.html          # Homepage
├── about.html          # About the department
├── academics.html      # Programmes & admission
├── faculty.html        # Faculty & staff
├── research.html       # Research & publications
├── notices.html        # Notice board
├── contact.html        # Contact & map
├── css/
│   └── style.css       # Graffiti-inspired design system
├── js/
│   └── main.js         # Nav, reveal animations, counters, tickers
└── assets/
    └── img/            # Artwork & illustrations (AI-generated)
```

## Design notes

- **Graffiti / street-art aesthetic**: dark walls, neon spray colours (magenta, cyan, lime, yellow), stencil headings, paint drips, ticking marquee "tags".
- **Fonts**: Bebas Neue (display) + Space Grotesk (body) via Google Fonts.
- **Accessibility**: semantic HTML, skip links, `aria-current` navigation, focus styles, `prefers-reduced-motion` support.
- **Responsive**: mobile drawer navigation, fluid grids, touch-friendly layout.

## Content sources

Faculty names, positions, emails and phone numbers are taken from the official HSTU department page
(<https://hstu.ac.bd/science/stt>). Notices link to the official university listings.
