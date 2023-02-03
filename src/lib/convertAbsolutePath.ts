import path from 'path';

export const convertAbsolutePath = (targetPath: string) => {
  return path.resolve(process.cwd(), targetPath);
};
