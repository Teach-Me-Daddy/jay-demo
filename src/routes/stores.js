import { writable } from 'svelte/store';

export const clicks = writable(0);
export const countdown = writable(10);
export const gameStart = writable(false);
