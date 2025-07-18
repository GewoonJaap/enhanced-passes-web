# Enhanced Passes Web Application - Copilot Instructions

This document provides a detailed overview of the Enhanced Passes web application, including its purpose, how it works, coding guidelines, and essential NPM commands for development.

## 1. What the Application Is and How It Works

The Enhanced Passes web application is a frontend interface built with Svelte, designed to allow users to create digital passes (e.g., boarding passes) by inputting barcode/QR code data. It interacts with a backend API to generate these passes, which can then be added to digital wallets like Google Wallet.

**Core Functionality:**

- **Pass Creation Form:** Users input barcode/QR code data and select a pass type.
- **API Integration:** The application communicates with `https://enchanced-passes-api.mrproper.dev` to process pass creation requests.
- **Digital Wallet Integration:** Generated passes can be directly added to Google Wallet.
- **Informational Sections:** The homepage includes sections explaining how the application works, promoting a mobile app, and highlighting benefits.

## 2. Coding Guidelines

### General Principles

- **Svelte First:** This project is built with Svelte. While design inspiration may come from other frameworks (like React), all new features and modifications must adhere to Svelte's component-based architecture and reactivity model.
- **Standard CSS:** Styling is primarily done using standard CSS within Svelte component `<style>` tags. Avoid using external CSS frameworks unless explicitly added to the project.
- **TypeScript:** The project uses TypeScript for type safety. Ensure all new code is strongly typed and adheres to TypeScript best practices.
- **Readability:** Write clean, readable, and well-commented code.
- **Modularity:** Break down complex features into smaller, reusable components.

### Svelte Specifics

- Use Svelte's reactivity (`let`, `$:`) effectively.
- Organize components logically within `src/lib/components/`.
- Use `onMount` for side effects that need to run after the component is first rendered.
- For internationalization, use `svelte-i18n` with the `$_` function.

### TypeScript Specifics

- Define clear interfaces and types for API requests/responses and component props.
- Ensure strict type checking is maintained.
- `tsconfig.json` is configured with `verbatimModuleSyntax: true`.

### CSS Specifics

- Prefer scoped CSS within `<style>` tags for components.
- Use descriptive class names.
- Ensure responsive design for various screen sizes.

## 3. NPM Commands

Here are the essential NPM commands for working with this project:

- `npm install`: Installs all project dependencies. Run this after cloning the repository or when `package.json` changes.
- `npm run dev`: Starts the development server. This will compile the Svelte application and serve it locally, typically at `http://localhost:5173/`. It includes hot-reloading for development.
- `npm run build`: Builds the application for production. This command compiles and optimizes the Svelte application into static assets ready for deployment.
- `npm run preview`: Previews the production build locally. Useful for testing the optimized build before deployment.
- `npm run check`: Runs TypeScript and Svelte checks to ensure type safety and component correctness.
- `npm run lint`: Runs ESLint to check for code style and potential errors.
- `npm run format`: Formats the code using Prettier.

## 4. Project Structure

```
.
├── .github/                  # GitHub-specific configurations (workflows, issue templates, etc.)
│   └── copilot-instructions.md # This file
├── src/                      # Source code
│   ├── lib/                  # Library code (reusable modules, components, API clients)
│   │   ├── api/              # API client functions (e.g., enhancedPassesBackend.ts)
│   │   ├── components/       # Reusable Svelte components (e.g., passForm/, homepage/)
│   │   ├── const/            # Constants (e.g., routes.ts)
│   │   ├── images/           # Static images
│   │   └── locale/           # Internationalization files
│   ├── routes/               # SvelteKit routes (e.g., +page.svelte for the main page)
│   └── app.html              # Main HTML template
├── static/                   # Static assets served directly
├── tsconfig.json             # TypeScript configuration
├── svelte.config.js          # SvelteKit configuration
├── package.json              # Project dependencies and scripts
└── README.md                 # Project README
```

## 5. How to Run the Application

1.  **Clone the repository:**
    ```bash
    git clone [repository-url]
    cd enhanced-passes-web
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application should now be accessible in your browser at `http://localhost:5173/`.

## 6. Recent Changes and Key Learnings (from recent interactions)

This section summarizes recent significant changes and insights gained during development:

- **Styling Methodology:** Initial attempts with Tailwind CSS were reverted due to environmental constraints. All styling is now implemented using standard CSS within Svelte components' `<style>` tags.
- **PassForm Functionality Fix:** The "create pass" button in `src/lib/components/passForm/passForm.svelte` was debugged and fixed. The `generatePass` function now correctly uses Svelte-bound variables (`barcodeDataInput` and `selectedTicketType.value`) instead of `FormData` from the button's event, ensuring proper API calls.
- **Text Styling Refinement:** The "Klik op de onderstaande knop..." text in `src/lib/components/passForm/passForm.svelte` was restyled to be less bold and black, using `font-weight: 400` and `color: #4b5563` for better visual integration.
- **Mobile Button Layout Fix:** The "Download Enhanced Passes app in the Google Play Store" button in `src/lib/components/homepage/walletInfo.svelte` was fixed for mobile display issues. `display: block;`, `text-align: center;`, and `line-height: 1.5;` were added to the `.download-button` CSS class to prevent text overlapping.
- **Navigation Button Removal:** The "Mijn Passes" button was removed from the navigation bar in `src/routes/+page.svelte` as it was non-functional.
- **UI Enhancements (Animated Gradients):** Animated gradients were added to:
  - The main page background (`.page-container` in `src/routes/+page.svelte`).
  - The PassForm header (`.pass-form-header` in `src/lib/components/passForm/passForm.svelte`).
    These enhancements use `@keyframes` animations to create a dynamic visual effect.
- **TypeScript Configuration (`tsconfig.json`):** The `tsconfig.json` file was updated to remove deprecated options (`importsNotUsedAsValues`, `preserveValueImports`) and include `verbatimModuleSyntax: true` to ensure compatibility with newer TypeScript versions. If TypeScript errors persist, it might be due to a cached TS server; restarting VS Code or the TS server is recommended.
