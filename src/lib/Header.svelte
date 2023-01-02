<script>
  import { flip } from "svelte/animate";

  export let selectedWeek;
</script>

<header class:minimize={selectedWeek}>
  <nav>
    {#if !selectedWeek}
      <h1>
        <img src="/threlte.png" alt="Threlte Logo" />
        <span>
          SRP - Threlte
          <h2>Sjors Wijsman</h2>
        </span>
      </h1>
      <h3>Weken</h3>
    {/if}
    {#if selectedWeek !== 0}
      <button on:click={() => (selectedWeek = 0)}>Home</button>
    {/if}
    {#each Array(6) as _, index (index)}
      <button
        on:click={() => (selectedWeek = index + 1)}
        class:active={selectedWeek === index + 1}
        animate:flip
      >
        Week <span>{index + 1}</span>
      </button>
    {/each}
    {#if !selectedWeek}
      <a
        href="https://operatie-gekkigeit.notion.site/SRP-Threlte-0302c5b6331f4343abed1df12a298e4f"
        target="_blank"
        rel="noreferrer"
      >
        Lees hier het volledige verslag
        <img src="/icons/external-link.svg" alt="" />
      </a>
    {/if}
  </nav>
</header>

<style>
  header {
    z-index: 2;
    padding: 0.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    max-width: 100%;
  }

  header.minimize {
    top: 0%;
    left: 0%;
    transform: translate(0, 0);
  }

  nav {
    display: flex;
    flex-direction: column;
    max-width: 30rem;
    width: 20rem;
  }

  header.minimize nav {
    flex-wrap: wrap;
    flex-direction: row;
    max-width: 100%;
    width: 100%;
  }

  nav button {
    height: unset;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    flex-direction: row;
  }

  nav button span {
    margin-left: 0.3rem;
  }

  h1 {
    display: flex;
    align-items: center;
  }

  h1 img {
    width: 4.5rem;
    margin-right: 1rem;
    background-color: var(--color-gray-light);
    padding: 0.5rem;
    border-radius: 0.5rem;
  }

  h1 span {
    color: var(--color-black-light);
  }

  h2 {
    margin: 0;
  }

  a {
    display: flex;
    align-items: center;
    height: 2rem;
    opacity: 0.7;
  }

  a img {
    height: 100%;
    padding: 0.4rem;
    filter: saturate(0) brightness(0.7);
    opacity: 0.8;
  }

  a:hover {
    opacity: 0.9;
  }
</style>
