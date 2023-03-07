import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';
const savedTime = localStorage.getItem(STORAGE_KEY);
const currentTime = function (e) {
  localStorage.setItem(STORAGE_KEY, e.seconds);
  console.log(e.seconds);
};

player.on('timeupdate', throttle(currentTime, 1000));
player.setCurrentTime(savedTime);
