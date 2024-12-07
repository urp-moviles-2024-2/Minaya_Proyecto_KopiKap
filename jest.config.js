module.exports = {
  setupFiles: ['./jest/setup.js'],
  transformIgnorePatterns: [
    '/node_modules/(?!@expo/vector-icons)/',
  ],
  preset: 'react-native',
};


