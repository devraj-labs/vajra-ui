const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

const vajraUiRoot = path.resolve(__dirname, '../..');
const appNodeModules = path.resolve(__dirname, 'node_modules');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  watchFolders: [vajraUiRoot],
  resolver: {
    nodeModulesPaths: [appNodeModules],
    disableHierarchicalLookup: true,
    extraNodeModules: new Proxy(
      {},
      { get: (_, name) => path.resolve(appNodeModules, name) }
    ),
    resolveRequest: (context, moduleName, platform) => {
      if (moduleName === 'vajra-ui') {
        return { filePath: path.resolve(vajraUiRoot, 'src/index.ts'), type: 'sourceFile' };
      }
      return context.resolveRequest(context, moduleName, platform);
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
