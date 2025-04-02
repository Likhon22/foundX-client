# FoundX - Client Application

FoundX is a next-generation platform built with Next.js 14 and HeroUI, designed to help users find and manage resources efficiently.

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [HeroUI v2](https://heroui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/yourusername/foundx-client.git
cd foundx-client
```

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`. Example using `npm`:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@heroui/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

## Features

- Modern UI/UX with HeroUI components
- Responsive design for all device sizes
- Dark/Light theme support
- [Add specific FoundX features here]

## Project Structure

```
foundx-client/
├── app/             # Next.js app directory
├── components/      # Reusable UI components
├── config/          # Configuration files
├── lib/             # Utility functions and hooks
├── public/          # Static assets
└── styles/          # Global styles
```

## License

Licensed under the MIT license.
