import nock from 'nock';
import { downloadPage } from '../src/downloadPage.js';
import { promises as fs } from 'fs';
import path from 'path';
import os from 'os';

describe('downloadPage', () => {
  const testDir = path.join(os.tmpdir(), 'page-loader-test');
  
  beforeEach(async () => {
    await fs.mkdir(testDir, { recursive: true });
  });
  
  afterEach(async () => {
    nock.cleanAll();
    await fs.rm(testDir, { recursive: true, force: true });
  });
  
  test('downloads page and saves to file', async () => {
    const url = 'https://example.com/test';
    const html = '<html><body>Test</body></html>';
    
    // Мокаем HTTP-запрос
    nock('https://example.com')
      .get('/test')
      .reply(200, html);
    
    const filepath = await downloadPage(url, testDir);
    
    // Проверяем, что файл создан
    await expect(fs.access(filepath)).resolves.not.toThrow();
    
    // Проверяем содержимое
    const content = await fs.readFile(filepath, 'utf-8');
    expect(content).toBe(html);
  });
  
  test('throws error on HTTP failure', async () => {
    const url = 'https://example.com/not-found';
    
    nock('https://example.com')
      .get('/not-found')
      .reply(404);
    
    await expect(downloadPage(url, testDir))
      .rejects.toThrow('HTTP 404');
  });
});