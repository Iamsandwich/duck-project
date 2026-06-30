const ESlider = document.getElementById("slidereffects");
var Eaudio = document.getElementById("waves");
var Eaudio2 = document.getElementById("rain");

console.log(ESlider);
console.log(Eaudio2);
console.log(Eaudio);



ESlider.addEventListener("change", function(){
    Eaudio.volume = ESlider.value;
    Eaudio2.volume = ESlider.value;
    console.log(ESlider.value);
});