import downloadPage from './downloadPage.js';

export { downloadPage };

/**
 * @param {string} url - URL страницы
 * @param {string} outputDir - Директория для сохранения
 * @returns {Promise<{ filepath: string, url: string }>}
 */
export const download = async (url, outputDir) => {
  const filepath = await downloadPage(url, outputDir);
  return { filepath, url };
};

export default { download, downloadPage };