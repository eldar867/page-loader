import generateFilename from '../src/filename.js';

describe('generateFilename', () => {
  
  test('преобразует URL в имя файла', () => {
    const result = generateFilename('https://ru.hexlet.io/courses');
    expect(result).toBe('ru-hexlet-io-courses.html');
  });

  test('работает с разными доменами', () => {
    expect(generateFilename('https://example.com/page'))
      .toBe('example-com-page.html');
  });

  test('убирает лишние символы', () => {
    expect(generateFilename('https://site.com/path?id=1'))
      .toBe('site-com-path-id-1.html');
  });

});