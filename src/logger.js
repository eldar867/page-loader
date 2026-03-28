const logger = {
  log: (url, success = true) => {
    const symbol = success ? '✔' : '✘';
    const color = success ? '\x1b[32m' : '\x1b[31m';
    const reset = '\x1b[0m';
    console.log(`${color}${symbol}${reset} ${url}`);
  },
  success: (filename) => {
    console.log(`\nPage was downloaded as '${filename}'`);
  },
  error: (error) => {
    console.error(`\nError: ${error.message}`);
  }
};
export default logger;
