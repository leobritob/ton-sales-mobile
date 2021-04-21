module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            assets: './assets',
            components: './src/components',
            configs: './src/configs',
            hooks: './src/hooks',
            navigations: './src/navigations',
            providers: './src/providers',
            screens: './src/screens',
            services: './src/services',
            theme: './src/themes',
          },
        },
      ],
    ],
  }
}
