'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Eye, Compass, RefreshCw } from 'lucide-react';

interface HeroSplineSceneProps {
  onOpenConsultation?: () => void;
}

export const HeroSplineScene: React.FC<HeroSplineSceneProps> = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Main Revolving Group
    const centerGroup = new THREE.Group();
    scene.add(centerGroup);

    // Warm Studio PBR Materials
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x8C735B,
      metalness: 0.85,
      roughness: 0.15,
    });

    const crystalMat = new THREE.MeshStandardMaterial({
      color: 0xD6BFA8,
      metalness: 0.7,
      roughness: 0.1,
      flatShading: true,
    });

    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x111111,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });

    const metallicDeviceMat = new THREE.MeshStandardMaterial({
      color: 0x111111,
      metalness: 0.8,
      roughness: 0.2,
    });

    // =========================================================================
    // CENTRAL REVOLVING 3D CORE COMPASS CRYSTAL (AS REQUESTED BY USER)
    // =========================================================================
    const coreGroup = new THREE.Group();

    // 1. Primary Outer Revolving Metallic Ring
    const outerRingGeo = new THREE.TorusGeometry(1.8, 0.08, 32, 100);
    const outerRing = new THREE.Mesh(outerRingGeo, ringMat);
    coreGroup.add(outerRing);

    // 2. Secondary Inner Revolving Ring (Angled Axis)
    const innerRingGeo = new THREE.TorusGeometry(1.4, 0.05, 32, 100);
    const innerRing = new THREE.Mesh(innerRingGeo, ringMat);
    innerRing.rotation.x = Math.PI / 3;
    coreGroup.add(innerRing);

    // 3. Central 3D Faceted Octahedron Crystal Core
    const crystalGeo = new THREE.OctahedronGeometry(1.05, 0);
    const crystal = new THREE.Mesh(crystalGeo, crystalMat);
    coreGroup.add(crystal);

    // 4. Inner Wireframe Core Sphere
    const innerWireGeo = new THREE.IcosahedronGeometry(0.7, 1);
    const innerWire = new THREE.Mesh(innerWireGeo, wireMat);
    coreGroup.add(innerWire);

    centerGroup.add(coreGroup);

    // =========================================================================
    // ORBITING 3D SATELLITES (PC MONITOR, LAPTOP & SMARTPHONE, CREATOR CAMERA)
    // =========================================================================
    const orbitGroup = new THREE.Group();

    // Satellite 1: 3D iMac PC Monitor (Web Dev)
    const pcGroup = new THREE.Group();
    pcGroup.position.set(-2.8, 0.6, 0.5);

    const pcScreenGeo = new THREE.BoxGeometry(0.9, 0.6, 0.04);
    const pcScreen = new THREE.Mesh(pcScreenGeo, metallicDeviceMat);
    pcGroup.add(pcScreen);

    const pcStandGeo = new THREE.CylinderGeometry(0.06, 0.15, 0.3, 16);
    const pcStand = new THREE.Mesh(pcStandGeo, ringMat);
    pcStand.position.set(0, -0.3, 0);
    pcGroup.add(pcStand);

    orbitGroup.add(pcGroup);

    // Satellite 2: 3D Laptop + Phone (App Dev)
    const appGroup = new THREE.Group();
    appGroup.position.set(2.8, -0.6, 0.5);

    const lapGeo = new THREE.BoxGeometry(0.8, 0.03, 0.5);
    const lap = new THREE.Mesh(lapGeo, metallicDeviceMat);
    appGroup.add(lap);

    const phoneGeo = new THREE.BoxGeometry(0.2, 0.4, 0.03);
    const phone = new THREE.Mesh(phoneGeo, ringMat);
    phone.position.set(0.6, 0.1, 0.2);
    appGroup.add(phone);

    orbitGroup.add(appGroup);

    // Satellite 3: 3D Studio Ring Light (Social Media & Ads)
    const studioGroup = new THREE.Group();
    studioGroup.position.set(0, 2.4, -0.8);

    const studioRingGeo = new THREE.TorusGeometry(0.5, 0.05, 16, 32);
    const studioRing = new THREE.Mesh(studioRingGeo, crystalMat);
    studioGroup.add(studioRing);

    orbitGroup.add(studioGroup);

    centerGroup.add(orbitGroup);

    // =========================================================================
    // LIGHTING & AMBIENT STUDIO SHADOWS
    // =========================================================================
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.2);
    scene.add(ambientLight);

    const mainDirLight = new THREE.DirectionalLight(0xD6BFA8, 2.5);
    mainDirLight.position.set(6, 8, 6);
    scene.add(mainDirLight);

    const fillLight = new THREE.DirectionalLight(0xFFFFFF, 1.0);
    fillLight.position.set(-6, -4, -2);
    scene.add(fillLight);

    const pointLight = new THREE.PointLight(0xD6BFA8, 2, 10);
    pointLight.position.set(0, 0, 3);
    scene.add(pointLight);

    // Mouse Parallax Damping Physics
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Continuous Revolving Animation Loop (60 FPS)
    let animationFrameId: number;
    const animate = () => {
      const time = Date.now() * 0.0015;

      // 1. Revolve central 3D Core compass & crystal on multiple axes
      crystal.rotation.y += 0.015;
      crystal.rotation.x += 0.008;

      outerRing.rotation.z += 0.01;
      outerRing.rotation.y += 0.005;

      innerRing.rotation.x += 0.012;
      innerRing.rotation.y -= 0.008;

      innerWire.rotation.y -= 0.01;

      // 2. Revolve Orbiting Satellites around the core
      orbitGroup.rotation.y = time * 0.4;
      orbitGroup.rotation.z = Math.sin(time * 0.3) * 0.1;

      // 3. Gentle float of the entire group
      centerGroup.position.y = Math.sin(time * 1.5) * 0.15;

      // 4. Smooth Mouse Parallax camera tilt
      centerGroup.rotation.y += (mouseX * 0.4 - centerGroup.rotation.y) * 0.05;
      centerGroup.rotation.x += (-mouseY * 0.2 - centerGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      outerRingGeo.dispose();
      innerRingGeo.dispose();
      crystalGeo.dispose();
      innerWireGeo.dispose();
      ringMat.dispose();
      crystalMat.dispose();
      wireMat.dispose();
      metallicDeviceMat.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[580px] lg:h-[640px] rounded-[32px] bg-gradient-to-b from-[#EFE8DE]/60 via-[#F7F3EC] to-[#EFE8DE]/40 border border-[#111111]/[0.08] shadow-studio-lg overflow-hidden flex flex-col justify-between p-4 group">
      {/* Top Badge Overlay */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] text-[#F7F3EC] text-xs font-extrabold shadow-md">
          <RefreshCw className="w-3.5 h-3.5 text-[#D6BFA8] animate-spin" style={{ animationDuration: '6s' }} />
          <span>Revolving 3D CORE Engine</span>
        </div>
        <div className="flex items-center gap-1.5 bg-[#EFE8DE] px-3 py-1 rounded-full text-xs font-bold text-[#111111] border border-[#111111]/10">
          <Eye className="w-3.5 h-3.5 text-[#8C735B]" />
          <span>60 FPS Live WebGL</span>
        </div>
      </div>

      {/* WebGL 3D Canvas Mount Point */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Bottom Floating Control Bar */}
      <div className="relative z-10 flex items-center justify-between bg-[#111111]/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 text-white text-xs font-semibold shadow-xl">
        <div className="flex items-center gap-3">
          <span className="text-[#D6BFA8] font-bold flex items-center gap-1">
            <Compass className="w-4 h-4 text-[#D6BFA8] animate-pulse" /> 3D CORE Model Active:
          </span>
          <span className="text-white/80">Revolving Metallic Rings &amp; Faceted Crystal Core</span>
        </div>
        <div className="text-[10px] text-[#D6BFA8] font-mono">Move mouse for 3D tilt</div>
      </div>
    </div>
  );
};
