# portfolio_v2

Personal portfolio site for Aaron Janke — deployed at https://aaronjanke.com via GitHub Pages.

## The alignment principle

This repo is **not just a website**. It is one surface in a coordinated set of professional artifacts. Whenever a change touches how Aaron is *presented* (title, tagline, skills, project framing, tech stack emphasis, project list), treat it as a multi-surface change and check the other surfaces for drift.

### Surfaces to keep aligned

| Surface | Source / Location | Notes |
|---|---|---|
| Website | this repo (`src/Portfolio/`) | Hero tagline, About copy, skill groups, project list |
| Resume / CV | Canva design `Aaron_Janke_CV_LATEST` (id `DAHChJefwfU`, edit: https://www.canva.com/d/-YLGeuNb2uf6ckV) | The Canva design is the source of truth for alignment checks. Older dated copies (e.g. `Aaron_Janke_CV_April_2026.pdf` in repo root, or other dated designs in Canva) are stale snapshots — do not align against them. Use the Canva connector (`mcp__claude_ai_Canva__get-design-content`) to read current content. Ask before regenerating; user maintains the source. |
| LinkedIn | https://www.linkedin.com/in/aaron-janke/ | Headline, About, Experience, Skills — Claude can't edit directly; surface a diff for the user to apply |
| GitHub profile | https://github.com/AJTJ | Pinned repos should match featured projects on the site |
| _(others as they come up)_ | — | Add rows here when new surfaces appear (job board profiles, conference bios, etc.) |

### When content changes, ask the alignment questions

Before considering a content change "done":

1. **Tagline / title change** (e.g. Hero `Title`, About intro) → does the LinkedIn headline still match? Does the CV summary?
2. **Skill change** (add/remove/reorder in `src/Portfolio/About/index.tsx` `SkillGroup`s, or icons in `toolArray`) → does the CV skills section reflect this? LinkedIn Skills?
3. **New project added** to `src/Portfolio/index.tsx` → does it belong on the CV? Should the GitHub repo be pinned? LinkedIn Featured?
4. **Project description rewritten** → is the CV bullet for the same project still consistent in framing?
5. **Removed/deprecated project** → remove from CV and unpin on GitHub too.

When the user makes a change in conversation, proactively flag the implied work on other surfaces — don't silently update only one surface and move on.

## Project quick reference

- **Stack**: React 18 + TypeScript, Emotion (CSS-in-JS), Create React App (`react-scripts`), `facepaint` for media queries
- **Entry**: `src/index.tsx` → `src/App.tsx` → `src/Portfolio/index.tsx`
- **Theme**: `src/Portfolio/theme.tsx` (colors, breakpoints `mq`/`mqMin`/`mqO`)
- **Layout primitives**: `src/Portfolio/layout.tsx` (`MarginedContainer`, `Grid`, `SectionTitle`, `Button`, `Text`)
- **Sections**: `Hero/`, `About/`, `Project/`, `Contact/`, `Nav/` — each a folder under `src/Portfolio/`
- **Project list**: hardcoded in `src/Portfolio/index.tsx` — `<Project>` instances with `projTitle`, `ghLinks`, `liveLink`, `projImg`, `projCopy`
- **Skill groups**: `src/Portfolio/About/index.tsx` — `SkillGroup`s + `toolArray` of icon images
- **Assets**: `src/Portfolio/assets/` (project images), `src/Portfolio/About/icons/` (tech logos)
- **Static**: `public/` — favicon, headshots, manifest, CNAME

## Commands

- `yarn start` — dev server (http://localhost:3000)
- `yarn build` — production build to `build/`
- `yarn deploy` — runs `predeploy` (build) then `gh-pages -d build` to publish

## Conventions

- Styled components co-located in each section's `index.tsx` — keep it that way unless a primitive is reused across sections (then move to `layout.tsx`).
- Responsive breakpoints come from `theme.tsx` (`mq[0..3]` = 400/600/800/1060). Don't hardcode media queries.
- Colors come from `theme.colors` — don't inline hex values.
- Project copy is plain prose, present-tense, technical-but-readable. Match the existing voice when adding new entries.
