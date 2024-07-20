<script lang="ts">
  import { goto } from "$app/navigation";
  import { fade, fly } from "svelte/transition";

  const navigateTo = (path: string) => {
    goto(`/${path}`);
  };
</script>

<div
  transition:fade
  class="text-center flex flex-col items-center justify-center h-screen lg:flex-row lg:justify-center"
>
  <div in:fly={{ x: "-10em" }} class="v1 card">
    <h2 class="title">ClickMe</h2>
    <p class="sub-title">
      Play the original click game to see how fast you can click!
    </p>
    <button class="cursor-pointer btn" on:click={() => navigateTo("v1")}
      >Play ClickMe</button
    >
  </div>
  <div in:fly={{ x: "10em" }} class="v2 card">
    <h2 class="title">Click-a-Mole</h2>
    <p class="sub-title">Challenge yourself by only clicking the mole!</p>
    <button class="cursor-pointer btn" on:click={() => navigateTo("v2")}
      >Play Click-a-Mole</button
    >
  </div>
</div>

<style lang="postcss">
  .btn {
    @apply border rounded-full
      py-2 px-3
      font-bold text-white
      bg-blue-600;
  }

  .card {
    @apply flex flex-col justify-between
      border border-blue-700 rounded-lg
      py-10 px-10 h-1/3 m-10
      w-8/12 lg:w-4/12
      hover:scale-105
      hover:bg-blue-600;
  }

  .title,
  .sub-title,
  .card,
  .btn {
    @apply transition ease-in-out delay-100;
  }

  .title {
    @apply text-4xl font-extrabold text-blue-700;
  }

  .sub-title {
    @apply text-slate-700;
  }

  .card:hover .title,
  .card:hover .sub-title {
    @apply text-slate-100;
  }

  .card:hover .btn {
    @apply bg-white text-blue-700;
  }
</style>
