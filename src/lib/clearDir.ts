import path from "path";
import fs from "fs/promises";

export const cleanDir = async (targetDir: string) => {
  const cleanPath = path.resolve(process.cwd(), targetDir, "*");
  return await fs.rm(cleanPath, { recursive: true });
};
