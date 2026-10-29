import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreePageCurlProps {
  isFlipping: boolean;
  direction: 'forward' | 'backward' | null;
  onFlipComplete: () => void;
  currentPage: number;
  targetPage: number;
}

export const ThreePageCurl: React.FC<ThreePageCurlProps> = ({
  isFlipping,
  direction,
  onFlipComplete,
  currentPage,
  targetPage,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const animStateRef = useRef<{
    progress: number;
    startTime: number | null;
    active: boolean;
  }>({
    progress: 0,
    startTime: null,
    active: false,
  });

  // Keep callback fresh in ref
  const onCompleteRef = useRef(onFlipComplete);
  onCompleteRef.current = onFlipComplete;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Camera setup
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(38, width / height, 1, 3000);
    camera.position.set(0, -20, 1100);
    camera.lookAt(0, 0, 0);

    // 2. High-performance WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 3. Realistic Dynamic Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const deskLight = new THREE.DirectionalLight(0xffffff, 1.2);
    deskLight.position.set(0, 400, 600);
    deskLight.castShadow = true;
    deskLight.shadow.mapSize.width = 1024;
    deskLight.shadow.mapSize.height = 1024;
    scene.add(deskLight);

    const sideRimLight = new THREE.DirectionalLight(0xdcdcdc, 0.6);
    sideRimLight.position.set(-500, 200, 300);
    scene.add(sideRimLight);

    // 4. Ambient Floating Archival Dust / Paper Particles in 3D
    const particleCount = 75;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 1200;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 800;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 400 + 100;
      particleVelocities.push({
        x: (Math.random() - 0.5) * 0.2,
        y: Math.random() * 0.25 + 0.1,
        z: (Math.random() - 0.5) * 0.15,
      });
    }

    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xcccccc,
      size: 2.2,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 5. Build Procedural Stark Black & White Textures for the Turning Page
    const createPageTexture = (
      pageNum: number,
      title: string,
      isReverse: boolean = false
    ) => {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 1440;
      const ctx = canvas.getContext('2d');
      if (!ctx) return new THREE.CanvasTexture(canvas);

      // Clean Archival Monochrome Paper Surface
      ctx.fillStyle = '#fafafa';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Fine Paper Grain Simulation
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
      for (let i = 0; i < 4000; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        ctx.fillRect(x, y, 1.5, 1.5);
      }

      // Outer & Inner Archival Margin Borders
      ctx.strokeStyle = '#111111';
      ctx.lineWidth = 4;
      ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);

      ctx.strokeStyle = '#333333';
      ctx.lineWidth = 1;
      ctx.strokeRect(52, 52, canvas.width - 104, canvas.height - 104);

      // Spine Gutter Shading
      const spineGutter = ctx.createLinearGradient(
        isReverse ? canvas.width : 0,
        0,
        isReverse ? canvas.width - 80 : 80,
        0
      );
      spineGutter.addColorStop(0, 'rgba(0,0,0,0.22)');
      spineGutter.addColorStop(1, 'rgba(0,0,0,0.0)');
      ctx.fillStyle = spineGutter;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Top Archival Header
      ctx.fillStyle = '#111111';
      ctx.font = '700 22px "Courier New", monospace';
      ctx.letterSpacing = '3px';
      ctx.fillText(
        'THE ARCHIVE OF A CYBERSECURITY RESEARCHER',
        70,
        90
      );

      ctx.font = '600 16px "Courier New", monospace';
      ctx.fillStyle = '#444444';
      ctx.fillText(`VOLUME 2026 • FOLIO ${String(pageNum).padStart(2, '0')}`, 70, 118);

      ctx.beginPath();
      ctx.moveTo(70, 135);
      ctx.lineTo(canvas.width - 70, 135);
      ctx.strokeStyle = '#222222';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Large Page Title
      ctx.fillStyle = '#0a0a0a';
      ctx.font = '900 44px "Cinzel", "Times New Roman", serif';
      ctx.fillText(title.toUpperCase(), 70, 210);

      // Subtle Archival Ruling Lines
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.lineWidth = 1;
      for (let y = 260; y < canvas.height - 180; y += 38) {
        ctx.beginPath();
        ctx.moveTo(70, y);
        ctx.lineTo(canvas.width - 70, y);
        ctx.stroke();
      }

      // Simulated Archival Paragraph Lines
      ctx.fillStyle = 'rgba(20, 20, 20, 0.7)';
      for (let i = 0; i < 18; i++) {
        const y = 295 + i * 48;
        const lineW = (canvas.width - 140) * (0.75 + Math.random() * 0.25);
        ctx.fillRect(70, y, lineW, 8);
      }

      // Archival Rubber Stamp
      ctx.save();
      ctx.translate(canvas.width - 240, canvas.height - 240);
      ctx.rotate(-0.08);
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 3;
      ctx.strokeRect(0, 0, 180, 75);
      ctx.font = '900 16px "Courier New", monospace';
      ctx.fillStyle = '#000000';
      ctx.fillText('★ VERIFIED ★', 25, 30);
      ctx.font = '700 11px "Courier New", monospace';
      ctx.fillText('TELEMETRY / SECURE', 18, 52);
      ctx.restore();

      // Bottom Folio Page Number
      ctx.fillStyle = '#000000';
      ctx.font = '700 24px "Courier New", monospace';
      const pageText = `— ${pageNum} —`;
      const textMetrics = ctx.measureText(pageText);
      ctx.fillText(pageText, (canvas.width - textMetrics.width) / 2, canvas.height - 75);

      const texture = new THREE.CanvasTexture(canvas);
      texture.generateMipmaps = true;
      return texture;
    };

    // 6. Geometry: Subdivided sheet anchored on spine
    const pageWidth = width * 0.485;
    const pageHeight = height * 0.92;
    const segX = 48;
    const segY = 24;

    const pageGeometry = new THREE.PlaneGeometry(
      pageWidth,
      pageHeight,
      segX,
      segY
    );
    // Pivot geometry around its spine edge (x = 0)
    pageGeometry.translate(pageWidth / 2, 0, 0);

    // Save initial undeformed vertex coordinates
    const initialPositions = new Float32Array(
      pageGeometry.attributes.position.array
    );

    // Materials: Front & Back
    const frontTex = createPageTexture(currentPage, 'ARCHIVE FOLIO', false);
    const backTex = createPageTexture(targetPage, 'ARCHIVE FOLIO', true);

    const frontMaterial = new THREE.MeshStandardMaterial({
      map: frontTex,
      roughness: 0.85,
      metalness: 0.05,
      side: THREE.FrontSide,
    });

    const backMaterial = new THREE.MeshStandardMaterial({
      map: backTex,
      roughness: 0.85,
      metalness: 0.05,
      side: THREE.BackSide,
    });

    // Page mesh group
    const pageGroup = new THREE.Group();
    pageGroup.position.set(0, 0, 5);

    const frontMesh = new THREE.Mesh(pageGeometry, frontMaterial);
    frontMesh.castShadow = true;
    frontMesh.receiveShadow = true;
    pageGroup.add(frontMesh);

    const backMesh = new THREE.Mesh(pageGeometry, backMaterial);
    backMesh.castShadow = true;
    backMesh.receiveShadow = true;
    pageGroup.add(backMesh);

    scene.add(pageGroup);

    // Underlying Dynamic Spine Shadow Mesh
    const shadowGeo = new THREE.PlaneGeometry(pageWidth * 1.05, pageHeight, 16, 8);
    shadowGeo.translate(pageWidth * 0.52, 0, 0);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.0,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.position.set(0, 0, 1);
    scene.add(shadowMesh);

    // Set initial visibility
    pageGroup.visible = false;
    shadowMesh.visible = false;

    // 7. Resize Observer
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // 8. Main Render & Physics Curl Animation Loop
    let animationFrameId: number;
    const duration = 720; // ms for high-precision tactile flip

    const animate = (timestamp: number) => {
      animationFrameId = requestAnimationFrame(animate);

      // Animate ambient dust motes
      const positions = particleGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        positions[idx] += particleVelocities[i].x;
        positions[idx + 1] += particleVelocities[i].y;
        positions[idx + 2] += particleVelocities[i].z;

        // Wrap around boundaries
        if (positions[idx + 1] > 400) positions[idx + 1] = -400;
        if (positions[idx] > 600) positions[idx] = -600;
        if (positions[idx] < -600) positions[idx] = 600;
      }
      particleGeometry.attributes.position.needsUpdate = true;

      // Check if page flip is active
      const state = animStateRef.current;
      if (state.active) {
        if (state.startTime === null) {
          state.startTime = timestamp;
        }

        const elapsed = timestamp - state.startTime;
        const rawProgress = Math.min(elapsed / duration, 1.0);

        // Smooth cubic-bezier ease in-out
        const t =
          rawProgress < 0.5
            ? 4 * rawProgress * rawProgress * rawProgress
            : 1 - Math.pow(-2 * rawProgress + 2, 3) / 2;

        state.progress = t;

        // Calculate rotation & physical cylindrical vertex deformation
        const isForward = direction === 'forward';
        const startAngle = isForward ? 0 : -Math.PI;
        const endAngle = isForward ? -Math.PI : 0;
        const currentAngle = startAngle + (endAngle - startAngle) * t;

        pageGroup.rotation.y = currentAngle;
        pageGroup.visible = true;
        shadowMesh.visible = true;

        // Dynamic Curvature Wave across vertices
        const posAttr = pageGeometry.attributes.position;
        const arr = posAttr.array as Float32Array;
        const curlPeak = Math.sin(t * Math.PI); // 0 at start, 1 at 50%, 0 at end
        const maxLift = 75; // z-displacement depth

        for (let i = 0; i < arr.length; i += 3) {
          const initX = initialPositions[i];
          const initY = initialPositions[i + 1];
          const u = initX / pageWidth; // 0 (spine) to 1 (outer edge)

          // Cylindrical paper wave + diagonal bend from bottom thumb grab
          const wave = Math.sin(u * Math.PI);
          const diagonalBias = (initY / pageHeight) * 0.35;
          const zDisp = curlPeak * maxLift * wave * (1.0 + diagonalBias);

          // Horizontal contraction due to paper bending
          const xCompression = curlPeak * 12 * Math.sin(u * Math.PI * 0.5);

          arr[i] = initX - xCompression;
          arr[i + 1] = initY;
          arr[i + 2] = zDisp;
        }
        posAttr.needsUpdate = true;
        pageGeometry.computeVertexNormals();

        // Under-page Spine Shadow modulation
        const shadowAlpha = curlPeak * 0.38;
        shadowMat.opacity = shadowAlpha;
        shadowMesh.rotation.y = isForward ? -Math.PI * 0.5 * (1 - t) : -Math.PI * 0.5 * t;

        // Completion check
        if (rawProgress >= 1.0) {
          state.active = false;
          state.startTime = null;
          state.progress = 0;
          pageGroup.visible = false;
          shadowMesh.visible = false;
          // Trigger parent page state update
          onCompleteRef.current();
        }
      }

      renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Cleanup resources on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      pageGeometry.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      frontMaterial.dispose();
      backMaterial.dispose();
      frontTex.dispose();
      backTex.dispose();
      shadowGeo.dispose();
      shadowMat.dispose();
    };
  }, [currentPage, targetPage, direction]);

  // Trigger animation when isFlipping changes to true
  useEffect(() => {
    if (isFlipping && direction) {
      animStateRef.current = {
        progress: 0,
        startTime: null,
        active: true,
      };
    }
  }, [isFlipping, direction]);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-40 overflow-hidden"
      aria-hidden="true"
    />
  );
};

