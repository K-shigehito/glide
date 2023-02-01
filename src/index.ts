#!/usr/bin/env node

import path from 'path';
import fs from 'fs';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

const args = yargs(hideBin(process.argv))
  .option('text', {
    type: 'string',
    alias: 't',
    requiresArg: true,
    describe: 'Markdownファイルのパス',
  })
  .option('name', {
    type: 'boolean',
    alias: 'n',
    describe: 'CLI名を表示',
  })
  .parseSync();

const packageStr = fs.readFileSync(path.resolve(__dirname, '../package.json'), {
  encoding: 'utf-8',
});
const packageData = JSON.parse(packageStr);

if (args.text) {
  console.log(args.text);
} else if (args.name) {
  console.log(packageData.name);
} else {
  console.log('nameオプションがありません');
}
