import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(data => {
    console.log(data.seconds);
    localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
  }, 1000)
);

if (!localStorage.getItem(LOCALSTORAGE_KEY) === '') {
  player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));
}

player.setVolume(0.5);
