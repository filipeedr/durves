export const readRoundSize = () => {
  var slider = document.getElementById("roundSizeSlider");
  var output = document.getElementById("valueRoundSize");
 
  output.innerHTML = slider.value;
 
  slider.oninput = function () {
    output.innerHTML = this.value;
  };
 
  return slider.value;
};

export const readAmplitude = () => {
  var slider = document.getElementById("amplitudeSlider");
  var output = document.getElementById("valueAmplitude");
 
  output.innerHTML = slider.value;
 
  slider.oninput = function () {
    output.innerHTML = this.value;
  };
 
  return slider.value;
};

export const readFrequency = () => {
  var slider = document.getElementById("frequencySlider");
  var output = document.getElementById("valueFrequency");
 
  output.innerHTML = slider.value;
 
  slider.oninput = function () {
    output.innerHTML = this.value;
  };
 
  return slider.value;
};

export const readWaves = () => {
  var slider = document.getElementById("wavesSlider");
  var output = document.getElementById("valueWaves");
 
  output.innerHTML = slider.value;

  slider.oninput = function () {
    output.innerHTML = this.value;
  };
 
  return slider.value;
};