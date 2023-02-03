import type { Argv } from 'yargs';
import express from 'express';
import { cleanDir } from '../lib/clearDir';
import { convertMdToHtml } from '../lib/convertMdToHtml';
import { writeFileRecursive } from '../lib/writeFileRecursive';

const app = express();

exports.command = 'serve [options]';

exports.describe = 'Start instant sever and serve converted html';

exports.builder = (yargs: Argv) => {
  yargs
    .options({
      s: {
        alias: 'src',
        demandOption: true,
        requiresArg: true,
        describe: 'Path of the source(markdown) directory',
        type: 'string',
      },
      t: {
        alias: 'template',
        demandOption: true,
        requiresArg: true,
        describe: 'Path of the template file',
        type: 'string',
      },
      d: {
        alias: 'dest',
        demandOption: true,
        requiresArg: true,
        describe: 'Path of directory to write out converted html',
        type: 'string',
      },
      h: {
        alias: 'host',
        default: 'localhost',
        requiresArg: true,
        describe: 'A domain name or IP address of the server',
        type: 'string',
      },
      p: {
        alias: 'port',
        default: 3001,
        requiresArg: true,
        describe: 'Port of server',
        type: 'number',
      },
    })
    .check((argv: any) => {
      if (isNaN(argv.port)) {
        throw new Error('The specified port number is invalid!');
      }
      return true;
    });
};

exports.handler = async (argv: any) => {
  await cleanDir(argv.dest);
  console.log('>>> converting files ...');

  const convertedInfoList = await convertMdToHtml(
    argv.src,
    argv.dest,
    argv.template
  );
  const promiseList = convertedInfoList.map((convertedInfo) => {
    const { destPath, htmlString } = convertedInfo;
    console.log(`  ${destPath}`);
    return writeFileRecursive(destPath, htmlString);
  });

  Promise.all(promiseList).then(() => {
    console.log('<<< done!');

    // Expressサーバーの立ち上げ
    app.use(express.static(argv.dest));
    app.listen(argv.port, argv.host);
    console.log(`http://${argv.host}:${argv.port}`);
  });
};
