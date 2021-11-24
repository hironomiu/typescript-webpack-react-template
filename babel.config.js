module.exports = {
  presets: [
    [
      '@babel/preset-env',
      { targets: { node: 'current' }, useBuiltIns: 'usage', corejs: 3 },
    ],
    [
      '@babel/preset-react',
      { targets: { node: 'current' }, runtime: 'automatic' },
    ],
    '@babel/preset-typescript',
  ],
}
