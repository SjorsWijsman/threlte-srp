<script>
  import { Canvas, T } from "@threlte/core";

  let turn = 0;

  function animate() {
    turn += 0.01;
    requestAnimationFrame(animate);
  }
  animate();
</script>

<Canvas>
  <!-- Camera -->
  <T.PerspectiveCamera fov={75} near={0.1} far={1000} position={[0, 0, 5]} />

  <!-- Lights -->
  <T.DirectionalLight castShadow position={[3, 10, 10]} />
  <T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
  <T.AmbientLight intensity={0.2} />

  <!-- Cube -->
  <T.Mesh rotation={[turn, turn, 0]}>
    <T.BoxGeometry args={[1, 1, 1]} />
    <T.MeshStandardMaterial color="#00ff00" />
  </T.Mesh>
</Canvas>
