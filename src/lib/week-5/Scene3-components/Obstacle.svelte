<script>
  import { T, useFrame } from "@threlte/core";
  import { onMount, onDestroy } from "svelte";
  import { tweened } from "svelte/motion";
  import { gameState } from "$store";

  export let previousTime = 0;
  export let dinoHeight;
  export let score;

  let obstacleHeight = 3.5;
  let obstacleWidth = 1;
  const dinoWidth = 2;

  const opacity = tweened(0, { duration: 300 });

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
      opacity.set(0);
    }
  }

  useFrame((frame) => {
    // Calculate time since last frame
    let deltaTime = frame.clock.elapsedTime - previousTime;
    previousTime = frame.clock.elapsedTime;

    moveObstacle(deltaTime);
  });

  onMount(() => opacity.set(1));
  onDestroy(() => opacity.set(0));
</script>

<T.Mesh position={[0, (obstacleHeight - 2) / 2, distance]} castShadow>
  <T.BoxGeometry args={[1, obstacleHeight, obstacleWidth]} />
  <T.MeshStandardMaterial
    color={"#008000"}
    opacity={$opacity}
    transparent="true"
  />
</T.Mesh>
