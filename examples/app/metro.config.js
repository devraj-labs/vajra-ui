const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

const root = path.resolve(__dirname, '../..');
const appNodeModules = path.resolve(__dirname, 'node_modules');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  watchFolders: [root],
  resolver: {
    nodeModulesPaths: [appNodeModules],
    disableHierarchicalLookup: true,
    extraNodeModules: new Proxy(
      {},
      {
        get: (_, name) => path.resolve(appNodeModules, name),
      }
    ),
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
