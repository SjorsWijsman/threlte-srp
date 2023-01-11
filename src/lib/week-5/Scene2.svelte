<script>
  import { T, OrbitControls } from "@threlte/core";

  import Dino from "./Scene2-components/Dino.svelte";
  import Obstacles from "./Scene2-components/Obstacles.svelte";

  let dino;
</script>

<!-- Camera -->
<T.PerspectiveCamera makeDefault position={[16, 11, 12]} near={1} far={10000}>
  <OrbitControls
    target={dino?.position}
    enableZoom={true}
    minDistance={8}
    maxDistance={25}
    maxPolarAngle={1.5}
  />
</T.PerspectiveCamera>

<!-- Lights -->
<T.DirectionalLight position={[3, 10, 10]} castShadow />
<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
<T.AmbientLight intensity={0.2} />

<!-- Game Objects -->
<Dino bind:dino />
<Obstacles />

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
