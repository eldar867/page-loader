import nock from 'nock';
import { tmpdir } from 'os';
import { join } from 'path';
import downloadPage from '../src/downloadPage.js';

const TEST_DIR = join(tmpdir(), 'pl-test');
const URL = 'https://test.com/page';

nock.disableNetConnect();
afterAll(() => nock.enableNetConnect());

describe('downloadPage', () => {

  test('скачивает страницу при успехе', async () => {
    nock('https://test.com').get('/page').reply(200, '<html>OK</html>');
    
    const path = await downloadPage(URL, TEST_DIR);
    
    expect(path).toContain('test-com-page.html');
  });

  test('выдаёт ошибку при 404', async () => {
    nock('https://test.com').get('/page').reply(404);
    
    await expect(downloadPage(URL, TEST_DIR)).rejects.toThrow();
  });

  test('выдаёт ошибку при неверном URL', async () => {
    await expect(downloadPage('not-a-url', TEST_DIR)).rejects.toThrow();
  });

});