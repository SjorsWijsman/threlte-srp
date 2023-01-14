<script>
  import { gameState, highScore } from "$store";
  import { T, OrbitControls, AudioListener, Audio } from "@threlte/core";

  import Dino from "./components/Dino.svelte";
  import Obstacles from "./components/Obstacles.svelte";

  let camera;
  let dino;
  let dinoHeight;
  let score = 0;

  let resetDino;
  let resetObstacles;

  let playDeathAudio, playPointsAudio, stopDeathAudio, stopPointsAudio;

  $: dinoHeight;

  $gameState = "playing";

  function keyDownEvent(event) {
    const key = event.key;

    if ([" ", "w", "ArrowUp"].includes(key)) restart();
  }

  function restart() {
    if ($gameState === "gameOver") {
      if (score > $highScore) $highScore = score;
      score = 0;
      resetDino();
      resetObstacles();
      $gameState = "playing";
    }
  }

  gameState.subscribe((state) => {
    if (state === "gameOver") {
      stopDeathAudio();
      playDeathAudio();
    }
  });

  $: if (score % 10 === 0 && score > 0) {
    stopPointsAudio();
    playPointsAudio();
  }
</script>

<svelte:window on:keydown={keyDownEvent} on:click={restart} />

<!-- Camera -->
<T.PerspectiveCamera
  makeDefault
  position={[16, 11, 12]}
  near={1}
  far={10000}
  bind:ref={camera}
>
  <OrbitControls
    target={dino?.position}
    enableZoom={true}
    minDistance={8}
    maxDistance={25}
    maxPolarAngle={1.5}
  />
  <AudioListener />
</T.PerspectiveCamera>

<!-- Audio -->
<Audio
  source={"audio/die.wav"}
  bind:play={playDeathAudio}
  bind:stop={stopDeathAudio}
/>
<Audio
  source={"audio/point.wav"}
  bind:play={playPointsAudio}
  bind:stop={stopPointsAudio}
/>

<!-- Lights -->
<T.DirectionalLight position={[3, 10, 10]} castShadow />
<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
<T.AmbientLight intensity={0.2} />

<!-- Game Objects -->
<Dino bind:dino {score} {camera} bind:dinoHeight bind:resetDino />
<Obstacles bind:score {dinoHeight} bind:resetObstacles />

<!-- Ground -->
<T.Group position={[0, -2, -20]}>
  <T.Mesh receiveShadow>
    <T.BoxGeometry args={[5, 2, 60]} />
    <T.MeshStandardMaterial color="#FFD166" />
  </T.Mesh>

  <T.Mesh position={[0, -3, 0]}>
    <T.BoxGeometry args={[5, 4, 60]} />
    <T.MeshStandardMaterial color="#b6964f" />
  </T.Mesh>
</T.Group>
