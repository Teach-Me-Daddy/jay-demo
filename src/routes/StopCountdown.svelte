<script>
  import { countdown, gameStart } from "../lib/stores.js";
  import { stopCountdown } from "./timerUtils.js";

  // delayed reactivity without also checking with countdown
</script>

<button
  class="btn border-red-500 bg-red-100 text-rose-500 disabled:opacity-50 disabled:cursor-not-allowed"
  disabled={$countdown === 0 || !$gameStart}
  on:click={stopCountdown}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="size-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M15.75 5.25v13.5m-7.5-13.5v13.5"
    />
  </svg>
</button>

<style lang="postcss">
  .btn {
    @apply border rounded-lg py-2 px-3 font-medium;
  }
</style>
