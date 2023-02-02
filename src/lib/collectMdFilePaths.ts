import fs from 'fs/promises';

export const collectMdFilePaths = async (sourceDirPath: string) => {
  return fs.readdir(sourceDirPath);
};
