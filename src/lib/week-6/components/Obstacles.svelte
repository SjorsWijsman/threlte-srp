<script>
  import { gameState } from "$store";
  import { useFrame } from "@threlte/core";
  import Obstacle from "./Obstacle.svelte";

  export let obstacles = [];
  export let score;
  export let dinoHeight;

  let previousTime = 0;
  let spawnCooldown = 1;

  function spawnObstacle() {
    if ($gameState === "gameOver") return;

    // Add new obstacle to list
    obstacles = [
      { component: Obstacle, id: crypto.randomUUID() },
      ...obstacles,
    ];
    // Remove any obstacles past the last 5, prevent memory leak
    obstacles = obstacles.slice(0, 5);
  }

  export function resetObstacles() {
    obstacles = [];
    spawnCooldown = 1;
  }

  useFrame((frame) => {
    // Calculate time since last frame
    let deltaTime = frame.clock.elapsedTime - previousTime;
    previousTime = frame.clock.elapsedTime;
    spawnCooldown -= deltaTime;

    if (spawnCooldown <= 0) {
      spawnCooldown = Math.random() + 0.6;
      spawnObstacle();
    }
  });
</script>

{#each obstacles as obstacle (obstacle.id)}
  <svelte:component
    this={obstacle.component}
    {previousTime}
    {dinoHeight}
    bind:score
  />
{/each}
