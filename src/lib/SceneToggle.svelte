<script>
  import { scene } from "$store";

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
<svelte:component this={selected} />

<style>
  form {
    position: absolute;
    display: flex;
    flex-direction: row;
    top: 3rem;
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
