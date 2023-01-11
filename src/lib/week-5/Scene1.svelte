<script>
  import { T, OrbitControls } from "@threlte/core";

  let dino;
</script>

<!-- Camera -->
<T.PerspectiveCamera makeDefault position={[5, 10, 7]}>
  <OrbitControls
    target={dino?.position}
    enableZoom={true}
    minDistance={8}
    maxDistance={20}
    maxPolarAngle={1.5}
  />
</T.PerspectiveCamera>

<!-- Lights -->
<T.DirectionalLight position={[3, 10, 10]} castShadow />
<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
<T.AmbientLight intensity={0.2} />

<!-- Dino -->
<T.Mesh bind:ref={dino} castShadow>
  <T.BoxGeometry args={[1, 2, 1]} />
  <T.MeshStandardMaterial color="#ff2200" />
</T.Mesh>

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
