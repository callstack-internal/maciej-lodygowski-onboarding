module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module:react-native-dotenv'],

    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.ios.js',
          '.ios.ts',
          '.ios.tsx',
          '.android.js',
          '.android.ts',
          '.android.tsx',
          '.js',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          'app-info-package': './app-info-package',
          'conic-gradient-package': './conic-gradient-package',
          'save-file-picker-package': './save-file-picker-package',
          'range-slider-package': './range-slider-package',
        },
      },
    ],
  ],
};
