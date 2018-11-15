module.exports = api => {
  api.cache(true)

  return {
    plugins: ['@babel/plugin-proposal-class-properties'],
    presets: ['@babel/preset-env', '@babel/preset-typescript'],
    include: ['./../src'],
    exclude: ['node_modules'],
    ignore: ['./../src/**/*.spec.ts', './../src/**/*.spec.js'],
    sourceMaps: true
  }
}
