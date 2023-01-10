<script>
  import { T, useTexture } from "@threlte/core";
  import { useFrame, OrbitControls, AudioListener, Audio } from "@threlte/core";
  import { GLTF, useCursor } from "@threlte/extras";

  import { degToRad } from "three/src/math/MathUtils";
  import * as THREE from "three";

  import { tweened } from "svelte/motion";
  import { quadInOut } from "svelte/easing";

  let previousTime = 0;

  let turn = 0.5;
  let float = tweened(0, { duration: 3000, easing: quadInOut });

  const texture = useTexture("textures/brass_floor.png");
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.x = 3;
  texture.repeat.y = 3;
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;

  let playAudio;
  let stopAudio;

  const { onPointerEnter, onPointerLeave } = useCursor();

  async function floatCube() {
    await float.set(1);
    await float.set(0);
    floatCube();
  }
  floatCube();

  function turnCube(deltaTime) {
    turn += 0.3 * deltaTime;
  }

  function playSound() {
    stopAudio();
    playAudio();
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
  <AudioListener />
</T.PerspectiveCamera>

<!-- Audio -->
<Audio source={"audio/ding.mp3"} bind:play={playAudio} bind:stop={stopAudio} />

<!-- Lights -->
<T.DirectionalLight position={[3, 10, 10]} castShadow />
<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
<T.AmbientLight intensity={0.2} />

<!-- Model -->
<GLTF
  url="models/machine_casing.gltf"
  position={{ y: 1 + $float }}
  rotation={{ x: turn, y: turn, z: 0 }}
  castShadow
  interactive
  on:click={playSound}
  on:pointerenter={onPointerEnter}
  on:pointerleave={onPointerLeave}
/>
<!-- Floor Texture -->
<T.Mesh receiveShadow rotation.x={degToRad(-90)} position={[0, 0.011, 0]}>
  <T.CircleGeometry args={[1.5, 72]} />
  <T.MeshStandardMaterial map={texture} />
</T.Mesh>

<!-- Floor Circle -->
<T.Mesh receiveShadow>
  <T.CylinderGeometry args={[1.6, 1.6, 0.01, 72]} />
  <T.MeshStandardMaterial color={"#070709"} />
</T.Mesh>

<!-- Floor Platform -->
<T.Mesh receiveShadow position={[0, -0.1, 0]}>
  <T.CylinderGeometry args={[2, 2, 0.2, 72]} />
  <T.MeshStandardMaterial color={"#0a0a0e"} />
</T.Mesh>
