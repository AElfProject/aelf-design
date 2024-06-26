#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff'];
const IGNORED_FOLDERS = ['node_modules', '.next'];

function getFileSizeInBytes(filePath) {
  const stats = fs.statSync(filePath);
  return stats.size;
}

function isCamelCase(fileName) {
  return /[a-z][A-Z]/.test(fileName);
}

function findImages(dir, fileList = [], dirSet = new Set()) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && IGNORED_FOLDERS.includes(file)) {
      return;
    }

    if (stat.isDirectory()) {
      findImages(filePath, fileList, dirSet);
    } else if (IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase())) {
      fileList.push(filePath);
      dirSet.add(path.dirname(filePath));
    }
  });

  return { fileList, dirSet };
}

function inspectImages(dir, limitSize) {
  const { fileList: images, dirSet: directories } = findImages(dir);
  const largeImages = [];
  const camelCaseImages = [];

  images.forEach((imagePath) => {
    const size = getFileSizeInBytes(imagePath);
    const imageSizeInKb = size / 1024;
    const imageName = path.basename(imagePath);

    if (size > limitSize * 1024) {
      largeImages.push({
        name: imageName,
        size: `${imageSizeInKb.toFixed(2)} KB`,
        path: imagePath,
      });
    }

    if (isCamelCase(imageName)) {
      camelCaseImages.push({
        name: imageName,
        size: `${imageSizeInKb.toFixed(2)} KB`,
        path: imagePath,
      });
    }
  });

  if (largeImages.length === 0) {
    console.log(`\n${chalk.bold.green('Image size check passed')}`);
  } else {
    console.log(`\n${chalk.bold.red(`Images larger than ${limitSize}KB:`)}`);
    largeImages.forEach((image) =>
      console.log(`Name: ${image.name}, Size: ${chalk.red(image.size)}, Path: ${image.path}`),
    );
  }

  if (camelCaseImages.length === 0) {
    console.log(`\n${chalk.bold.green('Image naming compliance check passed')}`);
  } else {
    console.log(`\n${chalk.bold.red('Images with camelCase names:')}`);
    // camelCaseImages.forEach((image) => console.log(image));
    camelCaseImages.forEach((image) =>
      console.log(`Name: ${chalk.red(image.name)}, Size: ${image.size}, Path: ${image.path}`),
    );
  }

  console.log(`\n${chalk.bold.cyan('Directories containing images:')}`);
  directories.forEach((directory) => console.log(directory));

  if (directories.size > 1) {
    console.log(
      `\n${chalk.bold.red(
        `There are multiple directories (${directories.size}) containing images.`,
      )}`,
    );
  } else {
    console.log(`\n${chalk.bold.green('Image storage directory check passed')}`);
  }
}

const targetDir = process.argv[2] || '.';
const targetLimitSize = process.argv[3] || 100;

inspectImages(targetDir, targetLimitSize);
