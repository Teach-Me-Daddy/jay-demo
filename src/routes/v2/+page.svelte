<script lang="ts">
  import { fly } from "svelte/transition";

  let clicks = 0;
  let intervalId = 0;
  let countdown = 10;
  let gameStart = false;
  let randomNumber = Math.floor(Math.random() * 9);

  const changeTile = (e: any) => {
    if (!gameStart) {
      return;
    }
    if (Number(e.target.classList[0]) === randomNumber) {
      randomNumber = Math.floor(Math.random() * 9);
      addClicks();
    } else {
      if (clicks >= 0) {
        reduceClicks();
      }
    }
  };

  const addClicks = () => (clicks += 1);

  const reduceClicks = () => (clicks -= 1);

  const reduceCountdown = () => {
    if (countdown) {
      countdown -= 1;
    } else {
      clearInterval(intervalId);
      gameStart = false;
    }
  };

  const startCountdown = () => {
    gameStart = true;
    intervalId = setInterval(reduceCountdown, 1000);
  };

  const resetCountdown = () => {
    gameStart = false;
    clearInterval(intervalId);
    countdown = 10;
    clicks = 0;
  };
</script>

<div
  class="flex flex-col justify-center items-center h-screen bg-slate-100 text-center"
>
  <div class="mb-6">
    <h1 class="text-4xl mb-2 font-extrabold">Click-a-Mole! 🦦</h1>
    <p class="font-thin">
      Click the <span
        class="text-blue-700 font-normal underline underline-offset-4"
        >blue</span
      > circle as soon as it appears!
    </p>
  </div>

  <p class="mb-6 text-2xl">{clicks < 0 ? "Stop fooling around 🙄" : clicks}</p>

  <div
    class="grid game grid-cols-3 w-3/4 max-w-80 gap-4 mb-10 mx-auto border p-4"
  >
    {#each Array(9) as _, index}
      <button
        class="{`${index}`} {index === randomNumber
          ? 'bg-blue-700 shadow-lg shadow-blue-500/50 hover:shadow-none'
          : 'bg-white shadow-lg shadow-white-500/50 hover:shadow-none'}"
        on:click={changeTile}
      ></button>
    {/each}
  </div>

  <div class="flex justify-between items-center w-3/4 max-w-80">
    {#if countdown}
      <button
        class="border px-10 py-2 rounded-md bg-blue-600 text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={gameStart}
        on:click={startCountdown}>Start</button
      >
    {:else}
      <button
        class="border px-10 py-2 rounded-md border-blue-700 bg-white text-blue-700 font-bold"
        on:click={resetCountdown}>Reset</button
      >
    {/if}
    {#key countdown}
      <p in:fly={{ y: "1em" }} class="text-lg">
        {countdown ? countdown : "Game Over 👾"}
      </p>
    {/key}
  </div> <!-- controls-->
</div> <!-- container-->

<style lang="postcss">
  .game button {
    @apply text-red-50 py-10 border border-slate-500 rounded-full hover:opacity-90;
  }
</style>
