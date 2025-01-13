import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

function ThreeScene({ modelname }) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("container3D").appendChild(renderer.domElement);

  let object = null;

  // Load the 3D model
  const loader = new GLTFLoader();
  loader.load(
    `/models/${modelname}.gltf`,
    function (gltf) {
      object = gltf.scene;
      scene.add(object);
      object.scale.set(30, 30, 30); // Scale the object

      // Set the object position and ensure it's within view
      object.position.set(0, 0, 0);
      
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.error("Error loading model:", error);
    }
  );

  // Lights for the scene
  const topLight = new THREE.DirectionalLight(0xffffff, 2);
  topLight.position.set(500, 500, 500);
  scene.add(topLight);

  const ambientLight = new THREE.AmbientLight(0x333333, 2);
  scene.add(ambientLight);

  // Orbit controls (to move the camera)
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableZoom = false; // Disable zoom
  controls.enablePan = false;

  controls.mouseButtons = {
    LEFT: THREE.MOUSE.LEFT, // Left-click for orbit
    MIDDLE: THREE.MOUSE.MIDDLE, // Middle-click for zoom
    RIGHT: null, // Disable right-click
  };

  camera.position.z = 10;

  // Raycasting to detect mouse hover over the object
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  // This function updates mouse position based on mousemove
  const onMouseMove = (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  window.addEventListener("mousemove", onMouseMove);

  // Function to animate and rotate the object when hovered
  function animate() {
    requestAnimationFrame(animate);

    // Update raycaster with the latest mouse position
    raycaster.setFromCamera(mouse, camera);

    if (object) {
      // Check if the raycaster intersects the object
      const intersects = raycaster.intersectObject(object, true);

      if (intersects.length > 0) {
        object.rotation.y += 0.01; // Rotate the object continuously
      }
    }

    // Render the scene
    renderer.render(scene, camera);
  }

  // Window resize handling
  window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Start the animation loop
  animate();
}

export default ThreeScene;
