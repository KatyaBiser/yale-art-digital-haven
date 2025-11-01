# Yale School of Art - Website

A modern, responsive website for Yale School of Art showcasing graduate programs in Art & Design.

## About

This website presents information about Yale School of Art's MFA programs including:
- Graphic Design
- Painting/Printmaking
- Photography
- Sculpture

**Live Site**: https://katyabiser.github.io/yale-art-digital-haven/

## Technologies

This project is built with:

- **Vite** - Fast build tool and dev server
- **React** - UI framework
- **TypeScript** - Type-safe JavaScript
- **React Router** - Client-side routing (HashRouter for GitHub Pages)
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **Radix UI** - Accessible component primitives

## Development

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Getting Started

```sh
# Clone the repository
git clone https://github.com/KatyaBiser/yale-art-digital-haven.git

# Navigate to the project directory
cd yale-art-digital-haven

# Install dependencies
npm install

# Start the development server
npm run dev
```

The development server will start at `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions.

Every push to the `main` branch triggers a deployment workflow that:
1. Installs dependencies
2. Builds the project
3. Deploys to GitHub Pages

The site is available at: https://katyabiser.github.io/yale-art-digital-haven/

### Manual Deployment

To manually deploy:

```sh
# Build the project
npm run build

# The dist/ folder contains the production build
# Commit and push changes to trigger automatic deployment
git add .
git commit -m "Your commit message"
git push
```

## Project Structure

```
yale-art-digital-haven/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components (routes)
│   ├── assets/         # Images and static assets
│   ├── App.tsx         # Main app component with routing
│   └── main.tsx        # Application entry point
├── public/             # Public static files
├── .github/
│   └── workflows/      # GitHub Actions workflows
├── index.html          # HTML entry point
├── vite.config.ts      # Vite configuration
└── package.json        # Dependencies and scripts
```

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Test locally with `npm run dev`
4. Build and verify with `npm run build && npm run preview`
5. Commit and push your changes
6. Create a pull request

## License

This project is for educational purposes.
