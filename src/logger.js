const logger = {
  /**
   * @param {string} url - URL ресурса
   * @param {boolean} success - Статус операции
   */
  log: (url, success = true) => {
    const symbol = success ? '✔' : '✘';
    const color = success ? '\x1b[32m' : '\x1b[31m'; // зелёный / красный
    const reset = '\x1b[0m';
    console.log(`${color}${symbol}${reset} ${url}`);
  },
  
  /**
   * @param {string} filename - Имя сохранённого файла
   */
  success: (filename) => {
    console.log(`\nPage was downloaded as '${filename}'`);
  },
  
  /**
   * @param {Error} error - Объект ошибки
   */
  error: (error) => {
    console.error(`\nError: ${error.message}`);
  }
};

export default logger;