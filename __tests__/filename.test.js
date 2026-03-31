import { makeFilename } from '../src/filename.js';

test('generates correct filename from URL', () => {
  expect(makeFilename('https://ru.hexlet.io/courses'))
    .toBe('ru-hexlet-io-courses.html');
  
  expect(makeFilename('https://example.com/path/to/page'))
    .toBe('example-com-path-to-page.html');
});