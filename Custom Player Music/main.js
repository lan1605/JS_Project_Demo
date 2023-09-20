const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let allMusic = [
  {
    name: "Đôi mình",
    artist: "chuotsamset ⚡️",
    img: "./images/doi-minh-chuotsamset.jpg",
    src: "./music/chuotsamset⚡️ _đôi mình.mp3",
  },
  {
    name: "Kho báu đánh rơi",
    artist: "Tlinh - GreyD",
    img: "./images/kho-bau-danh-roi-tlinh.jpg",
    src: "./music/tlinh - kho báu đánh rơi (feat. Grey D).mp3",
  },
  {
    name: "Soda",
    artist: "MCK",
    img: "./images/soda-mck.jpg",
    src: "./music/SODA - MCK.mp3",
  },
  {
    name: "Thôi em đừng đi",
    artist: "MCK - Trung Trần",
    img: "./images/thoi-em-dung-di-mck.jpg",
    src: "./music/Thôi Em Đừng Đi - RPT MCK ( ft. Trung Trần ).mp3",
  },
  {
    name: "Tiếp đất",
    artist: "LowG - Thắng",
    img: "./images/tiep-dat-lowg-thang.jpg",
    src: "./music/Tiếp Đất _ Low G ft. Thắng.mp3",
  },
];
let musicIndex = 0;
window.addEventListener("load", function () {
  loadMusic(musicIndex);
});
const loadMusic = (indexNum) => {
  $(".music-info--title").innerText = allMusic[indexNum].name;
  $(".music-info--artist").innerText = allMusic[indexNum].artist;
  $(".music-img").src = allMusic[indexNum].img;
  $(".music-audio").src = allMusic[indexNum].src;
};
function playMusic() {
  $(".wrapper").classList.add("paused");
  $(".music-audio").play();
  $(".option-play").querySelector("#play").innerText = "pause";
}
function pauseMusic() {
  $(".wrapper").classList.remove("paused");
  $(".music-audio").pause();
  $(".option-play").querySelector("#play").innerText = "play_arrow";
}
$(".option-play").addEventListener("click", function () {
  const isMusicPaused = $(".wrapper").classList.contains("paused");
  isMusicPaused ? pauseMusic() : playMusic();
});
function prevMusic() {
  if (musicIndex === 0) {
    musicIndex = allMusic.length - 1;
  } else {
    musicIndex = musicIndex - 1;
  }
  loadMusic(musicIndex);
  playMusic();
}
function nextMusic() {
  musicIndex = musicIndex + 1;
  if (musicIndex === allMusic.length) {
    musicIndex = 0;
  }
  loadMusic(musicIndex);
  playMusic();
}
$(".option-prev").addEventListener("click", function () {
  prevMusic();
});
$(".option-next").addEventListener("click", function () {
  nextMusic();
});
$(".music-audio").addEventListener("timeupdate", (e) => {
  let currentTime = e.target.currentTime;
  const duration = e.target.duration;
  let progressWidth = (currentTime / duration) * 100;
  $(".progress-bar").style = `width: ${progressWidth}%`;
  if (progressWidth === 100) {
    nextMusic();
  }

  $(".music-audio").addEventListener("loadeddata", (e) => {
    // event loadded: load xong sự kiện trong khi đang chạy sự kiện đó
    let audioDuration = $(".music-audio").duration,
      totalMin = Math.floor(audioDuration / 60),
      totalSec =
        Math.floor(audioDuration % 60) < 10
          ? `0${Math.floor(audioDuration % 60)}`
          : Math.floor(audioDuration % 60);
    $(".time#duration").innerText = `${totalMin}:${totalSec}`;
  });
  let currentMin = Math.floor(currentTime / 60),
    currentSec =
      Math.floor(currentTime % 60) < 10
        ? `0${Math.floor(currentTime % 60)}`
        : Math.floor(currentTime % 60);
  $(".time#current").innerText = `${currentMin}:${currentSec}`;
});

$(".option-replay").addEventListener("click", function (e) {});
