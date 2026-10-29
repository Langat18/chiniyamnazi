# Chini ya Mnazi — Under the Tree Series, Ganze Edition

Static React (Vite) site for Kenya School of Government, Mombasa Campus.

## Run
    npm install
    cp .env.example .env   # set VITE_APPLY_FORM_URL to your Google Form
    npm run dev            # production build: npm run build

## Structure
- `src/data/`       all copy as plain objects (edit content here, not in components)
- `src/sections/`   one component per page section, each reading from `data/`
- `src/components/` reusable `layout/` and `ui/` primitives (Panel, Picture, BulletList)
- `src/config/`     tabs and Apply form URL
- `src/hooks/`      `useHashRoute` (tabs are linkable, e.g. `/#programme`)
- `src/styles/`     `tokens.css` (brand colours/fonts) -> `base.css` -> `components.css`
- `src/assets/images/` inject images by filename; see its README
