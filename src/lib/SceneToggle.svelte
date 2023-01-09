<script>
  import { scene } from "$store";
  import { Canvas } from "@threlte/core";

  export let components = [];

  if ($scene < 1) $scene = 1;

  let selected = components[$scene - 1];
</script>

<form action="">
  {#each components as component, index}
    <input
      type="radio"
      id="experiment-{index}"
      bind:group={selected}
      value={component}
      on:change={() => ($scene = index + 1)}
    />
    <label for="experiment-{index}" class="button">
      Scene {index + 1}
    </label>
  {/each}
</form>
<Canvas>
  <svelte:component this={selected} />
</Canvas>

<style>
  form {
    position: absolute;
    display: flex;
    flex-direction: row;
    bottom: 3.5rem;
    padding: 0.5rem;
  }

  input {
    display: none;
  }

  label {
    height: unset;
    margin-right: 0.5rem;
  }

  label:hover {
    color: blue;
  }

  input:checked + label {
    color: blue;
    cursor: pointer;
    background-color: var(--color-gray);
  }
</style>
