import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const RotatingGlobe = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true , alpha: true});
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    //renderer.setClearColor(0x000000, 0); // Set background to transparent
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('/globe.jpg');
    const material = new THREE.MeshStandardMaterial({map: texture});
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

     // Add lighting
     const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
     scene.add(ambientLight);
 
     const pointLight = new THREE.PointLight(0xffffff, 0.8);
     pointLight.position.set(10, 10, 10);
     scene.add(pointLight);

    camera.position.z = 12;

    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.01; // Adjust the rotation speed as needed
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '600px' }} />;
};

export default RotatingGlobe;