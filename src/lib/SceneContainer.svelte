<script>
  import { Canvas } from "@threlte/core";
  import { fade } from "svelte/transition";

  export let toggle = false;

  export let background = "";
</script>

<div
  in:fade={{ duration: 500, delay: 500 }}
  out:fade={{ duration: 500 }}
  style:background
>
  {#if toggle}
    <slot />
  {:else}
    <Canvas>
      <slot />
    </Canvas>
  {/if}
</div>

<style>
  div {
    position: absolute;
    height: 100%;
    width: 100%;
  }
</style>
