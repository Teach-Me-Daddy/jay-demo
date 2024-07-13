import { clicks, countdown, gameStart } from './stores.js';
import { get } from 'svelte/store';

let intervalId = 0;

export const reduceCountdown = () => {
  if (get(countdown)) {
    countdown.update(n => n - 1);
  } else {
    clearInterval(intervalId);
  }
};

export const startCountdown = () => {
  gameStart.set(true);
  intervalId = setInterval(reduceCountdown, 1000);
};

export const stopCountdown = () => {
  gameStart.set(false);
  clearInterval(intervalId);
};

export const resetCountdown = () => {
  stopCountdown();
  countdown.set(10);
  clicks.set(0);
};
