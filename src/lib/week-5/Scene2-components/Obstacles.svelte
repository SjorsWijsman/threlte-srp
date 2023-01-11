<script>
  import { useFrame } from "@threlte/core";
  import Obstacle from "./Obstacle.svelte";

  export let obstacles = [];

  let previousTime = 0;
  let spawnCooldown = 1;

  function spawnObstacle() {
    // Add new obstacle to list
    obstacles = [
      { component: Obstacle, id: crypto.randomUUID() },
      ...obstacles,
    ];
    // Remove any obstacles past the last 5, preserves memory
    obstacles = obstacles.slice(0, 5);
  }

  useFrame((frame) => {
    // Calculate time since last frame
    let deltaTime = frame.clock.elapsedTime - previousTime;
    previousTime = frame.clock.elapsedTime;
    spawnCooldown -= deltaTime;

    if (spawnCooldown <= 0) {
      spawnCooldown = Math.random() + 0.8;
      spawnObstacle();
    }
  });
</script>

{#each obstacles as obstacle (obstacle.id)}
  <svelte:component this={obstacle.component} {previousTime} />
{/each}
