<script>
  import { T, useFrame } from "@threlte/core";
  import { onMount, onDestroy } from "svelte";
  import { tweened } from "svelte/motion";

  export let previousTime = 0;

  const opacity = tweened(0, { duration: 300 });

  let distance = -50;

  function moveObstacle(deltaTime) {
    distance += deltaTime * 15;

    if (distance > 0) opacity.set(0);
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

<T.Mesh position={[0, 0.3, distance]} castShadow>
  <T.BoxGeometry args={[1, 2.5, 1]} />
  <T.MeshStandardMaterial
    color="#008000"
    opacity={$opacity}
    transparent="true"
  />
</T.Mesh>
