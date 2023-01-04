<script>
  import { Canvas, T } from "@threlte/core";

  let turnX = 0;
  let turnY = 0;

  function turnCube(event) {
    if (event.key === "s") {
      turnX += 0.1;
    }
    if (event.key === "w") {
      turnX -= 0.1;
    }
    if (event.key === "d") {
      turnY += 0.1;
    }
    if (event.key === "a") {
      turnY -= 0.1;
    }
  }
</script>

<svelte:window on:keydown={turnCube} />
<Canvas>
  <!-- Camera -->
  <T.PerspectiveCamera
    makeDefault
    fov={75}
    near={0.1}
    far={1000}
    position.z={5}
  />

  <!-- Lights -->
  <T.DirectionalLight castShadow position={[3, 10, 10]} />
  <T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
  <T.AmbientLight intensity={0.2} />

  <!-- Cube -->
  <T.Mesh rotation={[turnX, turnY, 0]}>
    <T.BoxGeometry args={[1, 1, 1]} />
    <T.MeshStandardMaterial color="#00ff00" />
  </T.Mesh>
</Canvas>
