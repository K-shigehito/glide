import { globby } from 'globby';

export const collectMdFilePaths = async (sourceDirPath: string) => {
  const expandDirectories = { expandDirectories: { extensions: ['md'] } };
  return await globby(sourceDirPath, expandDirectories);
};
