'use client'

import { useEffect, useRef } from 'react'

interface Spotlight {
  x: number        // anchor X (0–1 normalized)
  color: string    // rgb string
  angle: number    // current swing angle (radians)
  speed: number    // swing speed
  amplitude: number// swing width
  phase: number    // initial phase offset
  intensity: number
}

export function BoxingArenaBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let rafId: number
    let t = 0

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }

    /* ── spotlights config ──────────────────────── */
    const spotlights: Spotlight[] = [
      { x: 0.18, color: '212,168,71',  angle: 0, speed: 0.35, amplitude: 0.18, phase: 0,    intensity: 0.55 },
      { x: 0.50, color: '255,255,240', angle: 0, speed: 0.28, amplitude: 0.12, phase: 1.2,  intensity: 0.50 },
      { x: 0.82, color: '212,168,71',  angle: 0, speed: 0.40, amplitude: 0.16, phase: 2.4,  intensity: 0.55 },
      { x: 0.35, color: '204,41,54',   angle: 0, speed: 0.22, amplitude: 0.10, phase: 0.8,  intensity: 0.30 },
      { x: 0.65, color: '204,41,54',   angle: 0, speed: 0.30, amplitude: 0.10, phase: 3.5,  intensity: 0.30 },
    ]

    const drawSpotlight = (
      s: Spotlight,
      swing: number,  // current -1..1 swing
    ) => {
      const W = canvas.width
      const H = canvas.height

      /* source point — top of canvas, swinging horizontally */
      const srcX = (s.x + swing * s.amplitude) * W
      const srcY = -30

      /* cone tip spread at bottom */
      const spread = W * 0.22
      const targetX = srcX
      const targetY = H * 0.95

      /* cone shape via clipping path */
      ctx.save()
      ctx.beginPath()
      ctx.moveTo(srcX, srcY)
      ctx.lineTo(targetX - spread, targetY)
      ctx.lineTo(targetX + spread, targetY)
      ctx.closePath()

      /* radial gradient — bright at top, fade toward bottom */
      const grad = ctx.createRadialGradient(srcX, srcY, 0, srcX, srcY + H * 0.6, H * 0.9)
      grad.addColorStop(0,   `rgba(${s.color}, ${s.intensity})`)
      grad.addColorStop(0.3, `rgba(${s.color}, ${s.intensity * 0.45})`)
      grad.addColorStop(0.7, `rgba(${s.color}, ${s.intensity * 0.12})`)
      grad.addColorStop(1,   `rgba(${s.color}, 0)`)

      ctx.fillStyle = grad
      ctx.fill()

      /* sharp bright beam core */
      ctx.beginPath()
      ctx.moveTo(srcX, srcY)
      ctx.lineTo(targetX - spread * 0.15, targetY)
      ctx.lineTo(targetX + spread * 0.15, targetY)
      ctx.closePath()
      const coreGrad = ctx.createLinearGradient(srcX, srcY, targetX, targetY)
      coreGrad.addColorStop(0,   `rgba(${s.color}, ${s.intensity * 0.9})`)
      coreGrad.addColorStop(0.5, `rgba(${s.color}, ${s.intensity * 0.2})`)
      coreGrad.addColorStop(1,   `rgba(${s.color}, 0)`)
      ctx.fillStyle = coreGrad
      ctx.fill()

      /* glow dot at source */
      const glowR = ctx.createRadialGradient(srcX, srcY, 0, srcX, srcY, 60)
      glowR.addColorStop(0,   `rgba(${s.color}, 0.7)`)
      glowR.addColorStop(0.4, `rgba(${s.color}, 0.2)`)
      glowR.addColorStop(1,   `rgba(${s.color}, 0)`)
      ctx.beginPath()
      ctx.arc(srcX, srcY, 60, 0, Math.PI * 2)
      ctx.fillStyle = glowR
      ctx.fill()

      ctx.restore()
    }

    /* ── ring ropes — subtle horizontal lines ── */
    const drawRopes = () => {
      const W = canvas.width
      const H = canvas.height
      const ropeY = [H * 0.55, H * 0.65, H * 0.75]
      const colors = ['rgba(212,168,71,0.06)', 'rgba(212,168,71,0.04)', 'rgba(212,168,71,0.03)']

      ropeY.forEach((y, i) => {
        ctx.beginPath()
        ctx.moveTo(W * 0.05, y)
        ctx.lineTo(W * 0.95, y)
        ctx.strokeStyle = colors[i]
        ctx.lineWidth = i === 0 ? 2 : 1.5
        ctx.stroke()
      })

      /* corner posts — vertical glints */
      const posts = [W * 0.05, W * 0.95]
      posts.forEach((px) => {
        const grd = ctx.createLinearGradient(px, H * 0.45, px, H * 0.85)
        grd.addColorStop(0, 'rgba(212,168,71,0.0)')
        grd.addColorStop(0.3, 'rgba(212,168,71,0.12)')
        grd.addColorStop(0.7, 'rgba(212,168,71,0.12)')
        grd.addColorStop(1, 'rgba(212,168,71,0.0)')
        ctx.beginPath()
        ctx.moveTo(px, H * 0.45)
        ctx.lineTo(px, H * 0.85)
        ctx.strokeStyle = grd
        ctx.lineWidth = 3
        ctx.stroke()
      })
    }

    /* ── floor reflection ───────────────────── */
    const drawFloor = () => {
      const W = canvas.width
      const H = canvas.height
      const grad = ctx.createLinearGradient(0, H * 0.8, 0, H)
      grad.addColorStop(0, 'rgba(212,168,71,0.04)')
      grad.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, H * 0.8, W, H * 0.2)
    }

    const render = () => {
      t += 0.012
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      /* dark base — slightly lighter than pure black */
      ctx.fillStyle = '#111111'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      /* ambient haze */
      const haze = ctx.createRadialGradient(
        canvas.width / 2, 0,
        0,
        canvas.width / 2, canvas.height * 0.5,
        canvas.width * 0.7
      )
      haze.addColorStop(0, 'rgba(30,20,0,0.4)')
      haze.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = haze
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      /* draw spotlights */
      ctx.globalCompositeOperation = 'lighter'
      spotlights.forEach((s) => {
        const swing = Math.sin(t * s.speed + s.phase)
        drawSpotlight(s, swing)
      })
      ctx.globalCompositeOperation = 'source-over'

      drawRopes()
      drawFloor()

      rafId = requestAnimationFrame(render)
    }

    resize()
    render()

    const handleResize = () => { resize() }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
