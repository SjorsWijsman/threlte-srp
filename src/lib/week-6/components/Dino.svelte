<script>
  import { T, Audio } from "@threlte/core";
  import { GLTF, Text, useGltfAnimations } from "@threlte/extras";

  import { tweened } from "svelte/motion";
  import { quadOut, quadIn } from "svelte/easing";

  import { gameState, highScore } from "$store";
  import { isTouchDevice } from "$scripts/is-touch";

  export let score;
  export let camera;
  export let dino;
  export let dinoHeight;

  let dinoJump = tweened(0, { duration: 350, easing: quadOut });
  let ducking = false;
  $: dinoHeight = $dinoJump;

  let playJumpSound, stopJumpSound;

  const { gltf, actions, mixer } = useGltfAnimations(({ actions, mixer }) => {
    actions["walk"]?.play();
  });

  // Or play them whenever you need
  export const startAnimation = (animation) => {
    $actions[animation]?.play();
  };

  // Or play them whenever you need
  export const stopAnimation = (animation) => {
    $actions[animation]?.stop();
  };

  gameState.subscribe((value) => {
    if (value === "gameOver") {
      dinoJump.set($dinoJump);
      startAnimation("death");
      stopAnimation("walk");
      stopAnimation("jump");
    } else {
      stopAnimation("death");
      startAnimation("walk");
    }
  });

  $: ducking ? startAnimation("duck") : stopAnimation("duck");

  async function keyDownEvent(event) {
    if ($gameState === "gameOver") return;

    const key = event.key;

    // Check if key is spacebar and the dino is close to the ground
    if ([" ", "w", "ArrowUp"].includes(key)) jump();

    // Duck
    if (["Shift", "s", "ArrowDown"].includes(key)) duck();
  }

  async function keyUpEvent(event) {
    if ($gameState === "gameOver") return;

    const key = event.key;

    // Unduck
    if (["Shift", "s", "ArrowDown"].includes(key)) {
      ducking = false;
    }
  }

  async function jump() {
    if ($dinoJump < 0.5 && $gameState !== "gameOver") {
      const jumpHeight = 6;

      ducking = false;

      stopJumpSound();
      playJumpSound();

      startAnimation("jump");
      await dinoJump.set(jumpHeight, { easing: quadOut });
      await dinoJump.set(0, { easing: quadIn });
      stopAnimation("jump");
    }
  }

  function duck() {
    ducking = true;
    dinoJump.set(0, { duration: 100 });
  }

  export function resetDino() {
    ducking = false;

    stopJumpSound();
    playJumpSound();

    dinoJump.set(0, { duration: 0 });
  }
</script>

<svelte:body
  on:keydown={keyDownEvent}
  on:keyup={keyUpEvent}
  on:click={() => isTouchDevice() ?? jump()}
/>

<!-- Dino -->
<T.Mesh bind:ref={dino} />

<!-- Model -->
<GLTF
  castShadow
  url={`models/dino.gltf`}
  position={{ x: 0, y: -1 + $dinoJump, z: 0 }}
  scale={{ x: 1.2, y: 1.2, z: 1.2 }}
  bind:gltf={$gltf}
/>

<!-- Audio -->
<Audio
  source={"audio/jump.wav"}
  bind:play={playJumpSound}
  bind:stop={stopJumpSound}
/>

<Text
  text={`${score}`}
  position={{ x: 0, y: 3 + $dinoJump, z: 0 }}
  scale={8}
  lookAt={camera}
  color={"#ff2200"}
  outlineColor={"#ff5522"}
  outlineOffsetX={0.005}
  outlineOffsetY={0.005}
  outlineOpacity={0.7}
  anchorX={"center"}
  anchorY={"center"}
/>

{#if $gameState === "gameOver"}
  <Text
    text={`Game over.\nPress jump to restart!`}
    position={{ x: 0, y: 3.5 + $dinoJump, z: 0 }}
    scale={6}
    lookAt={camera}
    color={"#00337C"}
    outlineColor={"#0081C9"}
    outlineOffsetX={0.005}
    outlineOffsetY={0.005}
    outlineOpacity={0.7}
    textAlign={"center"}
    anchorX={"center"}
    anchorY={"bottom"}
  />
{:else if $highScore > 0}
  <Text
    text={`${$highScore}`}
    position={{ x: 0, y: 3.5 + $dinoJump, z: 0 }}
    scale={4}
    lookAt={camera}
    color={"#00337C"}
    outlineColor={"#0081C9"}
    outlineOffsetX={0.005}
    outlineOffsetY={0.005}
    outlineOpacity={0.5}
    textAlign={"center"}
    anchorX={"center"}
    anchorY={"bottom"}
    fillOpacity={0.7}
  />
{/if}
