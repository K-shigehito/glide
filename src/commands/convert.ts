import type { Argv } from 'yargs';
import { cleanDir } from '../lib/clearDir';
import { convertMdToHtml } from '../lib/convertMdToHtml';
// import { writeFileRecursive } from '../lib/writeFileRecursive';

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

export const handler = async (argv: any) => {
  await cleanDir(argv.dest);
  console.log('>>> converting files ...');

  const convertedInfoList = await convertMdToHtml(
    argv.src,
    argv.dest,
    argv.template
  );
  console.log(convertedInfoList);
  // const promiseList = convertedInfoList.map((convertedInfo) => {
  //   const { destPath, htmlString } = convertedInfo;
  //   console.log(`  ${destPath}`);
  //   // ファイルの書き出しは非同期で行うため、Promiseが返される
  //   return writeFileRecursive(destPath, htmlString);
  // });

  // Promise.all(promiseList).then(() => {
  //   console.log("<<< done!");
  // });
};
