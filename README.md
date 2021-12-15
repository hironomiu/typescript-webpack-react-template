# typescript-webpack-react-template

[![biuld](https://github.com/hironomiu/typescript-webpack-react-template/actions/workflows/build.yml/badge.svg)](https://github.com/hironomiu/typescript-webpack-react-template/actions/workflows/build.yml)
[![schedule-build](https://github.com/hironomiu/typescript-webpack-react-template/actions/workflows/schedule-build.yml/badge.svg)](https://github.com/hironomiu/typescript-webpack-react-template/actions/workflows/schedule-build.yml)

Typescript + Webpack + Babel + ESLint + Jest + React(+Redux Toolkit) + TailwindCSS

## SetUp

```
yarn install
```

## Operations

### Run

```
yarn start
```

### Build

```
yarn run build
```

### Testing

```
yarn test
```

## Sample Code

![demo](./demo.gif)

`./src/*`

```
./src
├── __tests__
│   ├── Counter.spec.tsx
│   ├── counterSlice.spec.ts
│   └── dummy.spec.ts
├── html
│   └── index.html
├── setupTests.ts
└── ts
    ├── app
    │   └── store.ts
    ├── app.css
    ├── app.tsx
    ├── components
    │   └── Home.tsx
    └── feature
        └── counter
            ├── Counter.tsx
            └── counterSlice.tsx
```

## Environment Build Memo

パッケージ管理は`yarn (v1)`を利用

### Initialize

```
yarn init -y
```

### Webpack

```
yarn add --dev webpack webpack-cli webpack-merge clean-webpack-plugin html-webpack-plugin terser-webpack-plugin webpack-dev-server
yarn add --dev npm-run-all
```

### TypeScript

```
yarn add --dev typescript ts-node
```

Initialize

```
npx tsc --init
```

### Babel

```
yarn add --dev babel-loader @babel/core @babel/preset-env @babel/preset-typescript
```

### ESlint

[typescript-eslint/packages/eslint-plugin/docs/rules](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules)

```
yarn add --dev eslint eslint-webpack-plugin @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react
```

### Jest

```
yarn add --dev jest jsdom eslint-plugin-jest @types/jest @types/jsdom ts-jest
yarn add --dev @testing-library/react @testing-library/jest-dom
```

Initialize

```
npx jest --init
```

### React + Redux

```
yarn add react react-dom @types/react @types/react-dom react-redux @types/react-redux
```

```
yarn add --dev @babel/preset-react
```

```
yarn add @reduxjs/toolkit @types/node redux @types/redux
```

### Tailwind

```
yarn add tailwindcss@latest @types/tailwindcss
yarn add --dev postcss-loader postcss autoprefixer css-loader mini-css-extract-plugin
```

Initialize

```
npx tailwindcss init -p
```

Modify `tailwind.config.js`

v3

```
module.exports = {
  content: ['./src/**/*.tsx', './public/index.html'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

v2

```
module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.tsx', './public/index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

Modify `src/app.css`

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Vercel Deploy Memo

[Vercel](https://vercel.com/)

| 設定項目         | 設定値         |
| :--------------- | :------------- |
| FRAMEWORK PRESET | Other          |
| BUILD COMMAND    | yarn run build |
| OUTPUT DIRECTORY | public         |
| INSTALL COMMAND  | yarn install   |
