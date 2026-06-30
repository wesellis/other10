# Other10

**Live site:** https://wesellis.github.io/other10/

Enterprise software portfolio site built with Next.js 16, React 19, TypeScript, and Tailwind CSS. Static export deploys to any web server.

## Getting Started

```bash
git clone https://github.com/wesellis/other10.git
cd other10
npm install
npm run dev
```

Dev server runs at http://localhost:3000 with hot reload.

## Build

```bash
npm run build
```

Generates static files in `out/` — upload to any web server.

## Project Structure

```
other10/
├── app/
│   ├── layout.tsx           # Root layout with Header & Footer
│   ├── page.tsx             # Homepage with portfolio grid
│   ├── globals.css          # Global styles with Other10 brand colors
│   └── blog/
│       ├── page.tsx         # Blog index
│       └── [slug]/page.tsx  # Individual blog posts
├── components/
│   ├── Header.tsx           # Navigation header with dropdown menu
│   └── Footer.tsx           # Site footer
├── public/images/           # Project screenshots and logos
├── next.config.js           # Static export configuration
└── tailwind.config.js       # Other10 brand colors
```

## Adding a Project Page

1. Create `app/yourproject/page.tsx`
2. Add the project to the `projects` array in `components/Header.tsx`
3. Add the project card to `app/page.tsx`

## Brand Colors

- **other10-black**: #131313
- **other10-gold**: #B99935
- **other10-white**: #F8F9FA

Fonts: Cinzel (headings) + Montserrat (body)

## Technologies

- **Next.js 16** — React framework with App Router and static export
- **React 19** — UI library
- **TypeScript 5.9** — Type safety
- **Tailwind CSS 4.1** — Utility-first CSS

## License

MIT © Wesley Ellis
