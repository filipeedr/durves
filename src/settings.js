import {readRoundSize, readAmplitude, readWaves, readFrequency} from './inputReadFunctions.js';

export const userSettings = {
  dimensions: [1080, 1080],
  cols: 72,
  rows: 72,
  size: 0.75,
  position: 0.5,
  roundSize: readRoundSize(),
  amplitude: readAmplitude(),
  waves: readWaves(),
  frequency: readFrequency()
};