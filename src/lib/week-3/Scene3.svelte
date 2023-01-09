<script>
  import { T } from "@threlte/core";
  import { useFrame, InteractiveObject } from "@threlte/core";
  import { useCursor } from "@threlte/extras";

  let previousTime = 0;

  let cubeColor = "#0000ff";

  let turnX = 0.5;
  let turnY = 0.5;
  let keysPressed = [];

  const { onPointerEnter, onPointerLeave } = useCursor();

  function changeColor() {
    const hue = Math.trunc(Math.random() * 360);
    cubeColor = `hsl(${hue},100%,50%)`;
  }

  function turnCube(deltaTime) {
    const turnSpeed = 3;
    if (keysPressed.includes("s")) {
      turnX += turnSpeed * deltaTime;
    }
    if (keysPressed.includes("w")) {
      turnX -= turnSpeed * deltaTime;
    }
    if (keysPressed.includes("d")) {
      turnY += turnSpeed * deltaTime;
    }
    if (keysPressed.includes("a")) {
      turnY -= turnSpeed * deltaTime;
    }
  }

  function addKeyToList(event) {
    const key = event.key;
    if (["s", "w", "d", "a"].includes(key) && !keysPressed.includes(key)) {
      keysPressed = [...keysPressed, key];
    }
  }

  function removeKeyFromList(event) {
    const key = event.key;
    if (["s", "w", "d", "a"].includes(key) && keysPressed.includes(key)) {
      keysPressed = keysPressed.filter((pressed) => pressed !== key);
    }
  }

  useFrame((frame) => {
    // Calculate time since last frame
    let deltaTime = frame.clock.elapsedTime - previousTime;
    previousTime = frame.clock.elapsedTime;

    turnCube(deltaTime);
  });
</script>

<svelte:body on:keydown={addKeyToList} on:keyup={removeKeyFromList} />
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
<T.Mesh rotation={[turnX, turnY, 0]} let:ref>
  <InteractiveObject
    object={ref}
    interactive
    on:click={changeColor}
    on:pointerenter={onPointerEnter}
    on:pointerleave={onPointerLeave}
  />
  <T.BoxGeometry args={[1, 1, 1]} />
  <T.MeshStandardMaterial color={cubeColor} />
</T.Mesh>
