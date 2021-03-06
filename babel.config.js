module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@Screens': './src/Screens',
          '@src': './src/',
          '@assets': './assets/',
        },
      },
    ],
    'jest-hoist',
  ],
};
