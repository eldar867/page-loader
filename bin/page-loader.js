#!/usr/bin/env node
import { program } from 'commander';
import { downloadPage } from '../src/index.js';
import { promises as fs } from 'fs';

program
  .description('Download web page with all resources')
  .requiredOption('-o, --output <dir>', 'Output directory')
  .argument('<url>', 'Page URL to download')
  .action(async (url, options) => {
    try {
      // Проверяем существование директории
      await fs.access(options.output);
      
      const filepath = await downloadPage(url, options.output);
      console.log(`✔ Page was downloaded as '${filepath}'`);
    } catch (error) {
      console.error(`✗ Error: ${error.message}`);
      process.exit(1);
    }
  });

program.parse();