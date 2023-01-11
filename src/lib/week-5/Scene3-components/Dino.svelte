<script>
  import { T } from "@threlte/core";

  import { tweened } from "svelte/motion";
  import { quadOut, quadIn } from "svelte/easing";

  import { Text } from "@threlte/extras";
  import { gameState } from "$store";

  export let score;
  export let camera;
  export let dino;
  export let dinoHeight;

  let dinoJump = tweened(0, { duration: 350, easing: quadOut });
  let ducking = false;
  $: dinoHeight = $dinoJump;

  gameState.subscribe((value) => {
    if (value === "gameOver") dinoJump.set($dinoJump);
  });

  async function keyDownEvent(event) {
    if ($gameState === "gameOver") return;

    const key = event.key;

    // Jump
    const jumpHeight = 6;
    // Check if key is spacebar and the dino is close to the ground
    if ([" ", "w", "ArrowUp"].includes(key) && $dinoJump < 0.5) {
      ducking = false;
      await dinoJump.set(jumpHeight, { easing: quadOut });
      await dinoJump.set(0, { easing: quadIn });
    }

    // Duck
    if (["Shift", "s", "ArrowDown"].includes(key)) {
      ducking = true;
      dinoJump.set(0, { duration: 100 });
    }
  }

  async function keyUpEvent(event) {
    if ($gameState === "gameOver") return;

    const key = event.key;

    // Unduck
    if (["Shift", "s", "ArrowDown"].includes(key)) {
      ducking = false;
    }
  }
</script>

<svelte:body on:keydown={keyDownEvent} on:keyup={keyUpEvent} />

<!-- Dino -->
<T.Mesh
  bind:ref={dino}
  castShadow
  position={[0, ducking ? $dinoJump - 0.5 : $dinoJump, 0]}
>
  <T.BoxGeometry args={[1, ducking ? 1 : 2, 2]} />
  <T.MeshStandardMaterial color="#ff2200" />
</T.Mesh>

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
