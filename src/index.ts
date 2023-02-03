#!/usr/bin/env node

import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import { readConfig } from './lib/readConfig';
import { convertAbsolutePath } from './lib/convertAbsolutePath';

const appConfig = readConfig();

yargs(hideBin(process.argv))
  .commandDir('commands')
  .config(appConfig)
  .strict()
  .alias({ v: 'version' }).argv;
