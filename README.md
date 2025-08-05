# Cafe Buddy POS - Frontend

A modern React-based Point of Sale system for restaurants and cafes.

## Features

- **Order Management**: Create, update, and track orders in real-time
- **Menu Management**: Add, edit, and manage menu items and categories
- **Table Management**: Handle table assignments and status tracking
- **Dashboard**: Real-time analytics and reporting
- **Modern UI**: Built with Tailwind CSS and shadcn/ui components

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Wouter** - Lightweight routing
- **React Query** - Data fetching and caching
- **Zustand** - State management

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd cafe-buddy-pos-frontend
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/     # React components
├── contexts/       # React contexts
├── hooks/          # Custom hooks
├── lib/           # Utilities and configurations
├── pages/         # Page components
├── types/         # TypeScript type definitions
└── main.tsx       # Application entry point
```

## Deployment

This app is configured for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request
