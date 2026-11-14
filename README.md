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
