# Animated Characters

A Next.js project featuring three animated characters (apple, rabbit, and hen) with smooth scaling animations using Framer Motion.

## Features

- **Smooth Animations**: Each character scales smoothly with different speeds
- **Infinite Looping**: Animations run continuously with reverse transitions
- **Responsive Design**: Built with Tailwind CSS for modern styling
- **TypeScript Support**: Full TypeScript integration
- **Reusable Component**: The `AnimatedCharacters` component can be imported anywhere

## Animation Details

- **Apple**: Scales from 1 to 1.1 over 2 seconds
- **Rabbit**: Scales from 1 to 1.2 over 1.5 seconds  
- **Hen**: Scales from 1 to 1.15 over 2.5 seconds

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── components/
│   └── AnimatedCharacters.tsx    # Main animation component
├── pages/
│   ├── _app.tsx                   # App wrapper with global styles
│   └── index.tsx                 # Home page
├── public/
│   ├── apple.png                  # Apple character image
│   ├── rabbit.png                 # Rabbit character image
│   └── hen.png                    # Hen character image
├── styles/
│   └── globals.css               # Global Tailwind CSS
└── package.json                  # Dependencies and scripts
```

## Usage

### Import the Component

```tsx
import AnimatedCharacters from '../components/AnimatedCharacters';

export default function MyPage() {
  return (
    <div>
      <AnimatedCharacters />
    </div>
  );
}
```

### Customization

You can customize the animations by modifying the `animate` and `transition` props in the component:

```tsx
animate={{
  scale: [1, 1.2, 1], // Custom scale values
}}
transition={{
  duration: 3,        // Custom duration
  repeat: Infinity,
  repeatType: "reverse",
  ease: "easeInOut",
}}
```

## Technologies Used

- **Next.js 15.5.6** - React framework
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety
- **React 18** - UI library

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
