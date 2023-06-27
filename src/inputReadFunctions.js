export const readColor = () => {
  var color = document.getElementById("colorpicker");

  return color.value;
};

export const readMatrix = () => {
  var slider = document.getElementById("matrixSlider");
  var output = document.getElementById("valueMatrix");
 
  output.innerHTML = slider.value + " x " + slider.value;
 
  slider.oninput = function () {
    output.innerHTML = this.value;
  };
 
  return slider.value;
};

export const readAspect = () => {
  var slider = document.getElementById("aspectSlider");
  var output = document.getElementById("valueAspect");
 
  output.value = slider.value;
 
  slider.oninput = function () {
    output.value = this.value;
  };
 
  return slider.value;
};

export const readRoundSize = () => {
  var slider = document.getElementById("roundSizeSlider");
  var output = document.getElementById("valueRoundSize");
 
  output.value = slider.value;
 
  slider.oninput = function () {
    output.value = this.value;
  };
 
  return slider.value;
};

export const readAmplitude = () => {
  var slider = document.getElementById("amplitudeSlider");
  var output = document.getElementById("valueAmplitude");
 
  output.value = slider.value;
 
  slider.oninput = function () {
    output.value = this.value;
  };
 
  return slider.value;
};

export const readWaves = () => {
  var slider = document.getElementById("wavesSlider");
  var output = document.getElementById("valueWaves");
 
  output.value = slider.value;

  slider.oninput = function () {
    output.value = this.value;
  };
 
  return slider.value;
};

export const readFrequency = () => {
  var slider = document.getElementById("frequencySlider");
  var output = document.getElementById("valueFrequency");
 
  output.value = slider.value;
 
  slider.oninput = function () {
    output.value = this.value;
  };
 
  return slider.value;
};