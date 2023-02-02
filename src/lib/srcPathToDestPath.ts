import path from 'path';

export const srcPathToDestPath = (
  mdFilePath: string,
  sourceDirPath: string,
  destDirPath: string
) => {
  const absoluteSourceDirPath = path.resolve(process.cwd(), sourceDirPath);
  const absoluteDestDirPath = path.resolve(process.cwd(), destDirPath);
  const relativeMdFilePath = path.relative(absoluteSourceDirPath, mdFilePath);
  const baseName = path.basename(relativeMdFilePath, '.md');

  return path.join(absoluteDestDirPath, `${baseName}.html`);
};
