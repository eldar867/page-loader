import cheerio from 'cheerio';

export const parsePage = (html, baseUrl) => {
  const $ = cheerio.load(html);
};