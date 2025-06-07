"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

interface DataPoint {
  position: THREE.Vector3;
  originalPosition: THREE.Vector3;
  pulse: number;
  speed: number;
}

// Add performance detection at the top level
const getDevicePerformance = () => {
  if (typeof window === 'undefined') return 'high';
  
  // Check for low-end devices
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') as WebGLRenderingContext | null;
    
    if (!gl) return 'low';
    
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    const renderer = debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : '';
  
    // Detect low-end mobile GPUs
    if (typeof renderer === 'string' && renderer.includes('Adreno') && (renderer.includes('306') || renderer.includes('308') || renderer.includes('330'))) {
      return 'low';
    }
  } catch (error) {
    return 'medium';
  }
  
  // Check CPU cores and memory as additional indicators
  const cores = navigator.hardwareConcurrency || 4;
  const memory = (navigator as any).deviceMemory || 4;
  
  if (cores <= 2 || memory <= 2) return 'low';
  if (cores <= 4 && memory <= 4) return 'medium';
  
  return 'high';
};

function WireframeGlobe({ mousePosition, isMobile }: { mousePosition: { x: number; y: number }, isMobile: boolean }) {
  const globeRef = useRef<THREE.Group>(null);
  const dataPointsRef = useRef<THREE.Group>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [devicePerformance] = useState(() => getDevicePerformance());
  
  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Calculate responsive radius based on screen size
  const getRadius = () => {
    if (windowWidth < 640) return 1.6; // Bigger for small mobile (was 1.4)
    if (windowWidth < 768) return 1.7; // Bigger for mobile tablets (was 1.5)
    if (windowWidth < 1024) return 1.95; // Very close to desktop for tablets
    return 2; // Full size for desktop - unchanged
  };
  
  // Calculate Y position offset for mobile
  const getYPosition = () => {
    if (windowWidth < 640) return 1.5; // Move up significantly for small mobile
    if (windowWidth < 768) return 1.0; // Move up for mobile tablets
    return 0; // No offset for tablets and desktop
  };
  
  const radius = getRadius();
  const yPosition = getYPosition();
  
  // Create wireframe lines for the globe
  const wireframeLines = useMemo(() => {
    const lines = [];
    const segments = isMobile ? 16 : 32; // Reduce complexity on mobile
    
    // Longitude lines
    for (let i = 0; i <= segments; i += 2) {
      const phi = (i / segments) * Math.PI * 2;
      const points: [number, number, number][] = [];
      for (let j = 0; j <= segments; j++) {
        const theta = (j / segments) * Math.PI;
        points.push([
          radius * Math.sin(theta) * Math.cos(phi),
          radius * Math.cos(theta),
          radius * Math.sin(theta) * Math.sin(phi),
        ]);
      }
      lines.push(points);
    }
    
    // Latitude lines
    for (let i = 1; i < segments; i += 2) {
      const theta = (i / segments) * Math.PI;
      const points: [number, number, number][] = [];
      const r = radius * Math.sin(theta);
      const y = radius * Math.cos(theta);
      
      for (let j = 0; j <= segments; j++) {
        const phi = (j / segments) * Math.PI * 2;
        points.push([
          r * Math.cos(phi),
          y,
          r * Math.sin(phi),
        ]);
      }
      lines.push(points);
    }
    
    return lines;
  }, [isMobile, radius, windowWidth]);

  // Create random data points on the globe surface
  const dataPoints = useMemo<DataPoint[]>(() => {
    const points: DataPoint[] = [];
    const dataRadius = radius + 0.05; // Slightly above the globe surface
    const pointCount = isMobile ? 25 : 50; // Fewer points on mobile
    
    for (let i = 0; i < pointCount; i++) {
      // Generate random spherical coordinates
      const theta = Math.random() * Math.PI * 2; // longitude
      const phi = Math.acos(2 * Math.random() - 1); // latitude (uniform distribution)
      
      const x = dataRadius * Math.sin(phi) * Math.cos(theta);
      const y = dataRadius * Math.cos(phi);
      const z = dataRadius * Math.sin(phi) * Math.sin(theta);
      
      const position = new THREE.Vector3(x, y, z);
      points.push({
        position: position.clone(),
        originalPosition: position.clone(),
        pulse: Math.random() * Math.PI * 2,
        speed: 0.02 + Math.random() * 0.03,
      });
    }
    
    return points;
  }, [isMobile, radius, windowWidth]);

  useFrame((state) => {
    if (!globeRef.current) return;

    // Rotate the globe slowly
    globeRef.current.rotation.y += 0.003;
    
    // Interactive mouse/touch rotation for all devices
    const targetRotationX = mousePosition.y * 0.2;
    const targetRotationZ = mousePosition.x * 0.1;
    
    globeRef.current.rotation.x += (targetRotationX - globeRef.current.rotation.x) * 0.1;
    globeRef.current.rotation.z += (targetRotationZ - globeRef.current.rotation.z) * 0.1;

    // Update data points pulse animation
    if (dataPointsRef.current) {
      dataPointsRef.current.children.forEach((child, index) => {
        const point = dataPoints[index];
        point.pulse += point.speed;
        
        // Pulsing scale effect
        const scale = 0.8 + Math.sin(point.pulse) * 0.4;
        child.scale.setScalar(scale);
        
        // Pulsing opacity (will be handled by material)
        const material = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
        if (material) {
          material.opacity = 0.6 + Math.sin(point.pulse) * 0.4;
        }
      });
    }
  });

  return (
    <group ref={globeRef} position={[0, yPosition, 0]}>
      {/* Wireframe lines */}
      {wireframeLines.map((linePoints, index) => (
        <Line
          key={index}
          points={linePoints}
          color="#3b82f6"
          lineWidth={isMobile ? 0.5 : 1}
          transparent
          opacity={0.3}
        />
      ))}
      
      {/* Data points */}
      <group ref={dataPointsRef}>
        {dataPoints.map((point, index) => (
          <mesh key={index} position={point.position}>
            <sphereGeometry args={[isMobile ? 0.015 : 0.02, 6, 6]} />
            <meshBasicMaterial
              color="#60a5fa"
              transparent
              opacity={0.8}
            />
            {/* Glow effect */}
            <mesh scale={2}>
              <sphereGeometry args={[isMobile ? 0.015 : 0.02, 6, 6]} />
              <meshBasicMaterial
                color="#3b82f6"
                transparent
                opacity={0.2}
              />
            </mesh>
          </mesh>
        ))}
      </group>
    </group>
  );
}

