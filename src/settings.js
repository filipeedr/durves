import {readRoundSize, readAmplitude, readWaves, readFrequency} from './inputReadFunctions.js';

export const canvasSettings = {
  dimensions: [4320, 4320],
  encoding: 'image/png',
  encodingQuality: 1,
  pixelsPerInch: 300,
  prefix: 'my-durves'
};

export const userSettings = {
  cols: 180,
  rows: 180,
  size: 0.85,
  position: 0.5,
  roundSize: readRoundSize(),
  amplitude: readAmplitude(),
  waves: readWaves(),
  frequency: readFrequency()
};