module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { targets: { node: 'current' } }],
    [
      '@babel/preset-typescript',
      {
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
  ],
}
