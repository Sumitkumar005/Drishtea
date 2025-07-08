# my-v0-project

This is a Next.js project using React 19 and TailwindCSS. It includes various UI components and libraries such as Radix UI, react-day-picker, and more.

## Prerequisites

- Node.js (recommended version 16 or higher)
- npm (comes with Node.js)

## Installation

To install the dependencies, run the following commands in the project root directory:

```bash
npm cache clean --force
npm install --legacy-peer-deps
```

> Note: The `--legacy-peer-deps` flag is used to resolve a dependency conflict with `date-fns` and `react-day-picker`.

## Running the Development Server

Start the development server with:

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Additional Notes

- If you encounter network issues during installation, please check your internet connection or proxy settings.
- The project uses Next.js version 15.2.4 and React 19.
- The `date-fns` dependency version has been set to `^3.0.0` to satisfy peer dependency requirements.

Happy coding!
