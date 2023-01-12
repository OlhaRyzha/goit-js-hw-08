import _throttle from 'lodash.throttle';
import Vimeo from '@vimeo/player';

const localKey = 'videoplayer-current-time';
const player = new Vimeo('vimeo-player');

player.on('loaded', () => {
  const currentTime = localStorage.getItem(localKey) || 0;
  player.setCurrentTime(currentTime);
});

player.on(
  'timeupdate', _throttle(({ seconds }) => localStorage.setItem(localKey, seconds), 1000)
);

