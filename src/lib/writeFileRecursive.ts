import fs from 'fs';
import path from 'path';

export const writeFileRecursive = (filePath: string, fileData: any) => {
  return new Promise<void>((resolve, reject) => {
    fs.writeFile(filePath, fileData, (err: any) => {
      if (err && err.code !== 'ENOENT') reject(err);
      if (err && err.code === 'ENOENT') {
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFile(filePath, fileData, (err: any) => {
          if (err) reject(err);
        });
      }
      resolve();
    });
  });
};
