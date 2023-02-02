#!/usr/bin/env node

import { readConfig } from './lib/readConfig';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

const appConfig = readConfig();

yargs(hideBin(process.argv))
  .commandDir('commands')
  .config(appConfig)
  .strict()
  .alias({ h: 'help', v: 'version' }).argv;
