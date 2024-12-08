// jest/setup.js
jest.mock('@expo/vector-icons', () => ({
  Ionicons: 'Ionicons', // Simula el componente Ionicons
}));

jest.mock('react-native/Libraries/Settings/NativeSettingsManager', () => ({
  SettingsManager: jest.fn(() => ({
    get: jest.fn(() => 'mocked-value')
  })),
}));

