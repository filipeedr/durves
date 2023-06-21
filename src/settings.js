import {readMatrixSize, readRoundSize, readAmplitude, readWaves, readFrequency} from './inputReadFunctions.js';

export const canvasSettings = {
  dimensions: [2160, 2160],
  encoding: 'image/png',
  encodingQuality: 1,
  pixelsPerInch: 300,
  prefix: 'my-durves'
};

export const userSettings = {
  cols: readMatrixSize(),
  rows: readMatrixSize(),
  size: 0.85,
  position: 0.5,
  roundSize: readRoundSize(),
  amplitude: readAmplitude(),
  waves: readWaves(),
  frequency: readFrequency(),
};

