const WavesSlider = document.getElementById("sliderwaves");
var waveaudio = document.getElementById("waves");

const RainSlider = document.getElementById("sliderrain");
var rainaudio = document.getElementById("rain");

const trainSlider = document.getElementById("slidertrain");
var trainaudio = document.getElementById("train");

const FireSlider = document.getElementById("sliderfire");
var fireplaceaudio = document.getElementById("fireplace");

console.log(WavesSlider);
console.log(RainSlider);
console.log(trainSlider);
console.log(FireSlider);




WavesSlider.addEventListener("change", function(){
    waveaudio.volume = WavesSlider.value;
    console.log(WavesSlider.value);
});

RainSlider.addEventListener("change", function(){
    rainaudio.volume = RainSlider.value;
    console.log(RainSlider.value);
});

trainSlider.addEventListener("change", function(){
    trainaudio.volume = trainSlider.value;
    console.log(trainSlider.value);
});

FireSlider.addEventListener("change", function(){
    fireplaceaudio.volume = FireSlider.value;
    console.log(FireSlider.value);
});