import {readRoundSize, readAmplitude, readWaves, readFrequency} from './inputReadFunctions';
import {userSettings} from './settings.js';

const canvasSketch = require("canvas-sketch");
const random = require("canvas-sketch-util/random");
 
let canva;
 
const sketch = ({ width, height }) => {

  const cols = userSettings.cols;
  const rows = userSettings.rows;
  const numCells = cols * rows;
 
  const gridWidth = width * userSettings.size;
  const gridHeight = width * userSettings.size;
 
  const cellWidth = gridWidth / cols;
  const cellHeight = gridHeight / rows;
 
  const positionX = (width - gridWidth) * 0.5;
  const positionY = (height - gridHeight) * 0.5;

  let x, y, noise;

  let points = [];
 
  const drawPoints = () => {
    for (let i = 0; i < numCells; i++) {
      x = (i % cols) * cellWidth;
      y = Math.floor(i / cols) * cellHeight;
      noise = random.noise2D(x * userSettings.waves, y * userSettings.waves, userSettings.frequency, userSettings.amplitude);
      x += noise;
      y += noise;
      points.push(new Point({ x, y }));
    }
  };

  document.getElementById("frequencySlider").addEventListener("input", (e) => {
      userSettings.frequency = readFrequency();
      points = []
      
      canva.update()
    });

  document.getElementById("roundSizeSlider").addEventListener("input", (e) => {
    userSettings.roundSize = readRoundSize();
    points = []
    
    canva.update()
  });

  document.getElementById("amplitudeSlider").addEventListener("input", (e) => {
    userSettings.amplitude = readAmplitude();
    points = []
    
    canva.update()
  });

  document.getElementById("wavesSlider").addEventListener("input", (e) => {
    userSettings.waves = readWaves();
    points = []
    
    canva.update()
  });
 
  return ({ context, width, height }) => {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
 
    context.save();
    context.translate(positionX, positionY);
    context.translate(cellWidth * 0.5, cellHeight * 0.5);

    drawPoints();

    points.forEach((point) => {
      point.draw(context, userSettings.roundSize);
    });
 
    context.restore();
  };
};
 
class Point {
  constructor({ x, y}) {
    this.x = x;
    this.y = y;
  }
 
  draw(context, roundSize) {
    context.save();
    context.translate(this.x, this.y);
    context.fillStyle = "white";
 
    context.beginPath();
    context.arc(0, 0, roundSize, 0, Math.PI * 2);
    context.fill();
    context.closePath();
    context.restore();
  }
}
 
canvasSketch(sketch, userSettings).then((instance) => {
  canva = instance
});