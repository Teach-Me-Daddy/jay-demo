<script>
  import { gameStart } from '../../lib/stores.js';
  import { startCountdown } from '../../lib/timerUtils.js';

  $: disablePlayBtn = $gameStart;
</script>

<button
  class="btn border-blue-600 bg-blue-600 text-white mr-4 disabled:opacity-50 disabled:cursor-not-allowed"
  disabled={disablePlayBtn}
  on:click={startCountdown}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
  </svg>
</button>

<style lang='postcss'>
  .btn {
    @apply border rounded-lg py-2 px-3 font-medium;
  }
</style>