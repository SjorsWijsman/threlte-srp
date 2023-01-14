<script>
  import { degToRad } from "three/src/math/MathUtils";

  import { T, useFrame } from "@threlte/core";
  import { GLTF } from "@threlte/extras";

  import { onMount, onDestroy } from "svelte";
  import { tweened } from "svelte/motion";

  import { gameState } from "$store";
  import { bounceOut, cubicIn } from "svelte/easing";

  export let previousTime = 0;
  export let dinoHeight;
  export let score;

  let obstacle;

  let obstacleHeight = 3.5;
  let obstacleWidth = 1;
  const dinoWidth = 2;

  const scale = tweened(0, { duration: 400, easing: bounceOut });

  let distance = -50;
  let scoreGiven = false;

  function moveObstacle(deltaTime) {
    if ($gameState !== "playing") return;

    distance += deltaTime * 15;

    // Check if dino is above obstacle
    if (
      distance > -(dinoWidth / 2 + obstacleWidth / 2) &&
      distance < dinoWidth / 2 + obstacleWidth / 2
    ) {
      // Hit the obstacle
      if (dinoHeight <= obstacleHeight) {
        $gameState = "gameOver";
        return;
      }
    }

    if (distance >= dinoWidth / 2 + obstacleWidth / 2 && !scoreGiven) {
      scoreGiven = true;
      score += 1;
      scale.set(0, { duration: 500, easing: cubicIn });
    }
  }

  function randomObstacle(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  useFrame((frame) => {
    // Calculate time since last frame
    let deltaTime = frame.clock.elapsedTime - previousTime;
    previousTime = frame.clock.elapsedTime;

    moveObstacle(deltaTime);
  });

  onMount(() => scale.set(1, { duration: 1000, easing: bounceOut }));
  onDestroy(() => scale.set(0, { duration: 500, easing: cubicIn }));
</script>

<!-- Model -->
<GLTF
  url={`models/${randomObstacle([
    "cactus1",
    "cactus2",
    "cactus3",
    "rocks",
  ])}.gltf`}
  position={{ x: 0, y: -1, z: distance }}
  rotation={{ x: 0, y: degToRad(Math.floor(Math.random() * 2) * 180), z: 0 }}
  scale={{ x: $scale, y: $scale, z: $scale }}
  castShadow
/>
