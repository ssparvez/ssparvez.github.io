# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Local Development
- `npm start` - Start development server on http://localhost:3000
- `npm run build` - Build production bundle
- `npm test` - Run Jest tests
- `npm run eject` - Eject from Create React App (irreversible)

### Deployment
- `npm run deploy` - Build and deploy to gh-pages branch (GitHub Pages)

## Architecture Overview

This is a single-page React portfolio website built with Create React App and TypeScript. The site showcases personal projects and uses SCSS for styling.

### Key Components Structure
- **App.tsx**: Main application component that renders three main sections
- **Landing.tsx**: Hero section with profile photo, name, and contact links
- **About.tsx**: Personal information and background section
- **Projects.tsx**: Portfolio showcase using project data from utils/

### Data Management
- **ProjectHistory.tsx**: Contains static project data with metadata (name, years, URLs, tech stack)
- **TechIconLibrary.tsx**: Maps technology names to DevIcons CSS classes for consistent iconography

### Styling
- Uses SCSS with component-specific stylesheets (.scss files)
- Leverages DevIcons library for technology icons
- Responsive design for mobile and desktop

### Static Assets
- Profile photos, project screenshots, and resume PDF stored in src/assets/
- Favicon and other public assets in public/
     
## Tech Stack
- React 18 with TypeScript
- SCSS for styling
- Create React App (CRA) tooling
- DevIcons for technology icons
- GitHub Pages for deployment

## Build Process
The project uses standard Create React App build tools with TypeScript support. No additional build configuration is needed.