function Scene({ isMobile }: { isMobile: boolean }) {
  const { camera, size } = useThree();
  
  useEffect(() => {
    // Adjust camera position based on screen size - less aggressive zoom out for mobile
    if (size.width < 640) {
      // Small mobile screens - back to normal camera position
      camera.position.set(0, 0, 7);
    } else if (size.width < 768) {
      // Mobile tablets - back to normal camera position
      camera.position.set(0, 0, 6.5);
    } else if (size.width < 1024) {
      // Tablets
      camera.position.set(0, 0, 5.5);
    } else {
      // Desktop - exactly as original
      camera.position.set(0, 0, 5);
    }
    camera.lookAt(0, 0, 0);
  }, [camera, size]);

  return null;
}

interface GlobeProps {
  mousePosition?: { x: number; y: number };
}

export function Globe({ mousePosition = { x: 0, y: 0 } }: GlobeProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Detect mobile device and screen size
    const updateScreenInfo = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setScreenSize({ width, height });
      setIsMobile(width < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    updateScreenInfo();
    window.addEventListener('resize', updateScreenInfo);
    
    return () => window.removeEventListener('resize', updateScreenInfo);
  }, []);

  // Calculate responsive field of view
  const getFOV = () => {
    if (screenSize.width < 640) return 55; // Slightly wider for small mobile
    if (screenSize.width < 768) return 53; // Mobile tablets
    if (screenSize.width < 1024) return 51; // Tablets
    return 50; // Desktop - exactly as original
  };

  return (
    <div className="w-full h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] overflow-hidden">
      <Canvas
        camera={{ 
          position: [0, 0, 5], 
          fov: getFOV(),
          near: 0.1,
          far: 1000 
        }}
        dpr={isMobile ? [0.75, 1.25] : [1, 2]}
        performance={{ min: 0.3 }}
        gl={{ 
          antialias: !isMobile,
          alpha: true,
          powerPreference: "high-performance"
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <Scene isMobile={isMobile} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.3} />
        
        <WireframeGlobe 
          mousePosition={mousePosition} 
          isMobile={isMobile}
        />
      </Canvas>
    </div>
  );
} 