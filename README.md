# React TODO Application

A simple responsive TODO application built with React and Vite.

## Features
- Add tasks
- Mark tasks complete or incomplete
- Delete tasks
- View total, completed, and pending task counts
- Save tasks in browser Local Storage

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy to GitHub Pages
1. Create a GitHub repository named `todo-app`.
2. Confirm `base: "/todo-app/"` in `vite.config.js` matches the repository name.
3. Install dependencies: `npm install`
4. Deploy: `npm run deploy`
5. In GitHub repository Settings > Pages, select **Deploy from a branch**, choose `gh-pages` and `/(root)`.

Your site URL will be:
`https://YOUR_USERNAME.github.io/todo-app/`

If your repository has a different name, update the `base` value in `vite.config.js` before deploying.
