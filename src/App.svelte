<script>
  import { fade } from "svelte/transition";
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
  import SceneWeek1 from "$lib/week-1/Scene.svelte";
  import SceneWeek2 from "$lib/week-2/Scene.svelte";
  import SceneWeek3 from "$lib/week-3/Scene.svelte";
  import SceneWeek4 from "$lib/week-4/Scene.svelte";
  import SceneWeek5 from "$lib/week-5/Scene.svelte";
  import SceneWeek6 from "$lib/week-6/Scene.svelte";

  let selectedWeek = 0;
</script>

<Header bind:selectedWeek />
{#if selectedWeek}
  <main>
    {#if selectedWeek == 1}
      <div transition:fade={{ duration: 500 }}>
        <SceneWeek1 />
      </div>
    {:else if selectedWeek == 2}
      <div transition:fade={{ duration: 500 }}>
        <SceneWeek2 />
      </div>
    {:else if selectedWeek == 3}
      <div transition:fade={{ duration: 500 }}>
        <SceneWeek3 />
      </div>
    {:else if selectedWeek == 4}
      <div transition:fade={{ duration: 500 }}>
        <SceneWeek4 />
      </div>
    {:else if selectedWeek == 5}
      <div transition:fade={{ duration: 500 }}>
        <SceneWeek5 />
      </div>
    {:else if selectedWeek == 6}
      <div transition:fade={{ duration: 500 }}>
        <SceneWeek6 />
      </div>
    {/if}
  </main>
  <Footer bind:selectedWeek />
{/if}

<style>
  main {
    height: 100vh;
    width: 100%;
  }

  div {
    position: absolute;
    height: 100%;
    width: 100%;
  }
</style>
