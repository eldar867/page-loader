import axios from 'axios';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import generateFilename from './filename.js';
import logger from './logger.js';

/**
 * @param {string} url - URL страницы для скачивания
 * @param {string} outputDir - Директория для сохранения
 * @returns {Promise<string>} - Полный путь к сохранённому файлу
 */
const downloadPage = async (url, outputDir) => {
  try {
    logger.log(url, false);
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'PageLoader/0.1 (hexlet project)'
      },
      timeout: 10000
    });

    const filename = generateFilename(url);
    const filepath = join(outputDir, filename);
    await mkdir(outputDir, { recursive: true });
    await writeFile(filepath, response.data, 'utf-8');
    logger.log(url, true);
    return filepath;
  } catch (error) {
    logger.log(url, false);
    
    if (error.code === 'ECONNREFUSED') {
      throw new Error(`Connection refused to ${url}`);
    }
    if (error.code === 'ENOTFOUND') {
      throw new Error(`Domain not found: ${url}`);
    }
    if (error.response) {
      throw new Error(`HTTP ${error.response.status}: ${error.message}`);
    }
    
    throw error;
  }
};

export default downloadPage;