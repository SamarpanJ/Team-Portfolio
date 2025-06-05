"use client";

import { useRef, useEffect, useState } from "react";
import { Globe } from "./Globe";

export function InteractiveGlobe() {
  const heroRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!heroRef.current || isMobile) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      
      // Check if mouse is within the hero section bounds
      if (event.clientX >= rect.left && 
          event.clientX <= rect.right && 
          event.clientY >= rect.top && 
          event.clientY <= rect.bottom) {
        
        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        
        setMousePosition({ x, y });
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      if (!globeRef.current || !isMobile) return;
      
      const touch = event.touches[0];
      if (!touch) return;
      
      const globeRect = globeRef.current.getBoundingClientRect();
      
      // Only capture touch if it's directly on the globe area (center region)
      const centerX = globeRect.left + globeRect.width / 2;
      const centerY = globeRect.top + globeRect.height / 2;
      const maxDistance = Math.min(globeRect.width, globeRect.height) * 0.3; // 30% of the smaller dimension
      
      const distanceFromCenter = Math.sqrt(
        Math.pow(touch.clientX - centerX, 2) + Math.pow(touch.clientY - centerY, 2)
      );
      
      if (distanceFromCenter <= maxDistance) {
        setIsInteracting(true);
        event.preventDefault(); // Only prevent default when touching the globe directly
        
        const x = ((touch.clientX - globeRect.left) / globeRect.width) * 2 - 1;
        const y = -((touch.clientY - globeRect.top) / globeRect.height) * 2 + 1;
        
        setMousePosition({ x, y });
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!globeRef.current || !isMobile || !isInteracting) return;
      
      // Only prevent default and handle touch if we're in an active interaction
      event.preventDefault();
      
      const touch = event.touches[0];
      if (!touch) return;
      
      const globeRect = globeRef.current.getBoundingClientRect();
      const x = ((touch.clientX - globeRect.left) / globeRect.width) * 2 - 1;
      const y = -((touch.clientY - globeRect.top) / globeRect.height) * 2 + 1;
      
      setMousePosition({ x, y });
    };

    const handleTouchEnd = () => {
      setIsInteracting(false);
    };

    if (!isMobile) {
      // Desktop: Track mouse movements
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      return () => window.removeEventListener('mousemove', handleMouseMove);
    } else {
      // Mobile: Track touch movements only on the globe
      if (globeRef.current) {
        globeRef.current.addEventListener('touchstart', handleTouchStart, { passive: false });
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        window.addEventListener('touchend', handleTouchEnd, { passive: true });
      }
      return () => {
        if (globeRef.current) {
          globeRef.current.removeEventListener('touchstart', handleTouchStart);
        }
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isMobile, isInteracting]);

  return (
    <div ref={heroRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div 
        ref={globeRef}
        className="w-full h-full max-w-4xl mx-auto opacity-60 pointer-events-auto touch-manipulation"
        style={{ 
          pointerEvents: isMobile ? 'auto' : 'none',
          touchAction: isMobile ? 'manipulation' : 'auto'
        }}
      >
        <Globe mousePosition={mousePosition} />
      </div>
    </div>
  );
} 