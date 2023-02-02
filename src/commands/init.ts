import type { Argv } from 'yargs';
import fs from 'fs';
import path from 'path';

exports.command = 'init [options]';

exports.describe = 'Output config file';

exports.builder = (yargs: Argv) => {
  // no options
};

exports.handler = (argv: any) => {
  const settings = JSON.stringify(
    {
      src: '',
      dest: '',
      template: '',
      host: 'localhost',
      port: 3001,
    },
    null,
    2
  );
  const rcFilePath = path.resolve(process.cwd(), './.gliderc');
  fs.writeFile(rcFilePath, settings, (err) => {
    if (err) throw err;
  });
};
