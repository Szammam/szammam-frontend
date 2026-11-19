# Szammam Frontend

## Prerequisites

- **Node.js**: Version pinned in `.nvmrc` (run `nvm use` if using nvm)
- **Package Manager**: `npm`

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

## Layout & Responsive Behavior

- **Desktop (`>= 768px`)**: Sticky top header (`AppHeader`) with horizontal navigation, centered `1120px` max-width content area (`PageContainer`), and footer (`AppFooter`).
- **Mobile (`< 768px`)**: Compact top header with brand and Login button, paired with a fixed 5-tab bottom navigation bar (`MobileBottomNav`) for thumb-friendly access.

## Design System Tokens

- **Location**: All color, typography, spacing, and border-radius CSS custom properties live in `src/styles/tokens.css` and are imported globally via `src/index.css`.
- **Color Ratio**: 60% Green (`--palette-green-*` for page canvas and primary brand), 30% Beige (`--palette-beige-*` for header, footer, and card surfaces), and 10% Purple (`--palette-purple-*` for primary CTAs and active navigation states).
- **Typography**: `Plus Jakarta Sans` loaded in `index.html` and mapped to `--font-family-sans` and modular `--font-size-*` tokens.

## Docker (Production Mode)

The `Dockerfile` uses a multi-stage **production** build: it compiles the static bundle with Vite in a Node.js builder stage and serves the output with Nginx on port `80` (configured with SPA fallback routing in `nginx.conf`).

### Build the Docker image

```bash
docker build -t szammam-frontend .
```

To point the build at a custom backend URL:

```bash
docker build --build-arg VITE_API_BASE_URL=http://localhost:8080 -t szammam-frontend .
```

### Run the container

```bash
docker run --rm -p 3000:80 szammam-frontend
```

Once running, open `http://localhost:3000` in your browser.
