import axios from 'axios';
import { promises as fs } from 'fs';
import path from 'path';
import { makeFilename } from './filename.js';

export const downloadPage = async (url, outputDir) => {
  try {
    // Скачиваем страницу
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    
    // Формируем имя файла
    const filename = makeFilename(url);
    const filepath = path.join(outputDir, filename);
    
    // Сохраняем на диск
    await fs.writeFile(filepath, response.data);
    
    return filepath;
  } catch (error) {
    if (error.response) {
      throw new Error(`HTTP ${error.response.status}: ${error.message}`);
    } else if (error.request) {
      throw new Error(`Network error: ${error.message}`);
    }
    throw error;
  }
};