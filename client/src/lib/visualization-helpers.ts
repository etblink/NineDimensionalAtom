import * as THREE from 'three';

export function createTorus(): THREE.Mesh {
  const geometry = new THREE.TorusGeometry(2, 0.5, 32, 100);
  const material = new THREE.MeshPhongMaterial({ 
    color: 0x6366f1,
    wireframe: false,
    transparent: true,
    opacity: 0.9,
  });
  return new THREE.Mesh(geometry, material);
}

export function animateTorus(torus: THREE.Mesh): void {
  torus.rotation.x += 0.001;
  torus.rotation.y += 0.002;
}