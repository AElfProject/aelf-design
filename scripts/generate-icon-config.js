#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

const log = console.log;

const srcPath = './packages/icons/src/components/';
const dirs = fs.readdirSync(srcPath);

const config = dirs.reduce((pre, next) => {
  const dirPath = path.join(srcPath, next);
  if (fs.statSync(dirPath).isDirectory()) {
    const files = fs.readdirSync(dirPath);
    pre[next] = files
      .map((file) => path.basename(file, path.extname(file)))
      .filter((file) => file !== 'index');
  }
  return pre;
}, {});

log(`
${chalk.bold.cyan('generate icon config')}
`);
log(config);

fs.writeFileSync(
  './.dumi/theme/builtins/IconSearch/icon-config.json',
  JSON.stringify(config, null, 2) + '\n',
  'utf-8',
);
