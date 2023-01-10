<script>
  import { T } from "@threlte/core";
  import { useFrame, OrbitControls } from "@threlte/core";
  import { GLTF } from "@threlte/extras";
  import { degToRad } from "three/src/math/MathUtils";

  let previousTime = 0;

  let turn = 0.5;

  function turnCube(deltaTime) {
    turn += 0.5 * deltaTime;
  }

  useFrame((frame) => {
    // Calculate time since last frame
    let deltaTime = frame.clock.elapsedTime - previousTime;
    previousTime = frame.clock.elapsedTime;

    turnCube(deltaTime);
  });
</script>

<!-- Camera -->
<T.PerspectiveCamera makeDefault position={[10, 10, 10]} fov={24}>
  <OrbitControls
    maxPolarAngle={degToRad(80)}
    enableZoom={false}
    target={{ y: 0.5 }}
  />
</T.PerspectiveCamera>

<!-- Lights -->
<T.DirectionalLight castShadow position={[3, 10, 10]} />
<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
<T.AmbientLight intensity={0.2} />

<!-- Model -->
<GLTF
  url="/models/machine_casing_old.gltf"
  rotation={{ x: turn, y: turn, z: 0 }}
  position={{ y: 1 }}
  castShadow
/>

<!-- Floor -->
<T.Mesh receiveShadow rotation.x={degToRad(-90)}>
  <T.CircleGeometry args={[2, 72]} />
  <T.MeshStandardMaterial color="white" />
</T.Mesh>
