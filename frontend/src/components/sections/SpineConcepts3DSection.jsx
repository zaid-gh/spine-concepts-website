import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const SpineConcepts3DSection = () => {
  const containerRef = useRef(null);
  const meshRef = useRef(null);
  const cameraRef = useRef(null);
  const frameIdRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || container.offsetWidth * 0.6;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050608);

    // Camera
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0.6, 0.9, 2.8);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xffffff, 0.9);
    keyLight.position.set(3, 4, 2);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x66ccff, 0.6);
    rimLight.position.set(-3, 2, -2);
    scene.add(rimLight);

    const bottomFill = new THREE.DirectionalLight(0x444444, 0.4);
    bottomFill.position.set(0, -3, 2);
    scene.add(bottomFill);

    // Load GLB model
    const loader = new GLTFLoader();

    loader.load(
      "/assets/models/anchor.glb",
      (gltf) => {
        const model = gltf.scene;

        // Ajustes de escala / posición / rotación
        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = false;
            child.receiveShadow = false;
            // Material
            if (child.material && !Array.isArray(child.material)) {
              child.material.metalness = 0.5;
              child.material.roughness = 0.25;
            }
          }
        });

        model.scale.set(0.2, 0.2, 0.2);
        model.position.set(0, 0, 0);
        model.rotation.x = 0.4;
        model.rotation.y = 0.5;

        scene.add(model);
        meshRef.current = model;
      },
      undefined,
      (error) => {
        console.error("Error loading anchor.glb:", error);
      }
    );

    // Animation loop
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);

      if (meshRef.current) {
        meshRef.current.rotation.y += 0.003;
        meshRef.current.rotation.x += 0.0007;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      if (!container || !rendererRef.current || !cameraRef.current) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || newWidth * 0.6;

      rendererRef.current.setSize(newWidth, newHeight);
      cameraRef.current.aspect = newWidth / newHeight;
      cameraRef.current.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(frameIdRef.current);
      window.removeEventListener("resize", handleResize);

      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (rendererRef.current.domElement.parentNode) {
          rendererRef.current.domElement.parentNode.removeChild(
            rendererRef.current.domElement
          );
        }
      }

      // Limpieza del modelo
      if (meshRef.current) {
        scene.remove(meshRef.current);
        meshRef.current.traverse((child) => {
          if (child.isMesh) {
            if (child.geometry) child.geometry.dispose();
            if (child.material) {
              if (Array.isArray(child.material)) {
                child.material.forEach((m) => m.dispose && m.dispose());
              } else if (child.material.dispose) {
                child.material.dispose();
              }
            }
          }
        });
      }
    };
  }, []);

  //  Handlers para cambiar perspectiva
  const handleFrontView = () => {
    if (!cameraRef.current || !meshRef.current) return;
    cameraRef.current.position.set(0, 0.7, 3);
    cameraRef.current.lookAt(meshRef.current.position);
  };

  const handleAngledView = () => {
    if (!cameraRef.current || !meshRef.current) return;
    cameraRef.current.position.set(1.6, 1.2, 2.2);
    cameraRef.current.lookAt(meshRef.current.position);
  };

  return (
    <section className="w-full bg-black py-16 lg:py-20">
      <div className="max-w-screen-2xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
        {/* Canvas 3D */}
        <div
          ref={containerRef}
          className="
            w-full lg:w-2/3
            aspect-[16/9]
            rounded-3xl
            overflow-hidden
            bg-gradient-to-br from-neutral-900 via-black to-neutral-950
            border border-neutral-800/60
            shadow-[0_0_60px_rgba(0,0,0,0.7)]
          "
        />

        {/* Texto + botones */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4 text-neutral-100">
          <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-400">
            Interactive preview
          </p>
          <h2 className="text-2xl lg:text-3xl font-semibold">
            Subtle 3D interaction for spine systems
          </h2>
          <p className="text-sm lg:text-base text-neutral-300">
            A lightweight 3D experiment to highlight how implant and instrument
            geometries can be explored interactively—rotated, inspected, and
            adapted to each case.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="button"
              onClick={handleFrontView}
              className="
                px-4 py-2 rounded-full text-xs lg:text-sm
                border border-neutral-600
                bg-neutral-900/60
                hover:bg-neutral-800 hover:border-neutral-400
                transition
              "
            >
              Frontal view
            </button>
            <button
              type="button"
              onClick={handleAngledView}
              className="
                px-4 py-2 rounded-full text-xs lg:text-sm
                border border-custom-logo-aqua/70
                bg-custom-logo-aqua/10
                text-custom-logo-aqua
                hover:bg-custom-logo-aqua/20
                transition
              "
            >
              Angled perspective
            </button>
          </div>

          <p className="text-[11px] text-neutral-500 pt-2">
            This is a provisional demo — the final experience can be linked to
            real implant or instrument geometries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpineConcepts3DSection;
