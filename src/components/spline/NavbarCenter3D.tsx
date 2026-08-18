'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export const NavbarCenter3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(48, 48);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3D Metallic Compass Geometry (Center Octahedron + Ring)
    const group = new THREE.Group();

    // Outer 3D Ring
    const ringGeo = new THREE.TorusGeometry(1.1, 0.08, 16, 64);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x8C735B,
      metalness: 0.8,
      roughness: 0.2,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    group.add(ring);

    // Inner 3D Crystal / Compass Core
    const crystalGeo = new THREE.OctahedronGeometry(0.7, 0);
    const crystalMat = new THREE.MeshStandardMaterial({
      color: 0xD6BFA8,
      metalness: 0.6,
      roughness: 0.1,
      wireframe: false,
    });
    const crystal = new THREE.Mesh(crystalGeo, crystalMat);
    group.add(crystal);

    // Internal 3D Wireframe Core
    const innerWireGeo = new THREE.IcosahedronGeometry(0.4, 1);
    const innerWireMat = new THREE.MeshBasicMaterial({
      color: 0x111111,
      wireframe: true,
    });
    const innerWire = new THREE.Mesh(innerWireGeo, innerWireMat);
    group.add(innerWire);

    scene.add(group);

    // Warm Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xD6BFA8, 2);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xFFFFFF, 1);
    dirLight2.position.set(-5, -5, -2);
    scene.add(dirLight2);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      group.rotation.y += 0.015;
      group.rotation.x += 0.008;
      group.position.y = Math.sin(Date.now() * 0.002) * 0.08;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      ringGeo.dispose();
      crystalGeo.dispose();
      innerWireGeo.dispose();
      ringMat.dispose();
      crystalMat.dispose();
      innerWireMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-12 h-12 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 relative group"
      title="Navigate Skill — Live 3D Core"
    >
      <div className="absolute inset-0 rounded-full bg-[#D6BFA8]/20 blur-sm pointer-events-none group-hover:bg-[#D6BFA8]/40 transition-colors" />
    </div>
  );
};
