# Recipe Measurement Converter

A modern web application for converting recipe measurements between metric and imperial units. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Convert between metric and imperial measurements
- Support for volume (liquid) and weight (dry) measurements
- Temperature conversion
- Clean, modern UI with responsive design
- Real-time conversion results
- Preferred unit suggestions for easy measurement

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/recipe-conversion.git
cd recipe-conversion
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Built With

- [Next.js](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [Lucide Icons](https://lucide.dev/) - Beautiful icons

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── recipe/           # Recipe-specific components
└── lib/                  # Business logic
    ├── constants.ts      # Unit definitions
    ├── conversion.ts     # Conversion logic
    ├── types.ts         # TypeScript types
    └── utils.ts         # Utility functions
```

## License

MIT
