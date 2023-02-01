import type { Arguments, Argv } from 'yargs';

export const command = 'convert [options]';
export const desc = 'Convert from markdown to html';

export const builder = (yargs: Argv) => {
  yargs.options({
    s: {
      alias: 'src',
      requiresArg: true,
      describe: 'Path of the source(markdown) directory',
      type: 'string',
    },
    t: {
      alias: 'template',
      requiresArg: true,
      describe: 'Path of the template file',
      type: 'string',
    },
    d: {
      alias: 'dest',
      requiresArg: true,
      describe: 'Path of directory to write out converted html',
      type: 'string',
    },
  });
};

export const handler = () => {
  console.log('test');
};
