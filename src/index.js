import {readMatrix, readRoundSize, readAmplitude, readWaves, readFrequency, readAspect, readColor} from './inputReadFunctions.js';
import {canvasSettings, userSettings} from './settings.js';

const canvasSketch = require("canvas-sketch");
const random = require("canvas-sketch-util/random");
const svg = require("./canvas-to-sketch.js");

let canva;
let color = userSettings.color;

const sketch = async ({width, height, exportFrame }) => {
  
    let cols = userSettings.cols;
    let rows = userSettings.rows;
    let numCells = cols * rows;
   
    let gridWidth = width * userSettings.size;
    let gridHeight = width * userSettings.size;
   
    let cellWidth = gridWidth / cols;
    let cellHeight = gridHeight / rows;
   
    let positionX = (width - gridWidth) * 0.5;
    let positionY = (height - gridHeight) * 0.5;
  
    let points = [];

    let transparency = userSettings.transparency;
    
    const drawPoints = () => {
      const waves = userSettings.waves;
      const frequency = userSettings.frequency;
      const amplitude = userSettings.amplitude;
    
      let x = 0;
      let y = 0;
    
      for (let i = 0; i < numCells; i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);
    
        x = col * cellWidth;
        y = row * cellHeight;
    
        const noise = random.noise2D(x * waves, y * waves, frequency, amplitude);
        x += noise;
        y += noise;
    
        points.push(new Point({ x, y }));
      }
    };
    

    document.getElementById("colorpicker").addEventListener("input", (e) => {
      color = String(readColor());
  
      points = []
      
      canva.update()
    });
  
    document.getElementById("matrixSlider").addEventListener("input", (e) => {
      cols = Number(readMatrix());
      rows = Number(readMatrix());
  
      numCells = cols * rows;
  
      cellWidth = gridWidth / cols;
      cellHeight = gridHeight / rows;
  
      points = []
      
      canva.update()
    });

    document.getElementById("aspectSlider").addEventListener("input", (e) => {
      userSettings.size = readAspect();

      gridWidth = width * userSettings.size;
      gridHeight = width * userSettings.size;

      cellWidth = gridWidth / cols;
      cellHeight = gridHeight / rows;

      positionX = (width - gridWidth) * 0.5;
      positionY = (height - gridHeight) * 0.5;

      points = []
      
      canva.update()
    });
  
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

    // document.getElementById("backgroundTransparency").addEventListener('click', () => { 
  
    //   if(document.getElementById("backgroundTransparency").checked == true){
    //     transparency = true;
    //   }
    //   else{
    //     transparency = false;
    //   }

    // });
  
    document.getElementById("restartSettings").addEventListener('click', () => { 
      
      location.reload();
  
    });
  
    document.getElementById("downloadDurves").addEventListener('click', () => { 
      
      exportFrame();
  
      // document.getElementById('downloadMessage').classList.toggle('hidden');
  
      // setTimeout(() => {
      //   document.getElementById('downloadMessage').classList.toggle('hidden');
      // }, 4000);
  
    });

  return svg(({ context, width, height }) => {

    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);

    if(transparency){
      context.clearRect(0, 0, width, height);
    }

    context.save();
      context.translate(positionX, positionY);
      context.translate(cellWidth * 0.5, cellHeight * 0.5);
      drawPoints();

      points.forEach((point) => {
        point.draw(context, userSettings.roundSize);
      });
    context.restore();

  });
};

class Point {
  constructor({ x, y }) {
    this.x = x;
    this.y = y;
  }

  draw(context, roundSize) {
    const { x, y } = this;
    const halfRoundSize = roundSize * 0.5;
    const doublePI = Math.PI * 2;

    context.save();
      context.fillStyle = String(color);
      context.beginPath();
      context.arc(x, y, halfRoundSize, 0, doublePI);
      context.fill();
      context.closePath();
    context.restore();
  }
}

canvasSketch(sketch, canvasSettings).then((instance) => {
  canva = instance;
});