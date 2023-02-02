import fs from 'fs';

export const readConfig = () => {
  const configPath = fs.readFileSync('.gliderc');
  return configPath ? JSON.parse(fs.readFileSync(configPath, 'utf8')) : {};
};
