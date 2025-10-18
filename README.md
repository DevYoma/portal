# PortalHQ Blog - Technical Assessment

A modern, responsive Single Page Application (SPA) built for the PortalHQ Founding Software Engineer (UI Team) position. This project demonstrates expertise in React, TypeScript, and Tailwind CSS, with a focus on clean code architecture and mobile-first responsive design.

## Project Overview

This SPA was initially built using React, TypeScript, and SCSS for rapid development. The entire codebase was then refactored to use Tailwind CSS for a more maintainable, utility-first approach. The application features a fully responsive blog interface with multiple components, including navigation, hero sections, featured content, and newsletter subscription functionality.

**Live Link:** [Live Link](https://portal-eight-mocha.vercel.app/)

## Tech Stack

- **Frontend Framework:** React 18+
- **Language:** TypeScript
- **Styling:** Tailwind CSS (migrated from SCSS)
- **Build Tool:** Vite

## Setup Instructions

### Prerequisites

Ensure you have the following installed on your machine:
- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/DevYoma/portal.git
cd portal
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

### Build for Production

To create a production-ready build:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
portal/
├── src/
│   ├── assets/              # Images and static files
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button/      # Reusable Button component
│   │   │   └── molecule/    # SectionHeader component
│   │   ├── Footer/          # Footer component
│   │   ├── Header/          # Header with social links
│   │   ├── Hero/            # Hero section with featured content
│   │   ├── Join/            # Newsletter subscription section
│   │   └── Navbar/          # Navigation component
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles and Tailwind imports
├── public/                  # Public assets
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
├── package.json             # Project dependencies
└── README.md                # Project documentation
```

## Contribution and Workflow

### Development Workflow

1. Create feature branches from `main`
2. Make changes and test locally
3. Commit with descriptive messages
4. Push to GitHub and create Pull Requests
5. Review and merge into `main`

**Note:** This site was initially built with SCSS for speed, then converted to Tailwind CSS for better maintainability and utility-first styling approach.

## How to Contribute

1. Fork the repository
2. Create a new feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit:
   ```bash
   git commit -m "feat: add your feature description"
   ```
4. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request with a detailed description

### Commit Message Conventions

Follow proper Git commit message conventions for clear and meaningful history. Learn more about writing better commit messages here: [How to Write Better Git Commit Messages](https://freecodecamp.org/news/how-to-write-better-git-commit-messages/)

**Common prefixes:**
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code restructuring
- `test:` for adding tests
- `chore:` for maintenance tasks

## Author

**Emore Ogheneyoma Lawrence**

- LinkedIn: [https://linkedin.com/in/oghene-yoma](https://linkedin.com/in/oghene-yoma)
