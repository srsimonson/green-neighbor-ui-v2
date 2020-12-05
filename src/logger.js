const { IS_DEV } = require('./constants');

// kinda hack logger
const logger = (() => {
  if (IS_DEV) {
    return console;
  }
  const doNothing = () => {};
  return Object.keys(console).reduce((acc, cur) => ({ ...acc, [cur]: doNothing }), {});
})();

export default logger;
