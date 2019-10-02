const reactotron = {
  configure: () => reactotron,
  useReactNative: () => reactotron,
  use: () => reactotron,
  connect: () => reactotron,
  setAsyncStorageHandler: () => reactotron,
  clear: () => reactotron,
  createSagaMonitor: () => ({}),
  createEnhancer: () => x => x,
  log: () => {},
  logImportant: () => {},
};

module.exports = reactotron;
