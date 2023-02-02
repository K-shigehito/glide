import path from 'path';
import fs from 'fs/promises';
import { readdir } from 'fs/promises';

export const cleanDir = async (targetDir: string) => {
  const cleanPath = path.resolve(process.cwd(), targetDir);
  try {
    const files = await readdir(cleanPath);
    for (const file of files) {
      fs.unlink(`${cleanPath}/${file}`);
    }
  } catch (err) {
    console.error(err);
  }
};
