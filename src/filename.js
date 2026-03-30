/**
 * @param {string} url - Исходный URL
 * @returns {string} - Имя файла с расширением .html
 */

const generateFilename = (url) => {
  try {
    const urlObj = new URL(url);
    const { hostname, pathname } = urlObj;
    const rawName = `${hostname}${pathname}`.replace(/\/+$/, '');
    const cleaned = rawName.replace(/[^a-z0-9]+/gi, '-');
    const normalized = cleaned.replace(/^-+|-+$/g, '').toLowerCase();
    return `${normalized}.html`;
  } catch (error) {
    throw new Error(`Failed to generate filename from URL "${url}": ${error.message}`);
  }
};

export default generateFilename;