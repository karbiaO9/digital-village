"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

export default function BackgroundPattern() {
  const svgRef = useRef<SVGSVGElement>(null)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const isDark = mounted && theme === "dark"
  
  const colors = {
    green: isDark ? "#66bb6a" : "#81c784",
    greenDark: isDark ? "#4caf50" : "#4caf50",
    greenLight: isDark ? "#66bb6a" : "#66bb6a",
    blue: isDark ? "#42a5f5" : "#64b5f6",
    blueDark: isDark ? "#1e88e5" : "#42a5f5",
    blueLight: isDark ? "#64b5f6" : "#90caf9",
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!svgRef.current) return
      
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      const xPercent = (clientX / innerWidth) * 100
      const yPercent = (clientY / innerHeight) * 100
      
      const animatedElements = svgRef.current.querySelectorAll(".interactive-element")
      animatedElements.forEach((el, index) => {
        const element = el as SVGElement
        const offset = index * 0.5
        const moveX = (xPercent - 50) * 0.02 + offset
        const moveY = (yPercent - 50) * 0.02 + offset
        element.style.transform = `translate(${moveX}px, ${moveY}px)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <svg
        ref={svgRef}
        className="w-full h-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e8f5e9" stopOpacity="0.4" className="dark:stop-[#1b5e20] dark:stop-opacity-[0.15]" />
            <stop offset="30%" stopColor="#c8e6c9" stopOpacity="0.3" className="dark:stop-[#2e7d32] dark:stop-opacity-[0.12]" />
            <stop offset="60%" stopColor="#b3e5fc" stopOpacity="0.3" className="dark:stop-[#1565c0] dark:stop-opacity-[0.12]" />
            <stop offset="100%" stopColor="#e1f5fe" stopOpacity="0.4" className="dark:stop-[#0d47a1] dark:stop-opacity-[0.15]" />
          </linearGradient>

          <linearGradient id="mainGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1b5e20" stopOpacity="0.15" />
            <stop offset="30%" stopColor="#2e7d32" stopOpacity="0.12" />
            <stop offset="60%" stopColor="#1565c0" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#0d47a1" stopOpacity="0.15" />
          </linearGradient>

          <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#81c784" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#4caf50" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="leafGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#66bb6a" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#4caf50" stopOpacity="0.15" />
          </linearGradient>

          <pattern id="paperTexture" patternUnits="userSpaceOnUse" width="100" height="100">
            <rect width="100" height="100" fill="#f5f5dc" opacity="0.05" className="dark:fill-[#1a1a1a] dark:opacity-[0.1]" />
            <circle cx="20" cy="20" r="1" fill="#d7ccc8" opacity="0.1" className="dark:fill-[#424242] dark:opacity-[0.15]" />
            <circle cx="80" cy="40" r="0.5" fill="#d7ccc8" opacity="0.1" className="dark:fill-[#424242] dark:opacity-[0.12]" />
            <circle cx="50" cy="70" r="1.5" fill="#d7ccc8" opacity="0.08" className="dark:fill-[#424242] dark:opacity-[0.1]" />
          </pattern>

          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
        </defs>

        <rect width="100%" height="100%" fill={isDark ? "url(#mainGradientDark)" : "url(#mainGradient)"} />
        <rect width="100%" height="100%" fill="url(#paperTexture)" />

        <g className="nature-elements" opacity="0.2">
          <g className="leaf-group-1">
            <path
              d="M 200 300 Q 220 280 240 300 Q 260 320 240 340 Q 220 360 200 340 Q 180 320 200 300"
              fill="url(#leafGradient)"
              className="interactive-element"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 5,-10; 0,0"
                dur="8s"
                repeatCount="indefinite"
              />
            </path>
          </g>

          <g className="leaf-group-2">
            <path
              d="M 800 200 Q 820 180 840 200 Q 860 220 840 240 Q 820 260 800 240 Q 780 220 800 200"
              fill="url(#leafGradient)"
              className="interactive-element"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; -8,12; 0,0"
                dur="10s"
                repeatCount="indefinite"
              />
            </path>
          </g>

          <g className="leaf-group-3">
            <path
              d="M 1500 400 Q 1520 380 1540 400 Q 1560 420 1540 440 Q 1520 460 1500 440 Q 1480 420 1500 400"
              fill="url(#leafGradient)"
              className="interactive-element"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 6,-8; 0,0"
                dur="12s"
                repeatCount="indefinite"
              />
            </path>
          </g>

          <path
            d="M 100 600 Q 200 500 300 600 Q 400 700 500 600 Q 600 500 700 600"
            stroke={colors.green}
            strokeWidth="2"
            fill="none"
            opacity="0.15"
            strokeDasharray="5,5"
          />

          <path
            d="M 1200 800 Q 1300 700 1400 800 Q 1500 900 1600 800 Q 1700 700 1800 800"
            stroke="#4caf50"
            className="dark:stroke-[#4caf50]"
            strokeWidth="2"
            fill="none"
            opacity="0.12"
            strokeDasharray="5,5"
          />
        </g>

        <g className="digital-elements" opacity="0.25">
          <g className="circuit-pattern" transform="translate(400, 300)">
            <path
              d="M 0 0 L 100 0 M 50 0 L 50 50 M 0 50 L 100 50"
              stroke="#64b5f6"
              className="dark:stroke-[#1e88e5]"
              strokeWidth="1.5"
              fill="none"
              className="interactive-element"
            />
            <circle cx="0" cy="0" r="3" fill="#42a5f5" className="interactive-element" />
            <circle cx="100" cy="0" r="3" fill="#42a5f5" className="interactive-element" />
            <circle cx="50" cy="50" r="3" fill="#42a5f5" className="interactive-element" />
          </g>

          <g className="circuit-pattern" transform="translate(1200, 600)">
            <path
              d="M 0 0 L 80 0 M 40 0 L 40 60 M 0 60 L 80 60"
              stroke="#64b5f6"
              className="dark:stroke-[#1e88e5]"
              strokeWidth="1.5"
              fill="none"
              className="interactive-element"
            />
            <circle cx="0" cy="0" r="3" fill="#42a5f5" className="interactive-element" />
            <circle cx="80" cy="0" r="3" fill="#42a5f5" className="interactive-element" />
            <circle cx="40" cy="60" r="3" fill="#42a5f5" className="interactive-element" />
          </g>

          <g className="open-source-symbol" transform="translate(600, 800)">
            <circle cx="0" cy="0" r="25" stroke="#66bb6a" strokeWidth="2" fill="none" opacity="0.3" />
            <path
              d="M -15 -5 L -5 -5 L 0 0 L -5 5 L -15 5"
              stroke="#66bb6a"
              className="dark:stroke-[#4caf50]"
              strokeWidth="2"
              fill="none"
              opacity="0.4"
            />
            <circle cx="15" cy="0" r="8" stroke="#66bb6a" strokeWidth="1.5" fill="none" opacity="0.3" />
          </g>

          <g className="share-arrows" transform="translate(1600, 200)">
            <path
              d="M 0 0 L 30 0 M 25 -5 L 30 0 L 25 5"
              stroke={colors.green}
              strokeWidth="2"
              fill="none"
              opacity="0.3"
            />
            <path
              d="M 0 0 L 0 30 M -5 25 L 0 30 L 5 25"
              stroke={colors.green}
              strokeWidth="2"
              fill="none"
              opacity="0.3"
            />
            <circle cx="0" cy="0" r="4" fill="#66bb6a" opacity="0.4" />
          </g>
        </g>

        <g className="geometric-patterns" opacity="0.2">
          <g className="hexagon-group" transform="translate(300, 100)">
            <polygon
              points="0,-20 17.32,-10 17.32,10 0,20 -17.32,10 -17.32,-10"
              stroke="#90caf9"
              className="dark:stroke-[#64b5f6]"
              strokeWidth="1.5"
              fill="none"
              className="interactive-element"
            />
            <polygon
              points="0,-12 10.39,-6 10.39,6 0,12 -10.39,6 -10.39,-6"
              stroke="#64b5f6"
              className="dark:stroke-[#1e88e5]"
              strokeWidth="1"
              fill="none"
              opacity="0.5"
            />
          </g>

          <g className="hexagon-group" transform="translate(1700, 900)">
            <polygon
              points="0,-25 21.65,-12.5 21.65,12.5 0,25 -21.65,12.5 -21.65,-12.5"
              stroke="#90caf9"
              className="dark:stroke-[#64b5f6]"
              strokeWidth="1.5"
              fill="none"
              className="interactive-element"
            />
          </g>

          <g className="connected-lines" transform="translate(100, 900)">
            <line x1="0" y1="0" x2="50" y2="30"             stroke={colors.green} strokeWidth="1.5" opacity="0.3" />
            <line x1="50" y1="30" x2="100" y2="0" stroke={colors.green} strokeWidth="1.5" opacity="0.3" />
            <line x1="100" y1="0" x2="150" y2="40" stroke={colors.green} strokeWidth="1.5" opacity="0.3" />
            <circle cx="0" cy="0" r="3" fill={colors.greenLight} opacity="0.4" />
            <circle cx="50" cy="30" r="3" fill={colors.greenLight} opacity="0.4" />
            <circle cx="100" cy="0" r="3" fill={colors.greenLight} opacity="0.4" />
            <circle cx="150" cy="40" r="3" fill={colors.greenLight} opacity="0.4" />
          </g>
        </g>

        <g className="education-elements" opacity="0.25">
          <g className="book-icon" transform="translate(500, 150)">
            <rect x="-15" y="-10" width="30" height="20" rx="2" stroke={colors.green} strokeWidth="2" fill="none" />
            <line x1="-5" y1="-10" x2="-5" y2="10" stroke={colors.green} strokeWidth="1.5" />
            <line x1="5" y1="-10" x2="5" y2="10" stroke={colors.green} strokeWidth="1.5" />
          </g>

          <g className="pen-icon" transform="translate(1100, 150)">
            <path
              d="M -10 10 L 0 -10 L 10 10"
              stroke="#64b5f6"
              className="dark:stroke-[#1e88e5]"
              strokeWidth="2"
              fill="none"
            />
            <line x1="0" y1="-10" x2="0" y2="10" stroke="#64b5f6" strokeWidth="1.5" />
          </g>

          <g className="computer-icon" transform="translate(200, 1000)">
            <rect x="-20" y="-12" width="40" height="25" rx="2" stroke={colors.blueLight} strokeWidth="2" fill="none" />
            <rect x="-15" y="-7" width="30" height="15" fill={colors.blue} opacity={isDark ? "0.15" : "0.2"} />
            <rect x="-5" y="13" width="10" height="3" rx="1" stroke={colors.blueLight} strokeWidth="1.5" fill="none" />
          </g>

          <g className="people-silhouette" transform="translate(1400, 1000)">
            <circle cx="0" cy="-15" r="8" stroke={colors.green} strokeWidth="2" fill="none" />
            <path
              d="M 0 -7 Q -15 10 -15 25 Q -15 35 -10 35 Q -5 35 -5 30 Q -5 20 0 10 Q 5 20 5 30 Q 5 35 10 35 Q 15 35 15 25 Q 15 10 0 -7"
              stroke={colors.green}
            className="dark:stroke-[#66bb6a]"
              strokeWidth="2"
              fill="none"
            />
          </g>

          <g className="connection-flow" transform="translate(800, 500)">
            <path
              d="M 0 0 Q 100 -50 200 0 Q 300 50 400 0"
              stroke="#66bb6a"
              className="dark:stroke-[#4caf50]"
              strokeWidth="2"
              fill="none"
              opacity="0.3"
              strokeDasharray="5,5"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;20"
                dur="3s"
                repeatCount="indefinite"
              />
            </path>
            <circle cx="0" cy="0" r="4" fill="#66bb6a" opacity="0.5">
              <animate
                attributeName="opacity"
                values="0.5;0.8;0.5"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="200" cy="0" r="4" fill="#66bb6a" opacity="0.5">
              <animate
                attributeName="opacity"
                values="0.5;0.8;0.5"
                dur="2s"
                begin="0.5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="400" cy="0" r="4" fill="#66bb6a" opacity="0.5">
              <animate
                attributeName="opacity"
                values="0.5;0.8;0.5"
                dur="2s"
                begin="1s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </g>

        <g className="floating-particles" opacity="0.15">
          {Array.from({ length: 20 }).map((_, i) => {
            const x = (i * 150) % 1920
            const y = (i * 200) % 1080
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r={2 + (i % 3)}
                fill="#81c784"
                className="dark:fill-[#66bb6a]"
                className="interactive-element"
              >
                <animate
                  attributeName="cy"
                  values={`${y};${y - 30};${y}`}
                  dur={`${5 + (i % 5)}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.15;0.3;0.15"
                  dur={`${3 + (i % 4)}s`}
                  repeatCount="indefinite"
                />
              </circle>
            )
          })}
        </g>
      </svg>
    </div>
  )
}

