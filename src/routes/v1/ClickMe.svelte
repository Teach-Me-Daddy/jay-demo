<script>
  import { clicks, countdown, gameStart } from '../../lib/stores.js';

  const addClicks = () => clicks.update(n => n + 1);

  // delayed reactivity without also checking with countdown
  $: disableClickMeBtn = ($countdown === 0 || !$gameStart);
</script>

<p class="text-9xl mb-2">{$clicks}</p>
<button 
  class="btn rounded-xl bg-white disabled:opacity-50 disabled:cursor-not-allowed"
  disabled={disableClickMeBtn}
  on:click={addClicks}>Click me</button>

<style lang='postcss'>
  .btn {
    @apply border rounded-lg py-2 px-3 font-medium;
  }
</style>