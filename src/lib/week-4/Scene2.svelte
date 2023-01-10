<script>
  import { T } from "@threlte/core";
  import { useFrame, OrbitControls } from "@threlte/core";
  import { GLTF } from "@threlte/extras";

  import { degToRad } from "three/src/math/MathUtils";

  import { tweened } from "svelte/motion";
  import { quadInOut } from "svelte/easing";

  let previousTime = 0;

  let turn = 0.5;
  let float = tweened(0, { duration: 3000, easing: quadInOut });

  async function floatCube() {
    await float.set(1);
    await float.set(0);
    floatCube();
  }
  floatCube();

  function turnCube(deltaTime) {
    turn += 0.3 * deltaTime;
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
<T.DirectionalLight position={[3, 10, 10]} castShadow />
<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
<T.AmbientLight intensity={0.2} />

<!-- Model -->
<GLTF
  url="/models/machine_casing.gltf"
  position={{ y: 1 + $float }}
  rotation={{ x: turn, y: turn, z: 0 }}
  castShadow
/>

<!-- Floor -->
<T.Mesh receiveShadow rotation.x={degToRad(-90)}>
  <T.CircleGeometry args={[2, 72]} />
  <T.MeshStandardMaterial color="white" />
</T.Mesh>
