<script lang="ts">
  let clicks: number = 0;
  let countdown: number = 10;
  let intervalId: number;

  let disableClickMeBtn: boolean;
  let disablePauseBtn: boolean;
  let disablePlayBtn: boolean;
  let gameStart: boolean = false;

  // delayed reactivity without also checking with countdown
  $: disableClickMeBtn = (countdown === 0 || !gameStart);
  $: disablePauseBtn = (countdown === 0 || !gameStart);
  $: disablePlayBtn = gameStart;

  const addClicks = () => clicks += 1;

  const reduceCountdown = () => {
    if (countdown) {
      countdown -= 1;
    } else {
      clearInterval(intervalId);
    }
  };

  const startCountdown = () => {
    gameStart = true;
    intervalId = setInterval(reduceCountdown, 1000);
  };

  const stopCountdown = () => {
    gameStart = false;
    clearInterval(intervalId);
  };

  const resetCountdown = () => {
    stopCountdown();
    countdown = 10;
    clicks = 0;
    gameStart = false;
  };

</script>

<div class="p-8 flex justify-center items-center h-screen">
  <div class="max-w-lg mx-0 p-12 border rounded-xl bg-slate-50">
    <h1 class="text-3xl mb-2 font-extrabold">Click Me</h1>
    <h2 class="font-thin mb-20 text-slate-500">Find out what your finger is capable of 👀</h2>

    <div class="mb-20 text-center">
      <p class="text-9xl mb-2">{clicks}</p>
      <button class="btn rounded-xl bg-white disabled:opacity-50 disabled:cursor-not-allowed" disabled={disableClickMeBtn} on:click={addClicks}>Click me</button>
    </div>

    <div class="controls">
        <p class="mb-4 text-xl">{countdown}</p>
        <div class="flex justify-between">
          <div>
            <button
              class="btn border-blue-600 bg-blue-600 text-white mr-4 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={disablePlayBtn}
              on:click={startCountdown}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
              </svg>
            </button>
            <button
              class="btn border-red-500 bg-red-100 text-rose-500 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={disablePauseBtn}
              on:click={stopCountdown}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
              </svg>
            </button>
          </div>
          <div>
            <button
              class="btn border-slate-500 bg-slate-100"
              on:click={resetCountdown}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" />
              </svg>
            </button>
          </div>
        </div>
    </div>
  </div>
</div>

<style>
  .btn {
    @apply border rounded-lg py-2 px-3 font-medium;
  }
</style>