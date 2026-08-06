# React Deploy

## How to deploy a React website to GitHub

Follow these steps to build and delpy your React application to GitHub Pages:

1. **Install the deployment package**: Open your terminal and run `npm install gh-pages --save dev` to  add deployment tool to your project.

2. **Configure package.json** : Basically Open your `package.json` file and add a `homepage` property at the top level. Set its value to your GitHub Pages URL (e.g `https://github.io`).

3. **Add  a deployment scripts** : Inside the `script` object of your `package.json`, add two new script or run  the command in your terminal:
- `"predeploy": "npm run build"(for rebuiling the website)`
- `"deploy": gh-pages -d build` (or `-d dist` if you are using Vite).

4. **Build and deploy**: Run the command `npm run build` in your terminal. This will trigger the build process and push the compiled files to a github pages `gh-pages` branch on GitHub.

5. **Configure GitHub repository**: Go  to your GitHub repository on the web, click on **Settings**, navigate to the **Pages** section, and ensure the source is set to **GitHub Actions** from the `gh-pages` branch.

6. **Finally Handle custom routing**:  if you usse React Router, ensure you have a `404.html` file in your public folder and a redirect component (like `RedirectGitHub404.jsx` file)  rendered or configured in your `App.jsx` to prevent broken links when users refresh deep pages.


==========================================================================================


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
