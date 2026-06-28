const songImage = document.getElementById("songimage");
const songName = document.getElementById("songname");
const artistName = document.getElementById("artistname");

const SongSlider = document.getElementById("slidersong");

const PlayButton = document.getElementById("playsong");
const PauseButton = document.getElementById("pausesong");
const PreviousButton = document.getElementById("previoussong");
const NextButton = document.getElementById("nextsong");

const loopButton = document.getElementById("loopbuttonimg");
const ShuffleButton = document.getElementById("shufflingimg");

const VolumeButton = document.getElementById("volumelol");
const VolumeSlider = document.getElementById("volumeslider");

const songs = [
    {
        image:"/IMG/Zora's Domain - Day (The Legend of Zelda; Breath of the Wild OST) (BQ).jpg",
        name:"Zora's Domain - Day (The Legend of Zelda BOTW)",
        artist:"Manaka Kataoka, Yasuaki Iwata, and Hajime Wakai",
        audio:"/Music/Zora's Domain - Day (The Legend of Zelda; Breath of the Wild OST) (128kbit_AAC).m4a"
    },

    {
        image:"/IMG/chrono-trigger-secret-of-the-forest-cover.jpg",
        name:"Chrono Trigger - Secret of the Forest",
        artist:"Yasunori Mitsuda",
        audio:"/Music/11. Secret of the Forest.mp3"
    },

    {
        image:"/IMG/risk of rain.jpg",
        name:"Risk of Rain: Chanson d'Automne",
        artist:"Chirs Christodoulou",
        audio:"/Music/musicStage4.ogg"
    },

];

const audio = document.createElement("audio");
let currentSongIndex = 0;

updateSong();

PreviousButton.addEventListener("click", function(){
   if (currentSongIndex == 0){
    return;
   }
   currentSongIndex--;
   updateSong();
   audio.play();
});

NextButton.addEventListener("click", function(){
   if (currentSongIndex == songs.length - 1){
    return;
   }
   currentSongIndex++;
   updateSong();
   audio.play();
});


PlayButton.addEventListener("click", function(){
    audio.play();
});

PauseButton.addEventListener("click", function(){
    audio.pause();
});


loopButton.addEventListener("click", function(){
    if (audio.loop == false){
    audio.loop = true;
    console.log(currentSongIndex);
    console.log("loopin");
    document.getElementById("loopbuttonimg").innerHTML = '<img id="loopsong" src="img/looping.gif" alt="looping gif button">';

}
    else if (audio.loop == true){
    audio.loop = false;
    console.log("no loopin");
    document.getElementById("loopbuttonimg").innerHTML = '<img id="loopsong" src="img/loop button.png" alt="loop button">';

}
});


let shuffle = 0;
ShuffleButton.addEventListener("click", function(){
    if (shuffle == 0){
shuffle = 1;
console.log("shuffling");
document.getElementById("shufflingimg").innerHTML = '<img id="shufflesong" src="img/shuffle button on.png" alt="shuffle on button">';


} else if (shuffle == 1){
  
  console.log("unshuffling");
  shuffle = 0;
  document.getElementById("shufflingimg").innerHTML = '<img id="shufflesong" src="img/shuffle button off.png" alt="shuffle off button">';
}
});


    
    

function updateSong() {
    const song = songs[currentSongIndex];
    songImage.src = song.image;
    songName.innerText = song.name;
    artistName.innerText = song.artist;

    audio.src = song.audio;

    audio.onloadedmetadata = function (){
    SongSlider.value = 0;
    SongSlider.max = audio.duration;

    

    }
     
    
};




SongSlider.addEventListener("change", function(){
    audio.currentTime = SongSlider.value;
});

function moveSlider(){
    SongSlider.value = audio.currentTime;
};

const SongTime = audio.currentTime;



function CurrentTime(){

    if (SongSlider.value > SongSlider.max-1%SongSlider.max && currentSongIndex != songs.length && audio.loop == false){
    console.log("song ended!"); 
    currentSongIndex++;
    updateSong();
    audio.play();
    }
    
    return;
}

SongSlider.addEventListener("change", function(){


    if (SongSlider.value > SongSlider.max-1%SongSlider.max && currentSongIndex != songs.length && audio.loop == false){
    console.log("song ended!"); 
    currentSongIndex++;
    updateSong();
    audio.play();
    }
    return;
});



VolumeSlider.addEventListener("change", function(){
    audio.volume = VolumeSlider.value;
    console.log(VolumeSlider.value);
});


function changeVolume(){
    VolumeSlider.value = audio.volume;
    if (VolumeSlider.value == 0){
        audio.muted = true;
    console.log("audio muted");
    document.getElementById("volumelol").innerHTML = '<img id="volumebutton" src="img/muted.png" alt="volume">';
    }
    else if (VolumeSlider.value != 0){
     console.log("audio unmuted");
     document.getElementById("volumelol").innerHTML = '<img id="volumebutton" src="img/volume.png" alt="volume">';
     audio.muted = false;

    }
};

VolumeButton.addEventListener("click", function(){
    if (audio.muted == false){
    audio.muted = true;
    console.log("audio muted");
    document.getElementById("volumelol").innerHTML = '<img id="volumebutton" src="img/muted.png" alt="volume">';
    audio.volume = 0;

}    
     else if (audio.muted == true){
     console.log("audio unmuted");
     document.getElementById("volumelol").innerHTML = '<img id="volumebutton" src="img/volume.png" alt="volume">';
     audio.muted = false;
     audio.volume = 0.5;

}
    })




setInterval(moveSlider, 1000);
setInterval(CurrentTime, 1000);





