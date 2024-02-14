# Integration Marketplace Design Starter

An example starter repo for creating an integration marketplace

## Using this example

Run the following commands:

- Install dependencies

```
pnpm i
```

- Run Prismatic Setup

```sh
cd apps/web && ./setup.sh
```

- Start the project

```sh
pnpm dev
```

## What's inside?

This repo includes the following packages/apps:

### Apps and Packages

- `web`: A [Next.js](https://nextjs.org/) app showing a full marketplace implementation with [Tailwind CSS](https://tailwindcss.com/)
- `@repo/ui`: a React component library for developing custom marketplace UI with [Tailwind CSS](https://tailwindcss.com/)
- `@repo/headless-components`: a framework agnostic library of headless typescript components for developing an integration marketplace
- `@repo/prismatic-js`: a javascript sdk for interacting with the Prismatic API
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@repo/tailwind-config`: Tailwind config used throughout the monorepo
- `@repo/jest-presets`: Jest testing setup used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Building packages/ui

This example is set up to produce compiled styles for `ui` components into the `dist` directory. The component `.tsx` files are consumed by the Next.js apps directly using `transpilePackages` in `next.config.js`. This was chosen for several reasons:

- Make sharing one `tailwind.config.js` to apps and packages as easy as possible.
- Make package compilation simple by only depending on the Next.js Compiler and `tailwindcss`.
- Ensure Tailwind classes do not overwrite each other. The `ui` package uses a `ui-` prefix for it's classes.
- Maintain clear package export boundaries.

Another option is to consume `packages/ui` directly from source without building. If using this option, you will need to update the `tailwind.config.js` in your apps to be aware of your package locations, so it can find all usages of the `tailwindcss` class names for CSS compilation.

For example, in [tailwind.config.js](packages/tailwind-config/tailwind.config.js):

```js
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    "../../packages/ui/*.{js,ts,jsx,tsx}",
  ],
```

If you choose this strategy, you can remove the `tailwindcss` and `autoprefixer` dependencies from the `ui` package.

### Utilities

This Turborepo has some additional tools already setup for you:

- [Tailwind CSS](https://tailwindcss.com/) for styles
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
