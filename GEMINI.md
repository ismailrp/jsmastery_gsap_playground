# Ultimate GSAP Workshop

This project is a comprehensive workshop for learning GSAP (GreenSock Animation Platform). It consists of numerous individual demo pages, each focusing on a specific GSAP feature, easing function, or animation technique.

## Tech Stack

- **Build Tool:** Vite
- **Styling:** Tailwind CSS (via `@tailwindcss/vite`)
- **Animation:** GSAP (GreenSock Animation Platform)
- **Language:** HTML, JavaScript, CSS

## Project Structure

- `index.html`: The main landing page listing all available demos.
- `style.css`: Global styles for the workshop.
- `pages/`: Contains subdirectories for each demo page.
    - Each demo typically has its own `index.html`, `script.js`, and `style.css`.
- `public/`: Assets like images and SVGs used across the demos.

## Development Workflow

### Adding a New Demo

1.  **Create a Directory:** Create a new directory under `pages/` following the naming convention (e.g., `XX_my-new-demo`).
2.  **Add Files:** Create `index.html`, `script.js`, and `style.css` within the new directory.
3.  **Update Landing Page:** Add a new list item to the `<ul>` in `index.html` pointing to the new demo's `index.html`. Ensure you include an appropriate cover image (use existing ones in `public/` or add a new one).

### GSAP Usage

- Prefer using `gsap.to()`, `gsap.from()`, `gsap.fromTo()`, and `gsap.timeline()` for animations.
- For scroll-driven animations, utilize the `ScrollTrigger` plugin.
- For text animations, the workshop includes demos for `SplitText` and `ScrambleText` plugins.

## Commands

- `npm run dev`: Start the Vite development server.
- `npm run build`: Build the project for production.
- `npm run preview`: Preview the production build.
