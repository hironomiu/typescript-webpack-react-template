# typescript-webpack-react-template

[![biuld](https://github.com/hironomiu/typescript-webpack-react-template/actions/workflows/build.yml/badge.svg)](https://github.com/hironomiu/typescript-webpack-react-template/actions/workflows/build.yml)

Typescript + Webpack + Babel + ESLint + Jest + React(+Redux Toolkit)

## Operation

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

## SetUp

## Build Memo

環境構築は`yarn`を利用

### Initialize

```
yarn
```

### Webpack

```
yarn add --dev webpack webpack-cli webpack-merge clean-webpack-plugin html-webpack-plugin terser-webpack-plugin webpack-dev-server
```

### TypeScript

```
yarn add --dev typescript ts-loader ts-node
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

```
yarn add --dev eslint eslint-webpack-plugin @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

### Jest

```
yarn add --dev jest jsdom eslint-plugin-jest @types/jest @types/jsdom ts-jest
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
