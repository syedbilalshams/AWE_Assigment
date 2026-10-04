# Campus Task Board

A small React app (Vite) for keeping track of campus tasks.

## Features
- Tasks stored in `useState` (id, title, category) and rendered with `.map()`
- Reusable `TaskCard` component that receives each task through props
- Form to add a new task (onSubmit handler) without refreshing the page
- `useEffect` logs "Task list updated!" and the total task count whenever the list changes

## Run locally
```bash
npm install
npm run dev
```
Then open http://localhost:5173
