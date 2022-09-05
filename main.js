const play = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
</svg>`;
const pause = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`;

const playButton = document.querySelector('.play-button');
const video = document.getElementById('video');
const time = document.querySelector('.time');

const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');
const bar4 = document.querySelector('.bar4');
const bar5 = document.querySelector('.bar5');
const bar6 = document.querySelector('.bar6');

playButton.addEventListener('click', function () {
  if (video.paused) {
    video.play();
    playButton.innerHTML = pause;
    enableVisualization();
  } else {
    video.pause();
    playButton.innerHTML = play;
    disableVisualization();
  }
});

video.onended = function () {
  playButton.innerHTML = play;
  disableVisualization();
};

video.ontimeupdate = function () {
  let min = Math.floor(video.currentTime / 60);
  if (min < 10) {
    min = `0${min}`;
  }
  let sec = Math.floor(video.currentTime - min * 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  time.innerHTML = `${min}:${sec}`;
};

function enableVisualization() {
  bar1.classList.add('animation-quiet');
  bar2.classList.add('animation-normal');
  bar3.classList.add('animation-quiet');
  bar4.classList.add('animation-loud');
  bar5.classList.add('animation-quiet');
  bar6.classList.add('animation-normal');
}

function disableVisualization() {
  bar1.classList.remove('animation-quiet');
  bar2.classList.remove('animation-normal');
  bar3.classList.remove('animation-quiet');
  bar4.classList.remove('animation-loud');
  bar5.classList.remove('animation-quiet');
  bar6.classList.remove('animation-normal');
}
