# React + Vite + Tailwind CSS v4 Template

A modern starter template for building web applications with React, Vite, and Tailwind CSS v4.

## Features

- ⚡ **Vite** - Lightning-fast development with instant server start and hot module replacement
- ⚛️ **React** - Build interactive UIs efficiently with component-based architecture
- 🎨 **Tailwind CSS v4** - Utility-first CSS framework with improved color system and simplified setup
- 📱 **Responsive Design** - Mobile-first approach that works on all devices

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone this repository
```bash
git clone https://github.com/yourusername/template.git
cd template
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
template/
├── public/            # Static assets
├── src/
│   ├── components/    # Reusable UI components
│   ├── assets/        # Images, fonts, etc.
│   ├── App.jsx        # Main application component
│   ├── index.css      # Global styles and Tailwind import
│   └── main.jsx       # Application entry point
├── index.html         # HTML template
├── vite.config.js     # Vite configuration
└── package.json       # Project dependencies and scripts
```

## Tailwind CSS v4 Integration

This template uses Tailwind CSS v4, which features:

- Simplified setup with a single `@import "tailwindcss"` statement
- No need for a separate tailwind.config.js file for basic usage
- Vibrant OKLCH color system
- Automatic content detection
- First-party Vite plugin (`@tailwindcss/vite`)

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally

## License

MIT
