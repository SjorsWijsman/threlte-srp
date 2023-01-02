<script>
  import { fade, slide } from "svelte/transition";

  export let selectedWeek;

  const links = [
    {
      title: "Week 1 - Inlezen & Opzet 3D omgeving",
      link: "https://operatie-gekkigeit.notion.site/Week-1-Inlezen-Opzet-3D-Omgeving-8e2552e3b8d94a5bba97650548879d4a",
    },
    {
      title: "Week 2 - Basic 3D weergave",
      link: "https://operatie-gekkigeit.notion.site/Week-2-Basic-3D-weergave-c20c4b9e853c43bfa62bf187a42ada7f",
    },
    {
      title: "Week 3 - Interactie",
      link: "https://operatie-gekkigeit.notion.site/Week-3-Interactie-fbb46aa5bad442f2ab7ec86f62c97781",
    },
    {
      title: "Week 4 - Importeren van 3D models",
      link: "https://operatie-gekkigeit.notion.site/Week-4-Importeren-van-3D-models-719b2a86732e4e4795d05c3e63c81398",
    },
    {
      title: "Week 5 - Start Eindproduct",
      link: "https://operatie-gekkigeit.notion.site/Week-5-Start-Eindproduct-79b44ad1e941418d93ec4bc141e748ce",
    },
    {
      title: "Week 6 - Afronding Eindproduct",
      link: "https://operatie-gekkigeit.notion.site/Week-6-Afronding-Eindproduct-c5d8eb6226864dc4b48265f30c46a770",
    },
  ];
</script>

<footer transition:slide={{ duration: 500 }}>
  <a
    transition:fade={{ duration: 500 }}
    href={links[selectedWeek - 1]?.link}
    target="_blank"
    rel="noreferrer"
    class="button"
  >
    <img src="./threlte.png" alt="Threlte Logo" />
    {links[selectedWeek - 1]?.title}
    <img src="./icons/external-link.svg" alt="" />
  </a>
</footer>

<style>
  footer {
    z-index: 2;
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0.5rem;
  }

  @media (max-width: 30rem) {
    footer a {
      width: 100%;
      justify-content: space-between;
    }
  }

  footer a img {
    height: 100%;
    padding-right: 1rem;
    transition: all 0.3s ease-out;
  }

  footer a:hover img:first-child {
    transform: scale(1.1);
  }

  footer a img:last-child {
    filter: saturate(0);
    opacity: 0.8;
    padding: 0.4rem;
    padding-left: 0.5rem;
  }

  footer a:hover img:last-child {
    filter: saturate(1);
  }
</style>
