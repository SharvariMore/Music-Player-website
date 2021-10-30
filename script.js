const wrapper = document.querySelector(".wrapper"),
musicImg = wrapper.querySelector(".img-area img"),
musicName = wrapper.querySelector(".song-details .name"),
musicArtist = wrapper.querySelector(".song-details .artist"),
mainAudio = wrapper.querySelector("#main-audio"),
playPauseBtn = wrapper.querySelector(".play-pause");

let musicIndex = 2;

window.addEventListener("load",()=>{
    loadMusic(musicIndex);  //calling load music function once window is opened
})

function loadMusic(indexNumb)                                     //load music function
{
    musicName.innerText = allMusic[indexNumb - 1].name;
    musicArtist.innerText = allMusic[indexNumb - 1].artist;
    musicImg.src = `Images/${allMusic[indexNumb - 1].img}.jpg`;
    mainAudio.src = `songs/${allMusic[indexNumb - 1].src}.mp3`;
}

function playMusic()        //play music button function
{
    wrapper.classList.add("paused");
    playPauseBtn.querySelector("i").innerText = "pause";  //when clicked on play button change to pause button
    mainAudio.play();
}

function pauseMusic()      //pause misic button function
{
    wrapper.classList.remove("play");
    playPauseBtn.querySelector("i").innerText = "play_arrow";   //when clicked on pause button change to play button
    mainAudio.pause();
}

playPauseBtn.addEventListener("click",()=>{
    const isMusicPaused = wrapper.classList.contains("paused");
    isMusicPaused ? pauseMusic() : playMusic();  //if music is paused call pause function else call play function
});
