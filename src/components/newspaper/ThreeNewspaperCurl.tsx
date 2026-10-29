import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeNewspaperCurlProps {
  isFlipping: boolean;
  direction: 'forward' | 'backward' | null;
  onFlipComplete: () => void;
  currentSpread: number;
  targetSpread: number;
}

export const ThreeNewspaperCurl: React.FC<ThreeNewspaperCurlProps> = ({
  isFlipping,
  direction,
  onFlipComplete,
  currentSpread,
  targetSpread,
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

  const onCompleteRef = useRef(onFlipComplete);
  onCompleteRef.current = onFlipComplete;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Perspective Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, width / height, 1, 3500);
    camera.position.set(0, -15, 1150);
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

    // 3. Editorial Lighting (Soft Overhead Desk Lamp)
    const ambientLight = new THREE.AmbientLight(0xfff7ea, 0.9);
    scene.add(ambientLight);

    const deskLight = new THREE.DirectionalLight(0xfff4df, 1.15);
    deskLight.position.set(50, 420, 650);
    deskLight.castShadow = true;
    deskLight.shadow.mapSize.width = 1024;
    deskLight.shadow.mapSize.height = 1024;
    scene.add(deskLight);

    const rimLight = new THREE.DirectionalLight(0xd9cdb8, 0.5);
    rimLight.position.set(-450, 200, 350);
    scene.add(rimLight);

    // 4. Floating 3D Newsprint Fibers & Ambient Motes
    const particleCount = 60;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 1300;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 850;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 350 + 80;
      particleVelocities.push({
        x: (Math.random() - 0.5) * 0.18,
        y: Math.random() * 0.22 + 0.08,
        z: (Math.random() - 0.5) * 0.12,
      });
    }

    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xdecbb5,
      size: 2.2,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 5. Procedural Authentic Newsprint Broadsheet Canvas Textures
    const createBroadsheetTexture = (
      pageNum: number,
      title: string,
      isReverse: boolean = false
    ) => {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 1440;
      const ctx = canvas.getContext('2d');
      if (!ctx) return new THREE.CanvasTexture(canvas);

      // Aged warm newsprint background
      ctx.fillStyle = '#f5f0e1';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Paper grain fibers
      ctx.fillStyle = 'rgba(20, 18, 16, 0.035)';
      for (let i = 0; i < 4500; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        ctx.fillRect(x, y, 1.5, 1.5);
      }

      // Outer margin border
      ctx.strokeStyle = '#221e1a';
      ctx.lineWidth = 2.5;
      ctx.strokeRect(36, 36, canvas.width - 72, canvas.height - 72);

      // Inner thin border
      ctx.strokeStyle = 'rgba(34, 30, 26, 0.4)';
      ctx.lineWidth = 1;
      ctx.strokeRect(42, 42, canvas.width - 84, canvas.height - 84);

      // Central Crease Gutter Gradient (Darker near fold)
      const creaseGutter = ctx.createLinearGradient(
        isReverse ? canvas.width : 0,
        0,
        isReverse ? canvas.width - 90 : 90,
        0
      );
      creaseGutter.addColorStop(0, 'rgba(20, 16, 12, 0.26)');
      creaseGutter.addColorStop(1, 'rgba(20, 16, 12, 0.0)');
      ctx.fillStyle = creaseGutter;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Top Editorial Header Bar
      ctx.fillStyle = '#141210';
      ctx.font = '700 18px "Courier New", monospace';
      ctx.letterSpacing = '3px';
      ctx.fillText(
        'THE CHRONICLE OF CYBERNETIC INVESTIGATION',
        60,
        78
      );

      ctx.font = '600 13px "Courier New", monospace';
      ctx.fillStyle = '#5a5047';
      ctx.fillText(`VOL. XXIV ... NO. 102 • DISPATCH FOLIO ${String(pageNum).padStart(2, '0')}`, 60, 102);

      // Double rule under masthead
      ctx.beginPath();
      ctx.moveTo(60, 116);
      ctx.lineTo(canvas.width - 60, 116);
      ctx.strokeStyle = '#141210';
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(60, 122);
      ctx.lineTo(canvas.width - 60, 122);
      ctx.lineWidth = 1;
      ctx.stroke();

      // Main Newsprint Headline
      ctx.fillStyle = '#141210';
      ctx.font = '900 36px "Cinzel", "Times New Roman", serif';
      ctx.fillText(title.toUpperCase(), 60, 185);

      // 3-Column Newsprint Grid Simulation
      const colWidth = (canvas.width - 150) / 3;
      for (let col = 0; col < 3; col++) {
        const startX = 60 + col * (colWidth + 15);
        if (col > 0) {
          // Vertical column divider rule
          ctx.beginPath();
          ctx.moveTo(startX - 8, 220);
          ctx.lineTo(startX - 8, canvas.height - 100);
          ctx.strokeStyle = 'rgba(20, 18, 16, 0.25)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Article simulated paragraph text lines
        ctx.fillStyle = 'rgba(20, 18, 16, 0.72)';
        for (let row = 0; row < 22; row++) {
          const y = 230 + row * 45;
          const lineW = colWidth * (0.8 + Math.random() * 0.2);
          ctx.fillRect(startX, y, lineW, 7);
        }
      }

      // Authentic Vintage Rubber Stamp (Crimson ink)
      ctx.save();
      ctx.translate(canvas.width - 250, canvas.height - 230);
      ctx.rotate(-0.06);
      ctx.strokeStyle = '#8C3833';
      ctx.lineWidth = 3.5;
      ctx.strokeRect(0, 0, 190, 75);
      ctx.font = '900 16px "Courier New", monospace';
      ctx.fillStyle = '#8C3833';
      ctx.fillText('★ OFFICIAL COPY ★', 18, 30);
      ctx.font = '700 11px "Courier New", monospace';
      ctx.fillText('VERIFIED ARCHIVE', 30, 52);
      ctx.restore();

      // Bottom Folio Page Number
      ctx.fillStyle = '#141210';
      ctx.font = '700 20px "Courier New", monospace';
      const folioText = `— FOLIO ${pageNum} —`;
      const folioWidth = ctx.measureText(folioText).width;
      ctx.fillText(folioText, (canvas.width - folioWidth) / 2, canvas.height - 58);

      const texture = new THREE.CanvasTexture(canvas);
      texture.generateMipmaps = true;
      return texture;
    };

    // 6. Geometry: Subdivided broadsheet half-page sheet anchored on center fold (x = 0)
    const pageWidth = width * 0.49;
    const pageHeight = height * 0.94;
    const segX = 48;
    const segY = 24;

    const pageGeometry = new THREE.PlaneGeometry(
      pageWidth,
      pageHeight,
      segX,
      segY
    );
    // Pivot around fold edge (x = 0)
    pageGeometry.translate(pageWidth / 2, 0, 0);

    const initialPositions = new Float32Array(
      pageGeometry.attributes.position.array
    );

    // Front & Back materials
    const frontTex = createBroadsheetTexture(currentSpread * 2, 'THE DAILY ARCHIVE', false);
    const backTex = createBroadsheetTexture(targetSpread * 2 - 1, 'THE DAILY ARCHIVE', true);

    const frontMaterial = new THREE.MeshStandardMaterial({
      map: frontTex,
      roughness: 0.88,
      metalness: 0.02,
      side: THREE.FrontSide,
    });

    const backMaterial = new THREE.MeshStandardMaterial({
      map: backTex,
      roughness: 0.88,
      metalness: 0.02,
      side: THREE.BackSide,
    });

    // Mesh group
    const pageGroup = new THREE.Group();
    pageGroup.position.set(0, 0, 4);

    const frontMesh = new THREE.Mesh(pageGeometry, frontMaterial);
    frontMesh.castShadow = true;
    frontMesh.receiveShadow = true;
    pageGroup.add(frontMesh);

    const backMesh = new THREE.Mesh(pageGeometry, backMaterial);
    backMesh.castShadow = true;
    backMesh.receiveShadow = true;
    pageGroup.add(backMesh);

    scene.add(pageGroup);

    // Dynamic Shadow Plane Under Turning Broadsheet
    const shadowGeo = new THREE.PlaneGeometry(pageWidth * 1.04, pageHeight, 16, 8);
    shadowGeo.translate(pageWidth * 0.52, 0, 0);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x100d0a,
      transparent: true,
      opacity: 0.0,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.position.set(0, 0, 1);
    scene.add(shadowMesh);

    pageGroup.visible = false;
    shadowMesh.visible = false;

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // 7. Animation Loop with Cylindrical Flex Physics
    let animationFrameId: number;
    const duration = 680; // ms for tactile, responsive broadsheet turn

    const animate = (timestamp: number) => {
      animationFrameId = requestAnimationFrame(animate);

      // Animate ambient dust motes
      const positions = particleGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        positions[idx] += particleVelocities[i].x;
        positions[idx + 1] += particleVelocities[i].y;
        positions[idx + 2] += particleVelocities[i].z;

        if (positions[idx + 1] > 420) positions[idx + 1] = -420;
        if (positions[idx] > 650) positions[idx] = -650;
        if (positions[idx] < -650) positions[idx] = 650;
      }
      particleGeometry.attributes.position.needsUpdate = true;

      // Check if page flip active
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

        // Rotation across vertical fold
        const isForward = direction === 'forward';
        const startAngle = isForward ? 0 : -Math.PI;
        const endAngle = isForward ? -Math.PI : 0;
        const currentAngle = startAngle + (endAngle - startAngle) * t;

        pageGroup.rotation.y = currentAngle;
        pageGroup.visible = true;
        shadowMesh.visible = true;

        // Realistic Broad-Sheet Curvature Wave (vertex displacement)
        const posAttr = pageGeometry.attributes.position;
        const arr = posAttr.array as Float32Array;
        const curlPeak = Math.sin(t * Math.PI);
        const maxLift = 80;

        for (let i = 0; i < arr.length; i += 3) {
          const initX = initialPositions[i];
          const initY = initialPositions[i + 1];
          const u = initX / pageWidth; // 0 (fold) to 1 (outer edge)

          // Cylindrical lift + subtle diagonal twist from hand motion
          const wave = Math.sin(u * Math.PI);
          const diagonalBias = (initY / pageHeight) * 0.3;
          const zDisp = curlPeak * maxLift * wave * (1.0 + diagonalBias);

          // Contraction due to sheet flex
          const xCompression = curlPeak * 14 * Math.sin(u * Math.PI * 0.5);

          arr[i] = initX - xCompression;
          arr[i + 1] = initY;
          arr[i + 2] = zDisp;
        }
        posAttr.needsUpdate = true;
        pageGeometry.computeVertexNormals();

        // Shadow modulation
        const shadowAlpha = curlPeak * 0.42;
        shadowMat.opacity = shadowAlpha;
        shadowMesh.rotation.y = isForward ? -Math.PI * 0.5 * (1 - t) : -Math.PI * 0.5 * t;

        // Turn completion
        if (rawProgress >= 1.0) {
          state.active = false;
          state.startTime = null;
          state.progress = 0;
          pageGroup.visible = false;
          shadowMesh.visible = false;
          onCompleteRef.current();
        }
      }

      renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(animate);

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
  }, [currentSpread, targetSpread, direction]);

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

