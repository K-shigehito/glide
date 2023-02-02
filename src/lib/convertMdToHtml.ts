import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
// import { handlebars } from 'handlebars';

import { collectMdFilePaths } from './collectMdFilePaths';
import { srcPathToDestPath } from './srcPathToDestPath';

// const readyTemplate = (templatePath: string) => {
//   const absoluteTemplatePath = path.resolve(process.cwd(), templatePath);
//   try {
//     const templateSource = fs.readFileSync(absoluteTemplatePath, 'utf8');
//     return handlebars.compile(templateSource);
//   } catch (err: any) {
//     if (err.code === 'ENOENT') {
//       throw new Error('Can not find template file!');
//     }
//     throw new err();
//   }
// };

export const convertMdToHtml = async (
  srcDirPath: string,
  destDirPath: string,
  templatePath: string
) => {
  const mdFilePaths = await collectMdFilePaths(srcDirPath);
  if (mdFilePaths.length === 0) {
    throw new Error('Can not find markdown directory of files!');
  }
  // const template = readyTemplate(templatePath);

  return mdFilePaths.map((mdFilePath: string) => {
    const markdown = fs.readFileSync(`${srcDirPath}/${mdFilePath}`, 'utf8');
    const convertedHtml = marked(markdown);
    console.log(convertedHtml);
    // const htmlString = template({ body: convertedHtml });
    // const destPath = srcPathToDestPath(mdFilePath, srcDirPath, destDirPath);
    // return { htmlString, destPath };
  });
};
