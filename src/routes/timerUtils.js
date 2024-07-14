import { get } from "svelte/store";
import { clicks, countdown, gameStart } from "../lib/stores.js";

let intervalId = 0;

export function reduceCountdown() {
  if (get(countdown)) {
    countdown.update((n) => n - 1);
  } else {
    clearInterval(intervalId);
  }
}

export function startCountdown() {
  gameStart.set(true);
  intervalId = setInterval(reduceCountdown, 1000);
}

export function stopCountdown() {
  gameStart.set(false);
  clearInterval(intervalId);
}

export const resetCountdown = () => {
  stopCountdown();
  countdown.set(10);
  clicks.set(0);
};
