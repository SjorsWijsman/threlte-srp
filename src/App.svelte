<script>
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
  import SceneContainer from "$lib/SceneContainer.svelte";
  import SceneToggle from "$lib/SceneToggle.svelte";
  import SceneWeek1 from "$lib/week-1/Scene.svelte";
  import SceneWeek2 from "$lib/week-2/Scene.svelte";
  import SceneWeek3_1 from "$lib/week-3/Scene1.svelte";
  import SceneWeek3_2 from "$lib/week-3/Scene2.svelte";
  import SceneWeek3_3 from "$lib/week-3/Scene3.svelte";
  import SceneWeek4_1 from "$lib/week-4/Scene1.svelte";
  import SceneWeek4_2 from "$lib/week-4/Scene2.svelte";
  import SceneWeek4_3 from "$lib/week-4/Scene3.svelte";
  import SceneWeek4_4 from "$lib/week-4/Scene4.svelte";
  import SceneWeek5_1 from "$lib/week-5/Scene1.svelte";
  import SceneWeek5_2 from "$lib/week-5/Scene2.svelte";
  import SceneWeek5_3 from "$lib/week-5/Scene3.svelte";
  import SceneWeek6 from "$lib/week-6/Scene.svelte";
  import { week, scene } from "$store";

  scene.subscribe(() => {
    setParams();
  });

  week.subscribe((value) => {
    if (value > 6 || value < 0 || !value) {
      value = 0;
    }

    setParams();
  });

  function setParams() {
    let newParams = "?";
    let paramList = [];

    if ($week !== 0) {
      paramList.push(`week=${+$week}`);
    }

    if ($scene !== 0) {
      paramList.push(`scene=${+$scene}`);
    }

    window.history.replaceState(null, null, newParams + paramList.join("&"));
  }
</script>

<Header />
{#if $week}
  <main>
    {#if $week == 1}
      <SceneContainer>
        <SceneWeek1 />
      </SceneContainer>
    {:else if $week == 2}
      <SceneContainer>
        <SceneWeek2 />
      </SceneContainer>
    {:else if $week == 3}
      <SceneContainer toggle={true}>
        <SceneToggle components={[SceneWeek3_1, SceneWeek3_2, SceneWeek3_3]} />
      </SceneContainer>
    {:else if $week == 4}
      <SceneContainer toggle={true}>
        <SceneToggle
          components={[SceneWeek4_1, SceneWeek4_2, SceneWeek4_3, SceneWeek4_4]}
        />
      </SceneContainer>
    {:else if $week == 5}
      <SceneContainer
        background={"linear-gradient(to bottom, #b7eaff,#ccffff)"}
        toggle={true}
      >
        <SceneToggle components={[SceneWeek5_1, SceneWeek5_2, SceneWeek5_3]} />
      </SceneContainer>
    {:else if $week == 6}
      <SceneContainer
        background={"linear-gradient(to bottom, #b7eaff,#ccffff)"}
      >
        <SceneWeek6 />
      </SceneContainer>
    {/if}
  </main>
  <Footer />
{/if}

<style>
  main {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
</style>
