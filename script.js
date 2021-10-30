const wrapper = document.querySelector(".wrapper"),
musicImg = wrapper.querySelector(".img-area img"),
musicName = wrapper.querySelector(".song-details .name"),
musicArtist = wrapper.querySelector(".song-details .artist"),
mainAudio = wrapper.querySelector("#main-audio"),
playPauseBtn = wrapper.querySelector(".play-pause"),
prevBtn = wrapper.querySelector("#prev"),
nextBtn = wrapper.querySelector("#next");

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

function pauseMusic()      //pause music button function
{
    wrapper.classList.remove("play");
    playPauseBtn.querySelector("i").innerText = "play_arrow";   //when clicked on pause button change to play button
    mainAudio.pause();
}

function nextMusic(){          //next music button function
    musicIndex++;              //increment index by 1
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;  //if musicIndex is greater than array length then musicIndex will be 1 so the first music will play
    loadMusic(musicIndex);
    playMusic();
}

function prevMusic(){          //prev music button function
    musicIndex--;              //decrement index by 1
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;  //if musicIndex is greater than 1 then musicIndex will be array length so the last music will play
    loadMusic(musicIndex);
    playMusic();
}

playPauseBtn.addEventListener("click",()=>{                  //play & pause button event
    const isMusicPaused = wrapper.classList.contains("paused");
    isMusicPaused ? pauseMusic() : playMusic();  //if music is paused call pause function else call play function
});

prevBtn.addEventListener("click",()=>{                //prev music button event
    prevMusic();
});

nextBtn.addEventListener("click",()=>{               //next music button event
    nextMusic();
});
