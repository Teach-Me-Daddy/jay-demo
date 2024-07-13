<script>
  import { countdown } from './stores.js';
  import ClickMe from './ClickMe.svelte';
  import StartCountdown from './StartCountdown.svelte';
  import StopCountdown from './StopCountdown.svelte';
  import ResetCountdown from './ResetCountdown.svelte';
</script>

<div class="p-8 flex justify-center items-center h-screen">
  <div class="max-w-lg mx-0 p-12 border rounded-xl bg-slate-50">
    <h1 class="text-3xl mb-2 font-extrabold">Click Me</h1>
    <h2 class="font-thin mb-20 text-slate-500">Find out what your finger is capable of 👀</h2>

    <div class="mb-20 text-center">
      <ClickMe />
    </div>

    <div class="controls">
        <p class="mb-4 text-xl">{$countdown}</p>
        <div class="flex justify-between">
          <div>
            <StartCountdown />
            <StopCountdown />
          </div>
          <div>
            <ResetCountdown />
          </div>
        </div>
    </div> <!-- controls-->
  </div> <!-- container-->
</div>
