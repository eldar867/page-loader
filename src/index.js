import downloadPage from './downloadPage.js';
export { downloadPage };

export const download = async (url, outputDir) => {
  const filepath = await downloadPage(url, outputDir);
  return { filepath, url };
};

export default { download, downloadPage };
