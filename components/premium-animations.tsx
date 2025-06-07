"use client"

import React, { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'

export interface PremiumAnimationProps {
  type: 'ai' | 'web' | 'ecommerce' | 'automation' | 'software' | 'cloud'
}

export const PremiumAnimation = React.memo(({ type }: PremiumAnimationProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="relative w-full h-80 flex items-center justify-center overflow-hidden">
        <div className="animate-pulse bg-gray-200 dark:bg-gray-800 w-full h-full rounded-lg" />
      </div>
    )
  }
  const animations = {
    ai: (
      <div className="relative w-full h-80 flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 600 400" className="w-full h-full absolute inset-0">
          <defs>
            {/* Professional Neural Network Gradients */}
            <radialGradient id="neuronCore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f8fafc" stopOpacity="1" />
              <stop offset="70%" stopColor="#e2e8f0" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#64748b" stopOpacity="0.3" />
            </radialGradient>
            
            <radialGradient id="activeNeuron" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="30%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#1e40af" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#1e293b" stopOpacity="0.2" />
            </radialGradient>
            
            <linearGradient id="synapseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#64748b" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#64748b" stopOpacity="0.2" />
            </linearGradient>
            
            <linearGradient id="weakSynapse" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#64748b" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.1" />
            </linearGradient>

            {/* Subtle Glow Effects */}
            <filter id="neuralGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            <filter id="subtleGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="1" result="softBlur"/>
              <feMerge> 
                <feMergeNode in="softBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Neural Network Structure - Professional Architecture */}
          <g className="neural-network">
            
            {/* Input Layer */}
            <g className="input-layer">
              <text x="80" y="50" textAnchor="middle" className="fill-slate-600 text-xs font-medium tracking-wide">Input Layer</text>
              {Array.from({ length: 4 }, (_, i) => {
                const y = 80 + i * 70;
                return (
                  <g key={`input-${i}`}>
                    <motion.circle
                      cx="80"
                      cy={y}
                      r="12"
                      fill="url(#neuronCore)"
                      stroke="#64748b"
                      strokeWidth="1.5"
                      filter="url(#subtleGlow)"
                      animate={{ 
                        scale: [1, 1.05, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{
                        duration: 3 + i * 0.2,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.circle
                      cx="80"
                      cy={y}
                      r="6"
                      fill="#3b82f6"
                      opacity="0.7"
                      animate={{ 
                        scale: [0.8, 1.2, 0.8],
                        opacity: [0.5, 0.9, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  </g>
                );
              })}
            </g>

            {/* Hidden Layer 1 */}
            <g className="hidden-layer-1">
              <text x="200" y="50" textAnchor="middle" className="fill-slate-600 text-xs font-medium tracking-wide">Hidden Layer 1</text>
              {Array.from({ length: 6 }, (_, i) => {
                const y = 70 + i * 50;
                return (
                  <g key={`hidden1-${i}`}>
                    <motion.circle
                      cx="200"
                      cy={y}
                      r="10"
                      fill="url(#neuronCore)"
                      stroke="#64748b"
                      strokeWidth="1"
                      filter="url(#subtleGlow)"
                      animate={{ 
                        scale: [1, 1.08, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 2.5 + i * 0.15,
                        repeat: Infinity,
                        delay: i * 0.2 + 0.5,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.circle
                      cx="200"
                      cy={y}
                      r="4"
                      fill="#3b82f6"
                      opacity="0.6"
                      animate={{ 
                        scale: [0.7, 1.3, 0.7],
                        opacity: [0.4, 0.8, 0.4]
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        delay: i * 0.25 + 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  </g>
                );
              })}
            </g>

            {/* Hidden Layer 2 */}
            <g className="hidden-layer-2">
              <text x="350" y="50" textAnchor="middle" className="fill-slate-600 text-xs font-medium tracking-wide">Hidden Layer 2</text>
              {Array.from({ length: 5 }, (_, i) => {
                const y = 80 + i * 60;
                return (
                  <g key={`hidden2-${i}`}>
                    <motion.circle
                      cx="350"
                      cy={y}
                      r="11"
                      fill="url(#activeNeuron)"
                      stroke="#1e40af"
                      strokeWidth="1.2"
                      filter="url(#neuralGlow)"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{
                        duration: 2.8 + i * 0.18,
                        repeat: Infinity,
                        delay: i * 0.3 + 1,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.circle
                      cx="350"
                      cy={y}
                      r="5"
                      fill="#ffffff"
                      opacity="0.9"
                      animate={{ 
                        scale: [0.6, 1.4, 0.6],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2 + 0.8,
                        ease: "easeInOut"
                      }}
                    />
                  </g>
                );
              })}
            </g>

            {/* Output Layer */}
            <g className="output-layer">
              <text x="500" y="50" textAnchor="middle" className="fill-slate-600 text-xs font-medium tracking-wide">Output Layer</text>
              {Array.from({ length: 3 }, (_, i) => {
                const y = 120 + i * 80;
                return (
                  <g key={`output-${i}`}>
                    <motion.circle
                      cx="500"
                      cy={y}
                      r="14"
                      fill="url(#activeNeuron)"
                      stroke="#1e40af"
                      strokeWidth="2"
                      filter="url(#neuralGlow)"
                      animate={{ 
                        scale: [1, 1.12, 1],
                        opacity: [0.9, 1, 0.9]
                      }}
                      transition={{
                        duration: 3.5 + i * 0.3,
                        repeat: Infinity,
                        delay: i * 0.4 + 1.5,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.circle
                      cx="500"
                      cy={y}
                      r="7"
                      fill="#ffffff"
                      opacity="1"
                      animate={{ 
                        scale: [0.5, 1.5, 0.5],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        delay: i * 0.35 + 1.2,
                        ease: "easeInOut"
                      }}
                    />
                  </g>
                );
              })}
            </g>

            {/* Synaptic Connections - Input to Hidden Layer 1 */}
            {Array.from({ length: 4 }, (_, i) => {
              const inputY = 80 + i * 70;
              return Array.from({ length: 6 }, (_, j) => {
                const hiddenY = 70 + j * 50;
                const strength = Math.random();
                const strokeGrad = strength > 0.6 ? "url(#synapseGrad)" : "url(#weakSynapse)";
                const strokeWidth = strength > 0.6 ? 1.5 : 0.8;
                return (
                  <motion.line
                    key={`input-hidden1-${i}-${j}`}
                    x1="92"
                    y1={inputY}
                    x2="188"
                    y2={hiddenY}
                    stroke={strokeGrad}
                    strokeWidth={strokeWidth}
                    opacity="0.6"
                    animate={{
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                      duration: 4 + Math.random() * 2,
                      repeat: Infinity,
                      delay: (i + j) * 0.1,
                      ease: "easeInOut"
                    }}
                  />
                );
              });
            })}

            {/* Synaptic Connections - Hidden Layer 1 to Hidden Layer 2 */}
            {Array.from({ length: 6 }, (_, i) => {
              const hidden1Y = 70 + i * 50;
              return Array.from({ length: 5 }, (_, j) => {
                const hidden2Y = 80 + j * 60;
                const strength = Math.random();
                const strokeGrad = strength > 0.5 ? "url(#synapseGrad)" : "url(#weakSynapse)";
                const strokeWidth = strength > 0.5 ? 1.2 : 0.6;
                return (
                  <motion.line
                    key={`hidden1-hidden2-${i}-${j}`}
                    x1="210"
                    y1={hidden1Y}
                    x2="339"
                    y2={hidden2Y}
                    stroke={strokeGrad}
                    strokeWidth={strokeWidth}
                    opacity="0.5"
                    animate={{
                      opacity: [0.2, 0.7, 0.2]
                    }}
                    transition={{
                      duration: 3.5 + Math.random() * 1.5,
                      repeat: Infinity,
                      delay: (i + j) * 0.08 + 0.5,
                      ease: "easeInOut"
                    }}
                  />
                );
              });
            })}

            {/* Synaptic Connections - Hidden Layer 2 to Output */}
            {Array.from({ length: 5 }, (_, i) => {
              const hidden2Y = 80 + i * 60;
              return Array.from({ length: 3 }, (_, j) => {
                const outputY = 120 + j * 80;
                const strength = Math.random();
                const strokeGrad = strength > 0.7 ? "url(#synapseGrad)" : "url(#weakSynapse)";
                const strokeWidth = strength > 0.7 ? 2 : 1;
                return (
                  <motion.line
                    key={`hidden2-output-${i}-${j}`}
                    x1="361"
                    y1={hidden2Y}
                    x2="486"
                    y2={outputY}
                    stroke={strokeGrad}
                    strokeWidth={strokeWidth}
                    opacity="0.7"
                    animate={{
                      opacity: [0.4, 0.9, 0.4]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 1,
                      repeat: Infinity,
                      delay: (i + j) * 0.12 + 1,
                      ease: "easeInOut"
                    }}
                  />
                );
              });
            })}

            {/* Neural Signal Propagation */}
            {Array.from({ length: 3 }, (_, i) => (
              <motion.circle
                key={`signal-${i}`}
                r="2"
                fill="#3b82f6"
                filter="url(#subtleGlow)"
                initial={{
                  cx: 80,
                  cy: 80 + i * 70,
                  opacity: 0
                }}
                animate={{
                  cx: [80, 200, 350, 500],
                  cy: [80 + i * 70, 70 + i * 50, 80 + i * 60, 120 + i * 80],
                  opacity: [0, 0.8, 0.6, 0],
                  scale: [0.5, 1.2, 1, 0.8]
                }}
                transition={{
                  duration: 4,
                  delay: i * 1.5,
                  repeat: Infinity,
                  repeatDelay: 6,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Activation Waves */}
            <motion.circle
              cx="290"
              cy="200"
              r="50"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="0.5"
              opacity="0"
              animate={{
                r: [50, 150, 250],
                opacity: [0, 0.4, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
            
            <motion.circle
              cx="290"
              cy="200"
              r="50"
              fill="none"
              stroke="#1e40af"
              strokeWidth="0.3"
              opacity="0"
              animate={{
                r: [50, 120, 200],
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: 2,
                ease: "easeOut"
              }}
            />
          </g>
        </svg>
      </div>
    ),
    
    web: (
      <div className="relative w-full h-80 flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 400 320" className="w-full h-full">
          <defs>
            <linearGradient id="webGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
            <linearGradient id="mobileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="50%" stopColor="#059669" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
          </defs>
          
          {/* Desktop Monitor */}
          <motion.rect
            x="80"
            y="80"
            width="140"
            height="90"
            rx="6"
            fill="none"
            stroke="url(#webGrad)"
            strokeWidth="2"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Desktop Stand */}
          <rect x="140" y="170" width="20" height="12" fill="url(#webGrad)" opacity="0.6" />
          <rect x="130" y="182" width="40" height="3" rx="2" fill="url(#webGrad)" opacity="0.6" />
          
          {/* Tablet */}
          <motion.rect
            x="260"
            y="90"
            width="70"
            height="100"
            rx="8"
            fill="none"
            stroke="url(#webGrad)"
            strokeWidth="2"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: 1,
              ease: "easeInOut",
            }}
          />
          
          {/* Mobile Phone */}
          <motion.rect
            x="350"
            y="100"
            width="25"
            height="45"
            rx="4"
            fill="none"
            stroke="url(#mobileGrad)"
            strokeWidth="2"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: 2,
              ease: "easeInOut",
            }}
          />
          
          {/* Desktop Content - Simplified */}
          <motion.rect
            x="90"
            y="95"
            width="120"
            height="6"
            rx="2"
            fill="url(#webGrad)"
            opacity="0.6"
            animate={{
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.rect
            x="90"
            y="110"
            width="80"
            height="6"
            rx="2"
            fill="url(#webGrad)"
            opacity="0.5"
            animate={{
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 0.5,
              ease: "easeInOut",
            }}
          />
          <motion.rect
            x="90"
            y="125"
            width="100"
            height="6"
            rx="2"
            fill="url(#webGrad)"
            opacity="0.5"
            animate={{
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 1,
              ease: "easeInOut",
            }}
          />
          
          {/* Tablet Content - Simplified */}
          <motion.rect
            x="270"
            y="105"
            width="50"
            height="5"
            rx="2"
            fill="url(#webGrad)"
            opacity="0.6"
            animate={{
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 1,
              ease: "easeInOut",
            }}
          />
          <motion.rect
            x="270"
            y="120"
            width="35"
            height="5"
            rx="2"
            fill="url(#webGrad)"
            opacity="0.5"
            animate={{
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 1.5,
              ease: "easeInOut",
            }}
          />
          
          {/* Mobile Content - Simplified */}
          <motion.rect
            x="355"
            y="110"
            width="15"
            height="3"
            rx="1"
            fill="url(#mobileGrad)"
            opacity="0.7"
            animate={{
              opacity: [0.5, 0.9, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 2,
              ease: "easeInOut",
            }}
          />
          <motion.rect
            x="355"
            y="120"
            width="10"
            height="3"
            rx="1"
            fill="url(#mobileGrad)"
            opacity="0.6"
            animate={{
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 2.5,
              ease: "easeInOut",
            }}
          />
          
          {/* Simplified Data Flow */}
          <motion.path
            d="M220 125 Q240 115 260 125"
            fill="none"
            stroke="url(#webGrad)"
            strokeWidth="1.5"
            strokeDasharray="3,3"
            opacity="0.6"
            animate={{
              strokeDashoffset: [0, -6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          <motion.path
            d="M330 125 Q340 120 350 125"
            fill="none"
            stroke="url(#webGrad)"
            strokeWidth="1.5"
            strokeDasharray="3,3"
            opacity="0.6"
            animate={{
              strokeDashoffset: [0, -6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.5,
              ease: "linear",
            }}
          />
          
          {/* Modern Framework Hub */}
          <g transform="translate(150, 225)">
            {/* Central framework core */}
            <motion.rect
              x="-8"
              y="-8"
              width="16"
              height="16"
              rx="3"
              fill="none"
              stroke="url(#webGrad)"
              strokeWidth="2"
              opacity="0.9"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Framework layers */}
            {[12, 18, 24].map((radius, i) => (
              <motion.rect
                key={`framework-layer-${i}`}
                x={-radius/2}
                y={-radius/2}
                width={radius}
                height={radius}
                rx={radius/4}
                fill="none"
                stroke="url(#webGrad)"
                strokeWidth="1"
                opacity={0.4 - i * 0.1}
                animate={{
                  rotate: i % 2 === 0 ? [0, 360] : [360, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 6 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
            
            {/* Component nodes */}
            {[
              { angle: 0, distance: 20, label: "React" },
              { angle: 72, distance: 20, label: "Vue" },
              { angle: 144, distance: 20, label: "Next" },
              { angle: 216, distance: 20, label: "Nuxt" },
              { angle: 288, distance: 20, label: "API" },
            ].map((node, i) => {
              const x = node.distance * Math.cos((node.angle * Math.PI) / 180);
              const y = node.distance * Math.sin((node.angle * Math.PI) / 180);
              return (
                <g key={`framework-node-${i}`}>
                  <motion.circle
                    cx={x}
                    cy={y}
                    r="3"
                    fill="url(#webGrad)"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.4,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.line
                    x1="0"
                    y1="0"
                    x2={x * 0.7}
                    y2={y * 0.7}
                    stroke="url(#webGrad)"
                    strokeWidth="1"
                    opacity="0.4"
                    animate={{
                      opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                </g>
              );
            })}
          </g>
          
          {/* Premium Cloud Infrastructure - Positioned below tablet */}
          <g transform="translate(295, 225)">
            {/* Main cloud structure */}
            <motion.path
              d="M-20 0 Q-25 -8 -15 -12 Q0 -15 15 -12 Q25 -8 20 0 Q25 8 20 12 Q0 15 -15 12 Q-25 8 -20 0 Z"
              fill="none"
              stroke="url(#webGrad)"
              strokeWidth="2"
              opacity="0.8"
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.6, 0.9, 0.6],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Cloud service nodes */}
            {[
              { x: -12, y: -3, service: "CDN" },
              { x: 0, y: -6, service: "API" },
              { x: 12, y: -3, service: "DB" },
              { x: -8, y: 6, service: "AUTH" },
              { x: 8, y: 6, service: "CACHE" },
            ].map((node, i) => (
              <g key={`cloud-node-${i}`}>
                <motion.rect
                  x={node.x - 4}
                  y={node.y - 2}
                  width="8"
                  height="4"
                  rx="1"
                  fill="url(#webGrad)"
                  opacity="0.7"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.9, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut",
                  }}
                />
                {/* Service connection lines */}
                <motion.line
                  x1="0"
                  y1="0"
                  x2={node.x * 0.6}
                  y2={node.y * 0.6}
                  stroke="url(#webGrad)"
                  strokeWidth="1"
                  strokeDasharray="2,1"
                  opacity="0.5"
                  animate={{
                    strokeDashoffset: [0, -3],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "linear",
                  }}
                />
              </g>
            ))}
            
            {/* Data flow indicators */}
            {[-15, 0, 15].map((x, i) => (
              <motion.circle
                key={`data-flow-${i}`}
                cx={x}
                cy="20"
                r="1.5"
                fill="url(#webGrad)"
                animate={{
                  y: [20, -20, 20],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
              />
                         ))}
           </g>
           
           {/* Mobile Services Hub - Below phone */}
           <g transform="translate(362.5, 225)">
             {/* Mobile ecosystem core */}
             <motion.circle
               cx="0"
               cy="0"
               r="8"
               fill="none"
               stroke="url(#mobileGrad)"
               strokeWidth="2"
               opacity="0.8"
               animate={{
                 scale: [1, 1.2, 1],
                 opacity: [0.6, 1, 0.6],
               }}
               transition={{
                 duration: 3,
                 repeat: Infinity,
                 ease: "easeInOut",
               }}
             />
             
             {/* Mobile service indicators */}
             {[
               { angle: 0, distance: 12, icon: "📱", service: "App" },
               { angle: 90, distance: 12, icon: "🔔", service: "Push" },
               { angle: 180, distance: 12, icon: "📊", service: "Analytics" },
               { angle: 270, distance: 12, icon: "🔐", service: "Auth" },
             ].map((service, i) => {
               const x = service.distance * Math.cos((service.angle * Math.PI) / 180);
               const y = service.distance * Math.sin((service.angle * Math.PI) / 180);
               return (
                 <g key={`mobile-service-${i}`}>
                   <motion.circle
                     cx={x}
                     cy={y}
                     r="2.5"
                     fill="url(#mobileGrad)"
                     animate={{
                       scale: [1, 1.5, 1],
                       opacity: [0.5, 1, 0.5],
                     }}
                     transition={{
                       duration: 2.5,
                       repeat: Infinity,
                       delay: i * 0.5,
                       ease: "easeInOut",
                     }}
                   />
                   <motion.line
                     x1="0"
                     y1="0"
                     x2={x * 0.6}
                     y2={y * 0.6}
                     stroke="url(#mobileGrad)"
                     strokeWidth="1"
                     opacity="0.5"
                     animate={{
                       opacity: [0.2, 0.7, 0.2],
                     }}
                     transition={{
                       duration: 2,
                       repeat: Infinity,
                       delay: i * 0.3,
                     }}
                   />
                 </g>
               );
             })}
             
             {/* Mobile data synchronization rings */}
             {[6, 10, 14].map((radius, i) => (
               <motion.circle
                 key={`mobile-ring-${i}`}
                 cx="0"
                 cy="0"
                 r={radius}
                 fill="none"
                 stroke="url(#mobileGrad)"
                 strokeWidth="0.5"
                 strokeDasharray="2,2"
                 opacity="0.3"
                 animate={{
                   rotate: i % 2 === 0 ? [0, 360] : [360, 0],
                   scale: [1, 1.1, 1],
                 }}
                 transition={{
                   duration: 4 + i,
                   repeat: Infinity,
                   ease: "linear",
                 }}
               />
             ))}
             
             {/* Mobile API endpoints */}
             {[-8, 8].map((x, i) => (
               <motion.rect
                 key={`mobile-api-${i}`}
                 x={x - 1.5}
                 y="18"
                 width="3"
                 height="6"
                 rx="1"
                 fill="url(#mobileGrad)"
                 opacity="0.6"
                 animate={{
                   y: [18, 15, 18],
                   opacity: [0.4, 0.8, 0.4],
                 }}
                 transition={{
                   duration: 2,
                   repeat: Infinity,
                   delay: i * 0.8,
                   ease: "easeInOut",
                 }}
               />
             ))}
           </g>
        </svg>
      </div>
    ),
    
    ecommerce: (
      <div className="relative w-full h-80 flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 400 320" className="w-full h-full">
          <defs>
            <linearGradient id="ecomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="50%" stopColor="#059669" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
          </defs>
          
          {/* Shopping Cart */}
          <motion.path
            d="M80 100 L100 100 L120 160 L300 160 L320 120 L120 120"
            fill="none"
            stroke="url(#ecomGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{
              pathLength: [0, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          
          {/* Cart Wheels */}
          {[140, 280].map((x, i) => (
            <motion.circle
              key={i}
              cx={x}
              cy="180"
              r="12"
              fill="none"
              stroke="url(#ecomGrad)"
              strokeWidth="2"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
          
          {/* Products */}
          {[
            { x: 160, y: 140, delay: 0 },
            { x: 200, y: 140, delay: 0.3 },
            { x: 240, y: 140, delay: 0.6 },
          ].map((product, i) => (
            <motion.rect
              key={i}
              x={product.x}
              y={product.y}
              width="30"
              height="30"
              rx="4"
              fill="url(#ecomGrad)"
              opacity="0.8"
              animate={{
                y: [product.y, product.y - 10, product.y],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: product.delay,
              }}
            />
          ))}
          
          {/* Payment Flow */}
          <motion.circle
            cx="320"
            cy="200"
            r="20"
            fill="none"
            stroke="url(#ecomGrad)"
            strokeWidth="2"
            strokeDasharray="4,4"
            animate={{
              strokeDashoffset: [0, -8],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          
          {/* Dollar Sign */}
          <motion.text
            x="320"
            y="210"
            textAnchor="middle"
            fontSize="16"
            fill="url(#ecomGrad)"
            fontWeight="bold"
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          >
            $
          </motion.text>
        </svg>
      </div>
    ),
    
    automation: (
      <div className="relative w-full h-80 flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 400 320" className="w-full h-full">
          <defs>
            <linearGradient id="autoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="50%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
          </defs>
          
          {/* Gear System */}
          {[
            { cx: 150, cy: 160, r: 40, teeth: 8, speed: 2 },
            { cx: 250, cy: 160, r: 30, teeth: 6, speed: -2.5 },
            { cx: 200, cy: 100, r: 25, teeth: 5, speed: 3 },
          ].map((gear, i) => (
            <g key={i}>
              <motion.g
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: gear.speed > 0 ? gear.speed : -gear.speed,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ transformOrigin: `${gear.cx}px ${gear.cy}px` }}
              >
                {/* Gear Teeth */}
                {Array.from({ length: gear.teeth }).map((_, toothIndex) => {
                  const angle = (toothIndex * 360) / gear.teeth;
                  const toothX = gear.cx + (gear.r + 5) * Math.cos((angle * Math.PI) / 180);
                  const toothY = gear.cy + (gear.r + 5) * Math.sin((angle * Math.PI) / 180);
                  return (
                    <rect
                      key={toothIndex}
                      x={toothX - 2}
                      y={toothY - 2}
                      width="4"
                      height="4"
                      fill="url(#autoGrad)"
                    />
                  );
                })}
                
                {/* Gear Body */}
                <circle
                  cx={gear.cx}
                  cy={gear.cy}
                  r={gear.r}
                  fill="none"
                  stroke="url(#autoGrad)"
                  strokeWidth="3"
                />
                
                {/* Center */}
                <circle
                  cx={gear.cx}
                  cy={gear.cy}
                  r="8"
                  fill="url(#autoGrad)"
                />
              </motion.g>
            </g>
          ))}
          
          {/* Data Flow */}
          <motion.path
            d="M50 200 Q150 220 250 200 T350 200"
            fill="none"
            stroke="url(#autoGrad)"
            strokeWidth="2"
            strokeDasharray="5,5"
            animate={{
              strokeDashoffset: [0, -10],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* Progress Indicators */}
          {[80, 160, 240, 320].map((x, i) => (
            <motion.circle
              key={i}
              cx={x}
              cy="250"
              r="6"
              fill="url(#autoGrad)"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </svg>
      </div>
    ),
    
    software: (
      <div className="relative w-full h-80 flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 600 400" className="w-full h-full">
          <defs>
            {/* Premium Gradients */}
            <linearGradient id="enterpriseCore" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="30%" stopColor="#3b82f6" />
              <stop offset="70%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
            
            <linearGradient id="premiumGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
            
            <linearGradient id="sophisticatedSilver" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="50%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
            
            <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
              <stop offset="30%" stopColor="#0891b2" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#0e7490" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#155e75" stopOpacity="0" />
            </linearGradient>
            
            <linearGradient id="neuralNetwork" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#6d28d9" />
            </linearGradient>
            
            {/* Premium Filters */}
            <filter id="enterpriseGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2" result="softBlur"/>
              <feMerge> 
                <feMergeNode in="softBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            {/* Background Pattern */}
            <pattern id="gridPattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1e40af" strokeWidth="0.5" opacity="0.1"/>
            </pattern>
          </defs>
          
          {/* Premium Background Grid */}
          <rect width="100%" height="100%" fill="url(#gridPattern)" opacity="0.3" />
          
          {/* Floating Particles */}
          {Array.from({ length: 15 }, (_, i) => (
            <motion.circle
              key={`particle-${i}`}
              cx={60 + (i * 35)}
              cy={60 + Math.sin(i) * 40}
              r="1.5"
              fill="url(#sophisticatedSilver)"
              animate={{
                cy: [60 + Math.sin(i) * 40, 80 + Math.sin(i) * 40, 60 + Math.sin(i) * 40],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 6 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
          
          {/* Central Enterprise Core */}
          <g className="enterprise-core">
            <motion.rect
              x="250"
              y="170"
              width="100"
              height="80"
              rx="12"
              fill="none"
              stroke="url(#enterpriseCore)"
              strokeWidth="3"
              filter="url(#enterpriseGlow)"
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Core Inner Glow */}
            <motion.rect
              x="260"
              y="180"
              width="80"
              height="60"
              rx="8"
              fill="url(#enterpriseCore)"
              opacity="0.15"
              animate={{
                opacity: [0.1, 0.25, 0.1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <motion.text
              x="300"
              y="215"
              textAnchor="middle"
              fontSize="14"
              fill="url(#premiumGold)"
              fontWeight="bold"
              filter="url(#softGlow)"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              CORE
            </motion.text>
          </g>
          
          {/* Premium System Modules - Improved positioning */}
          {[
            { x: 120, y: 100, label: "CRM", color: "#3b82f6", delay: 0, size: "lg" },
            { x: 480, y: 100, label: "ERP", color: "#8b5cf6", delay: 0.3, size: "lg" },
            { x: 120, y: 280, label: "DATABASE", color: "#06b6d4", delay: 0.6, size: "md" },
            { x: 480, y: 280, label: "API GATEWAY", color: "#10b981", delay: 0.9, size: "md" },
            { x: 300, y: 60, label: "AUTHENTICATION", color: "#f59e0b", delay: 1.2, size: "sm" },
            { x: 300, y: 340, label: "MONITORING", color: "#ef4444", delay: 1.5, size: "sm" },
            { x: 380, y: 140, label: "LEGACY", color: "#6b7280", delay: 1.8, size: "xs" },
            { x: 220, y: 140, label: "INTEGRATION", color: "#7c3aed", delay: 2.1, size: "xs" },
          ].map((module, i) => {
            const sizes: Record<string, { width: number; height: number; fontSize: number }> = {
              lg: { width: 80, height: 45, fontSize: 10 },
              md: { width: 70, height: 40, fontSize: 8 },
              sm: { width: 60, height: 35, fontSize: 7 },
              xs: { width: 50, height: 30, fontSize: 6 }
            };
            const { width, height, fontSize } = sizes[module.size];
            
            // Handle long text labels by splitting them
            const isLongLabel = module.label.length > 8;
            const labelLines = isLongLabel ? 
              (module.label === "AUTHENTICATION" ? ["AUTH", "ENTICATION"] :
               module.label === "API GATEWAY" ? ["API", "GATEWAY"] :
               module.label === "INTEGRATION" ? ["INTEGR", "ATION"] :
               [module.label]) : [module.label];
            
            return (
              <g key={`module-${i}`}>
                <motion.rect
                  x={module.x - width/2}
                  y={module.y - height/2}
                  width={width}
                  height={height}
                  rx="10"
                  fill="none"
                  stroke={module.color}
                  strokeWidth="2.5"
                  filter="url(#softGlow)"
                  animate={{
                    opacity: [0.6, 0.9, 0.6],
                    scale: [1, 1.05, 1],
                    strokeWidth: [2.5, 3, 2.5],
                  }}
                  transition={{
                    duration: 3 + i * 0.2,
                    repeat: Infinity,
                    delay: module.delay,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Module Inner Highlight */}
                <motion.rect
                  x={module.x - width/2 + 4}
                  y={module.y - height/2 + 4}
                  width={width - 8}
                  height={height - 8}
                  rx="7"
                  fill={module.color}
                  opacity="0.08"
                  animate={{
                    opacity: [0.05, 0.15, 0.05],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: module.delay + 0.5,
                  }}
                />
                
                {/* Text Labels - Handle single or multi-line */}
                {labelLines.length === 1 ? (
                  <motion.text
                    x={module.x}
                    y={module.y + fontSize/3}
                    textAnchor="middle"
                    fontSize={fontSize}
                    fill={module.color}
                    fontWeight="600"
                    animate={{
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: module.delay,
                    }}
                  >
                    {labelLines[0]}
                  </motion.text>
                ) : (
                  <g>
                    {labelLines.map((line, lineIndex) => (
                      <motion.text
                        key={`${module.label}-line-${lineIndex}`}
                        x={module.x}
                        y={module.y + (lineIndex - 0.3) * (fontSize + 1)}
                        textAnchor="middle"
                        fontSize={fontSize - 1}
                        fill={module.color}
                        fontWeight="600"
                        animate={{
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: module.delay,
                        }}
                      >
                        {line}
                      </motion.text>
                    ))}
                  </g>
                )}
              </g>
            );
          })}
          
          {/* Sophisticated Connection Beams - Updated for new positions */}
          {[
            // Primary connections to core
            { from: [160, 115], to: [250, 190], strength: "high", delay: 0 },
            { from: [440, 115], to: [350, 190], strength: "high", delay: 0.2 },
            { from: [160, 265], to: [250, 230], strength: "medium", delay: 0.4 },
            { from: [440, 265], to: [350, 230], strength: "medium", delay: 0.6 },
            { from: [300, 95], to: [300, 170], strength: "high", delay: 0.8 },
            { from: [300, 305], to: [300, 250], strength: "low", delay: 1.0 },
            // Cross connections
            { from: [250, 155], to: [245, 155], strength: "medium", delay: 1.2 },
            { from: [355, 155], to: [350, 155], strength: "medium", delay: 1.4 },
          ].map((connection, i) => {
            const widths: Record<string, number> = { high: 3, medium: 2, low: 1.5 };
            const opacities: Record<string, number> = { high: 0.8, medium: 0.6, low: 0.4 };
            
            return (
              <motion.line
                key={`connection-${i}`}
                x1={connection.from[0]}
                y1={connection.from[1]}
                x2={connection.to[0]}
                y2={connection.to[1]}
                stroke="url(#dataFlow)"
                strokeWidth={widths[connection.strength]}
                strokeDasharray="8,4"
                filter="url(#softGlow)"
                animate={{
                  strokeDashoffset: [0, -12],
                  opacity: [opacities[connection.strength] * 0.5, opacities[connection.strength], opacities[connection.strength] * 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: connection.delay,
                  ease: "linear",
                }}
              />
            );
          })}
          
          {/* Advanced Data Flow Pulses - Updated paths */}
          {[
            { path: "M120 100 Q200 140 250 190", delay: 0 },
            { path: "M480 100 Q400 140 350 190", delay: 1 },
            { path: "M300 60 Q300 115 300 170", delay: 2 },
            { path: "M120 280 Q185 255 250 230", delay: 3 },
          ].map((pulse, i) => (
            <motion.circle
              key={`pulse-${i}`}
              r="4"
              fill="url(#premiumGold)"
              filter="url(#softGlow)"
              animate={{
                scale: [0.8, 1.5, 0.8],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: pulse.delay,
                ease: "easeInOut",
              }}
            >
              <animateMotion
                dur="4s"
                repeatCount="indefinite"
                begin={`${pulse.delay}s`}
                path={pulse.path}
              />
            </motion.circle>
          ))}
          
          {/* Network Status Indicators - Better positioned */}
          <g className="status-panel" transform="translate(530, 60)">
            <motion.rect
              x="-5"
              y="-5"
              width="65"
              height="80"
              rx="8"
              fill="none"
              stroke="url(#sophisticatedSilver)"
              strokeWidth="1"
              opacity="0.3"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
            
            {[
              { y: 10, status: "active", label: "ACTIVE", color: "#10b981" },
              { y: 30, status: "processing", label: "PROCESSING", color: "#f59e0b" },
              { y: 50, status: "syncing", label: "SYNCING", color: "#3b82f6" },
            ].map((indicator, i) => (
              <g key={`indicator-${i}`}>
                <motion.circle
                  cx="8"
                  cy={indicator.y}
                  r="3"
                  fill={indicator.color}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
                <text
                  x="18"
                  y={indicator.y + 2}
                  fontSize="7"
                  fill="url(#sophisticatedSilver)"
                  fontWeight="500"
                >
                  {indicator.label}
                </text>
              </g>
            ))}
          </g>
          
          {/* Enterprise Security Perimeter - Adjusted for new layout */}
          <motion.ellipse
            cx="300"
            cy="200"
            rx="220"
            ry="140"
            fill="none"
            stroke="url(#enterpriseCore)"
            strokeWidth="1"
            strokeDasharray="12,6"
            opacity="0.25"
            animate={{
              strokeDashoffset: [0, -18],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* Neural Network Overlay - Repositioned */}
          <g className="neural-overlay" opacity="0.12">
            {Array.from({ length: 8 }, (_, i) => (
              <motion.circle
                key={`neural-${i}`}
                cx={180 + i * 35}
                cy={370}
                r="2"
                fill="url(#neuralNetwork)"
                animate={{
                  scale: [0.5, 1.2, 0.5],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
            
            {Array.from({ length: 7 }, (_, i) => (
              <motion.line
                key={`neural-link-${i}`}
                x1={180 + i * 35}
                y1={370}
                x2={215 + i * 35}
                y2={370}
                stroke="url(#neuralNetwork)"
                strokeWidth="1"
                animate={{
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </g>
        </svg>
      </div>
    ),
    
    cloud: (
      <div className="relative w-full h-80 flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 400 320" className="w-full h-full">
          <defs>
            {/* Premium Gradients */}
            <linearGradient id="premiumCloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="30%" stopColor="#3b82f6" />
              <stop offset="70%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#93c5fd" />
            </linearGradient>
            
            <linearGradient id="dataFlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
            
            <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            
            <radialGradient id="cloudGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="70%" stopColor="#1e40af" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#1e40af" stopOpacity="0" />
            </radialGradient>
            
            {/* Filters for Premium Effects */}
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            <filter id="innerGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.5" result="softBlur"/>
              <feMerge> 
                <feMergeNode in="softBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            {/* Mesh Pattern for Infrastructure Grid */}
            <pattern id="infrastructureGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2"/>
            </pattern>
          </defs>
          
          {/* Background Grid */}
          <rect width="100%" height="100%" fill="url(#infrastructureGrid)" opacity="0.3" />
          
          {/* Main Cloud Infrastructure Core */}
          <g transform="translate(200, 140)">
            {/* Volumetric Cloud Base */}
            <motion.ellipse
              cx="0"
              cy="10"
              rx="80"
              ry="25"
              fill="url(#cloudGlow)"
              animate={{
                rx: [75, 85, 75],
                ry: [20, 30, 20],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Layered Cloud Structure */}
            <motion.path
              d="M-60 0 Q-70 -15 -50 -25 Q-20 -35 10 -25 Q40 -35 70 -25 Q90 -15 80 0 Q90 15 70 25 Q40 35 10 25 Q-20 35 -50 25 Q-70 15 -60 0 Z"
              fill="none"
              stroke="url(#premiumCloudGrad)"
              strokeWidth="2.5"
              filter="url(#softGlow)"
              animate={{
                scale: [0.95, 1.05, 0.95],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Inner Cloud Details */}
            <motion.path
              d="M-40 -5 Q-30 -15 -15 -10 Q0 -18 15 -10 Q30 -15 40 -5 Q30 5 15 10 Q0 18 -15 10 Q-30 5 -40 -5 Z"
              fill="url(#premiumCloudGrad)"
              opacity="0.3"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </g>
          
          {/* Satellite Clouds */}
          {[
            { x: 80, y: 80, scale: 0.4, delay: 1 },
            { x: 320, y: 100, scale: 0.35, delay: 2 },
            { x: 300, y: 240, scale: 0.3, delay: 1.5 },
            { x: 100, y: 260, scale: 0.25, delay: 2.5 },
          ].map((cloud, i) => (
            <g key={`satellite-${i}`} transform={`translate(${cloud.x}, ${cloud.y}) scale(${cloud.scale})`}>
              <motion.path
                d="M-30 0 Q-35 -8 -25 -12 Q-5 -18 5 -12 Q25 -18 35 -12 Q45 -8 40 0 Q45 8 35 12 Q25 18 5 12 Q-5 18 -25 12 Q-35 8 -30 0 Z"
                fill="none"
                stroke="url(#premiumCloudGrad)"
                strokeWidth="1.5"
                opacity="0.6"
                animate={{
                  scale: [0.9, 1.1, 0.9],
                  opacity: [0.4, 0.8, 0.4],
                  x: [0, Math.random() * 10 - 5, 0],
                }}
                transition={{
                  duration: 5 + Math.random() * 3,
                  repeat: Infinity,
                  delay: cloud.delay,
                  ease: "easeInOut",
                }}
              />
            </g>
          ))}
          
          {/* Data Center Nodes */}
          {[
            { x: 60, y: 280, label: "Edge", type: "edge" },
            { x: 140, y: 290, label: "Core", type: "core" },
            { x: 260, y: 290, label: "Core", type: "core" },
            { x: 340, y: 280, label: "Edge", type: "edge" },
          ].map((node, i) => (
            <g key={`datacenter-${i}`}>
              {/* Node Container */}
              <motion.rect
                x={node.x - 12}
                y={node.y - 8}
                width="24"
                height="16"
                rx="3"
                fill="url(#nodeGrad)"
                stroke="url(#premiumCloudGrad)"
                strokeWidth="1"
                filter="url(#innerGlow)"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
              />
              
              {/* Node Activity Indicators */}
              {[0, 1, 2].map((indicator) => (
                <motion.circle
                  key={indicator}
                  cx={node.x - 6 + indicator * 6}
                  cy={node.y}
                  r="1"
                  fill="#10b981"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.3 + indicator * 0.2,
                  }}
                />
              ))}
              
              {/* Node Labels */}
              <motion.text
                x={node.x}
                y={node.y + 20}
                textAnchor="middle"
                fontSize="6"
                fill="url(#premiumCloudGrad)"
                fontWeight="500"
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              >
                {node.label}
              </motion.text>
            </g>
          ))}
          
          {/* Network Connections */}
          {[
            { from: [200, 165], to: [140, 280], strength: "primary" },
            { from: [200, 165], to: [260, 280], strength: "primary" },
            { from: [200, 165], to: [60, 270], strength: "secondary" },
            { from: [200, 165], to: [340, 270], strength: "secondary" },
            { from: [140, 280], to: [260, 280], strength: "tertiary" },
          ].map((connection, i) => (
            <motion.line
              key={`connection-${i}`}
              x1={connection.from[0]}
              y1={connection.from[1]}
              x2={connection.to[0]}
              y2={connection.to[1]}
              stroke="url(#premiumCloudGrad)"
              strokeWidth={connection.strength === "primary" ? "2" : connection.strength === "secondary" ? "1.5" : "1"}
              strokeDasharray={connection.strength === "primary" ? "none" : "4,2"}
              opacity={connection.strength === "primary" ? "0.8" : "0.5"}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                strokeDashoffset: connection.strength !== "primary" ? [0, -6] : 0,
              }}
              transition={{
                duration: connection.strength === "primary" ? 3 : 2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "linear",
              }}
            />
          ))}
          
          {/* Data Flow Particles */}
          {[...Array(12)].map((_, i) => {
            const paths = [
              { from: [200, 165], to: [140, 280] },
              { from: [200, 165], to: [260, 280] },
              { from: [200, 165], to: [60, 270] },
              { from: [200, 165], to: [340, 270] },
            ];
            const path = paths[i % paths.length];
            const progress = (i % 3) / 3;
            
            return (
              <motion.circle
                key={`particle-${i}`}
                r="2"
                fill="url(#dataFlowGrad)"
                filter="url(#softGlow)"
                animate={{
                  cx: [path.from[0], path.to[0]],
                  cy: [path.from[1], path.to[1]],
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.3 + progress,
                  ease: "easeInOut",
                }}
              />
            );
          })}
          
          {/* Performance Metrics Visualization */}
          <g transform="translate(320, 50)">
            <motion.rect
              x="0"
              y="0"
              width="60"
              height="40"
              rx="4"
              fill="rgba(59, 130, 246, 0.1)"
              stroke="url(#premiumCloudGrad)"
              strokeWidth="1"
              animate={{
                opacity: [0.5, 0.9, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
            
            {/* Mini Chart Bars */}
            {[12, 18, 15, 22, 20, 25].map((height, i) => (
              <motion.rect
                key={`bar-${i}`}
                x={8 + i * 7}
                y={35 - height}
                width="3"
                height={height}
                fill="url(#nodeGrad)"
                animate={{
                  height: [height * 0.7, height, height * 0.8],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
            
            <motion.text
              x="30"
              y="10"
              textAnchor="middle"
              fontSize="6"
              fill="url(#premiumCloudGrad)"
              fontWeight="600"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              Analytics
            </motion.text>
          </g>
          
          {/* Load Balancer Visualization */}
          <g transform="translate(30, 50)">
            <motion.circle
              cx="15"
              cy="15"
              r="12"
              fill="none"
              stroke="url(#premiumCloudGrad)"
              strokeWidth="2"
              strokeDasharray="8,4"
              animate={{
                rotate: [0, 360],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            {[0, 1, 2].map((segment) => (
              <motion.path
                key={`segment-${segment}`}
                d={`M 15 15 L ${15 + 8 * Math.cos((segment * 120) * Math.PI / 180)} ${15 + 8 * Math.sin((segment * 120) * Math.PI / 180)}`}
                stroke="url(#nodeGrad)"
                strokeWidth="2"
                strokeLinecap="round"
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: segment * 0.5,
                }}
              />
            ))}
            
            <motion.text
              x="15"
              y="40"
              textAnchor="middle"
              fontSize="6"
              fill="url(#premiumCloudGrad)"
              fontWeight="600"
            >
              Load Balancer
            </motion.text>
          </g>
          
          {/* Security Shield */}
          <g transform="translate(200, 60)">
            <motion.path
              d="M 0 -15 Q -8 -15 -8 -8 L -8 5 Q -8 12 0 15 Q 8 12 8 5 L 8 -8 Q 8 -15 0 -15 Z"
              fill="none"
              stroke="url(#nodeGrad)"
              strokeWidth="2"
              filter="url(#softGlow)"
              animate={{
                scale: [0.9, 1.1, 0.9],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <motion.circle
              cx="0"
              cy="-2"
              r="3"
              fill="url(#nodeGrad)"
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            
            <motion.text
              x="0"
              y="25"
              textAnchor="middle"
              fontSize="6"
              fill="url(#premiumCloudGrad)"
              fontWeight="600"
            >
              Security
            </motion.text>
          </g>
        </svg>
      </div>
    ),
  }

  return animations[type] || null
})

PremiumAnimation.displayName = 'PremiumAnimation' 