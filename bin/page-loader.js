#!/usr/bin/env node

import { program } from 'commander';
import { downloadPage } from '../src/index.js';
import logger from '../src/logger.js';

program
  .name('page-loader')
  .description('Download web pages with resources for offline viewing')
  .version('0.1.0')
  .argument('<url>', 'URL of the page to download')
  .option('-o, --output <dir>', 'Output directory', './_build')
  .action(async (url, options) => {
    try {
      const filepath = await downloadPage(url, options.output);
      const filename = filepath.split('/').pop();
      logger.success(filename);
    } catch (error) {
      logger.error(error);
      process.exit(1);
    }
  });

program.parse();