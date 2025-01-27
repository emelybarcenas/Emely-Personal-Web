import { useEffect } from "react";
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

function ThreeScene({ modelname }) {
  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Aspect ratio will be updated dynamically

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const container = document.getElementById("container3D");

    if (container && !container.contains(renderer.domElement)) {
      container.appendChild(renderer.domElement); // Append only if not already added
    }

    let object = null;

    // Load the 3D model
    const loader = new GLTFLoader();
    loader.load(
      `/models/${modelname}.gltf`,
      function (gltf) {
        object = gltf.scene;
        scene.add(object);
        object.scale.set(30, 30, 30); // Scale the object

        // Calculate bounding box to get model size
        const boundingBox = new THREE.Box3().setFromObject(object);
        const size = boundingBox.getSize(new THREE.Vector3());

        // Set camera position and renderer size based on model size
        const modelWidth = size.x;
        const modelHeight = size.y;

        // Adjust camera position and aspect ratio
        camera.position.z = Math.max(modelWidth, modelHeight, size.z) * 1.5;
        camera.aspect = modelWidth / modelHeight; // Set aspect ratio based on model size
        camera.updateProjectionMatrix();

        // Set the renderer size based on model's size
        renderer.setSize(modelWidth, modelHeight); // Canvas size fits the model exactly
        container.style.width = `${modelWidth}px`;
        container.style.height = `${modelHeight}px`;

      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      function (error) {
        console.error("Error loading model:", error);
      }
    );

    // Set up lights
    const topLight = new THREE.DirectionalLight(0xffffff, 2);
    topLight.position.set(500, 500, 500);
    scene.add(topLight);

    const ambientLight = new THREE.AmbientLight(0x333333, 2);
    scene.add(ambientLight);

    // Set up orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
    controls.enablePan = false;
    controls.mouseButtons = {
      LEFT: THREE.MOUSE.LEFT,
      MIDDLE: THREE.MOUSE.MIDDLE,
      RIGHT: null,
    };

    // Raycasting to detect mouse hover
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const onMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      raycaster.setFromCamera(mouse, camera);

      if (object) {
        const intersects = raycaster.intersectObject(object, true);

        if (intersects.length > 0) {
          object.rotation.y += 0.01; // Rotate the object continuously
        }
      }

      // Render the scene
      renderer.render(scene, camera);
    };

    // Window resize handling
    const resizeHandler = () => {
      renderer.setSize(modelWidth, modelHeight); // Ensure the canvas keeps the same size as the model
    };
    window.addEventListener("resize", resizeHandler);

    // Start animation
    animate();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("mousemove", onMouseMove);
      renderer.dispose(); // Dispose the renderer
      if (container) {
        container.removeChild(renderer.domElement); // Remove the canvas
      }
    };
  }, [modelname]); // Re-run only if modelname changes

  return <div id="container3D" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}></div>;
}

export default ThreeScene;
