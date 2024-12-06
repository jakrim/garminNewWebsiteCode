# Garmin News Clone

A Next.js-based clone of the Garmin News website, featuring a clean and modern design with responsive layout.

## Features

- 📰 News article listings
- 🎯 Quick links sidebar
- 📱 Responsive design
- 🎨 CSS Modules for styling
- 🔗 Two-level navigation

## Getting Started

### Prerequisites

- Node.js 14.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/garmin-news-clone.git
cd garmin-news-clone
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Git Workflow

The main code is maintained in the `master` branch. Here's how to work with the repository:

1. Checkout to master:
```bash
git checkout master
```

2. Pull the latest changes:
```bash
git pull origin master
```

3. Create and switch to a new feature branch:
```bash
git checkout -b feature/your-feature-name
```

4. As you work, commit your changes:
```bash
git add .
git commit -m "Description of your changes"
```

5. Push your changes to the remote repository:
```bash
git push origin feature/your-feature-name (aka your branch name)
```

6. To update your branch with the latest master changes:
```bash
git checkout master
git pull origin master
git checkout feature/your-feature-name
git merge master
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header/         # Site header with navigation
│   └── NewsCard/       # News article card component
├── pages/              # Next.js pages
│   ├── _app.tsx       # App wrapper
│   └── index.tsx      # Homepage
└── styles/            # Global styles and CSS modules
    └── globals.css    # Global CSS
```

## Adding New Features

### Creating a New Component

1. Create a new directory in `src/components`
2. Add your component file (e.g., `ComponentName.tsx`)
3. Create a CSS module (e.g., `ComponentName.module.css`)
4. Export your component as default

Example:
```tsx
import styles from './ComponentName.module.css';

const ComponentName = () => {
  return <div className={styles.container}>...</div>;
};

export default ComponentName;
```

### Adding a New Page

1. Create a new file in `src/pages`
2. Use existing components or create new ones
3. Export the page component as default

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License - feel free to use this code for your own projects.
