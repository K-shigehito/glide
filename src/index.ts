#!/usr/bin/env node

import { readConfig } from './lib/readConfig';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
  .commandDir('commands')
  .config(readConfig())
  .strict()
  .alias({ h: 'help', v: 'version' }).argv;
