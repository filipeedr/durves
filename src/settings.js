import {readMatrix, readRoundSize, readAmplitude, readWaves, readFrequency, readAspect} from './inputReadFunctions.js';

export const canvasSettings = {
  dimensions: [2160, 2160],
  encoding: 'image/png',
  encodingQuality: 1,
  pixelsPerInch: 300,
  prefix: 'my-durves'
};

export const userSettings = {
  cols: readMatrix(),
  rows: readMatrix(),
  size: readAspect(),
  position: 0.5,
  roundSize: readRoundSize(),
  amplitude: readAmplitude(),
  waves: readWaves(),
  frequency: readFrequency(),
};

