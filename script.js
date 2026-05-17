document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

    setTimeout(() => {

      card.style.transition = "all 0.8s ease";

      card.style.opacity = "1";
      card.style.transform = "translateY(0px)";

    }, index * 200);

  });

// REEMPLAZAR TODO EL JS DEL PLAYER POR ESTE

const audioPlayer = document.getElementById("audio-player");

const playBtn = document.getElementById("playBtn");
const backBtn = document.getElementById("backBtn");
const forwardBtn = document.getElementById("forwardBtn");

const progressBar = document.getElementById("progressBar");
const volumeControl = document.getElementById("volumeControl");

const songTime = document.getElementById("songTime");

let isPlaying = false;

/* PLAY / PAUSA */

playBtn.addEventListener("click", () => {

  if(!isPlaying){

    audioPlayer.play();

    playBtn.innerHTML = "❚❚";

    isPlaying = true;

  } else {

    audioPlayer.pause();

    playBtn.innerHTML = "▶";

    isPlaying = false;

  }

});

/* ADELANTAR */

forwardBtn.addEventListener("click", () => {

  audioPlayer.currentTime += 10;

});

/* RETROCEDER */

backBtn.addEventListener("click", () => {

  audioPlayer.currentTime -= 10;

});

/* ACTUALIZAR BARRA */

audioPlayer.addEventListener("timeupdate", () => {

  const progress =
  (audioPlayer.currentTime / audioPlayer.duration) * 100;

  progressBar.value = progress;

  /* TIEMPO */

  const minutes =
  Math.floor(audioPlayer.currentTime / 60);

  const seconds =
  Math.floor(audioPlayer.currentTime % 60)
  .toString()
  .padStart(2,"0");

  songTime.innerHTML =
  `${minutes}:${seconds}`;

});

/* MOVER BARRA */

progressBar.addEventListener("input", () => {

  const time =
  (progressBar.value / 100)
  * audioPlayer.duration;

  audioPlayer.currentTime = time;

});

/* VOLUMEN */

volumeControl.addEventListener("input", () => {

  audioPlayer.volume =
  volumeControl.value;

});

/* REINICIO */

audioPlayer.addEventListener("ended", () => {

  playBtn.innerHTML = "▶";

  isPlaying = false;

});
});
