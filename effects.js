const ESlider = document.getElementById("slidereffects");
var Eaudio = document.getElementById("waves");
var Eaudio2 = document.getElementById("rain");
var Eaudio3 = document.getElementById("train");
var Eaudio4 = document.getElementById("fireplace");

console.log(ESlider);
console.log(Eaudio2);
console.log(Eaudio3);
console.log(Eaudio4);
console.log(Eaudio);



ESlider.addEventListener("change", function(){
    Eaudio.volume = ESlider.value;
    Eaudio2.volume = ESlider.value;
    Eaudio3.volume = ESlider.value;
    Eaudio4.volume = ESlider.value;
    console.log(ESlider.value);
});