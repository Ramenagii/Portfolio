import { useEffect, useRef } from "react";

export default function HeroScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    let cleanup = () => {};
    let isMounted = true;
    let frameId;

    import("three").then((THREE) => {
      if (!isMounted) return;

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
      camera.position.set(0, 0, 5.4);

      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const group = new THREE.Group();
      scene.add(group);

      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0xd4a574,
        transparent: true,
        opacity: 0.32,
        wireframe: true,
      });
      const coreMaterial = new THREE.MeshBasicMaterial({
        color: 0x2a2a28,
        transparent: true,
        opacity: 0.72,
        wireframe: true,
      });

      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.3, 0.018, 10, 90), ringMaterial);
      const tiltedRing = new THREE.Mesh(new THREE.TorusGeometry(1.05, 0.014, 10, 80), ringMaterial);
      tiltedRing.rotation.x = Math.PI / 2.7;

      const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.52, 1), coreMaterial);
      group.add(ring, tiltedRing, core);

      const nodeGeometry = new THREE.SphereGeometry(0.035, 12, 12);
      const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xd4a574 });
      const nodes = Array.from({ length: 12 }, (_, index) => {
        const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
        const angle = (index / 12) * Math.PI * 2;
        node.position.set(Math.cos(angle) * 1.65, Math.sin(angle) * 0.66, Math.sin(angle) * 0.42);
        group.add(node);
        return node;
      });

      const resize = () => {
        const { clientWidth, clientHeight } = canvas;
        renderer.setSize(clientWidth, clientHeight, false);
        camera.aspect = clientWidth / Math.max(clientHeight, 1);
        camera.updateProjectionMatrix();
      };

      const resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(canvas);
      resize();

      const animate = () => {
        group.rotation.y += prefersReducedMotion ? 0 : 0.004;
        core.rotation.x += prefersReducedMotion ? 0 : 0.006;
        core.rotation.z += prefersReducedMotion ? 0 : 0.003;
        nodes.forEach((node, index) => {
          node.scale.setScalar(1 + Math.sin(Date.now() * 0.0016 + index) * 0.18);
        });
        renderer.render(scene, camera);
        frameId = window.requestAnimationFrame(animate);
      };

      animate();

      cleanup = () => {
        window.cancelAnimationFrame(frameId);
        resizeObserver.disconnect();
        nodeGeometry.dispose();
        nodeMaterial.dispose();
        ring.geometry.dispose();
        tiltedRing.geometry.dispose();
        core.geometry.dispose();
        ringMaterial.dispose();
        coreMaterial.dispose();
        renderer.dispose();
      };
    });

    return () => {
      isMounted = false;
      cleanup();
    };
  }, []);

  return (
    <div className="hero-scene" aria-label="Animated 3D interface motif">
      <canvas ref={canvasRef} />
    </div>
  );
}
