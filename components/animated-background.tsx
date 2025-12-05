"use client"

import { useEffect } from "react"

export default function AnimatedBackground() {
  useEffect(() => {
    const body = document.body
    body.classList.add(
      "enable-eco-circles",
      "enable-network",
      "enable-leaves",
      "enable-hexagons",
      "enable-waves"
    )

    return () => {
      body.classList.remove(
        "enable-eco-circles",
        "enable-network",
        "enable-leaves",
        "enable-hexagons",
        "enable-waves"
      )
    }
  }, [])

  return (
    <>
      <div className="bg-element eco-circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-4"></div>
        <div className="circle circle-5"></div>
      </div>

      <div className="bg-element network-nodes">
        <div className="node node-1"></div>
        <div className="node node-2"></div>
        <div className="node node-3"></div>
        <div className="node node-4"></div>
        <div className="node node-5"></div>
        <div className="node node-6"></div>
        <svg className="network-lines">
          <line className="connection conn-1" x1="15%" y1="20%" x2="45%" y2="35%" />
          <line className="connection conn-2" x1="45%" y1="35%" x2="75%" y2="25%" />
          <line className="connection conn-3" x1="30%" y1="60%" x2="60%" y2="70%" />
          <line className="connection conn-4" x1="75%" y1="25%" x2="85%" y2="55%" />
        </svg>
      </div>

      <div className="bg-element leaf-particles">
        <div className="leaf leaf-1"></div>
        <div className="leaf leaf-2"></div>
        <div className="leaf leaf-3"></div>
        <div className="leaf leaf-4"></div>
        <div className="leaf leaf-5"></div>
        <div className="leaf leaf-6"></div>
      </div>

      <div className="bg-element hexagon-mesh">
        <div className="hex-row row-1">
          <div className="hexagon hex-1"></div>
          <div className="hexagon hex-2"></div>
          <div className="hexagon hex-3"></div>
          <div className="hexagon hex-4"></div>
        </div>
        <div className="hex-row row-2">
          <div className="hexagon hex-5"></div>
          <div className="hexagon hex-6"></div>
          <div className="hexagon hex-7"></div>
        </div>
      </div>

      <div className="bg-element flowing-waves">
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>
      </div>
    </>
  )
}

