import {readMatrix, readRoundSize, readAmplitude, readWaves, readFrequency, readAspect, readColor} from './inputReadFunctions.js';

export const canvasSettings = {
  dimensions: [2160, 2160],
  encoding: 'image/png',
  encodingQuality: 1,
  pixelsPerInch: 300,
  name: 'my-durves-image'
};

export const userSettings = {
  cols: readMatrix(),
  rows: readMatrix(),
  size: readAspect(),
  position: 0.5,
  color: readColor(),
  transparency: true,
  roundSize: readRoundSize(),
  amplitude: readAmplitude(),
  waves: readWaves(),
  frequency: readFrequency(),
};

