'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number; y: number
  vx: number; vy: number
  radius: number
  color: string
  alpha: number
  pulse: number
  pulseSpeed: number
}

const CYBER_GREEN  = '0,255,127'
const NEON_ORANGE  = '255,107,0'
const GOLD         = '212,168,71'

export function NanoParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let W = window.innerWidth
    let H = window.innerHeight

    canvas.width  = W
    canvas.height = H

    const COUNT = Math.min(Math.floor(W * H / 14000), 90)

    const pickColor = () => {
      const r = Math.random()
      if (r < 0.52) return CYBER_GREEN
      if (r < 0.78) return NEON_ORANGE
      return GOLD
    }

    const particles: Particle[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.8 + 0.6,
      color: pickColor(),
      alpha: Math.random() * 0.5 + 0.3,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.018 + Math.random() * 0.022,
    }))

    const LINK_DIST  = 130
    const LINK_DIST2 = LINK_DIST * LINK_DIST

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      // update
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.pulse += p.pulseSpeed
        if (p.x < 0) p.x = W
        if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H
        if (p.y > H) p.y = 0
      }

      // lines
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 > LINK_DIST2) continue
          const opacity = (1 - d2 / LINK_DIST2) * 0.18
          ctx.beginPath()
          ctx.strokeStyle = `rgba(${a.color},${opacity})`
          ctx.lineWidth = 0.6
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }

      // dots
      for (const p of particles) {
        const glow = Math.sin(p.pulse) * 0.25 + 0.75
        const alpha = p.alpha * glow

        // outer glow
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 5)
        grad.addColorStop(0,   `rgba(${p.color},${alpha * 0.35})`)
        grad.addColorStop(1,   `rgba(${p.color},0)`)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius * 5, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()

        // core dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color},${alpha})`
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    const onResize = () => {
      W = window.innerWidth
      H = window.innerHeight
      canvas.width  = W
      canvas.height = H
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}
