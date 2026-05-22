'use client'

import { useEffect, useRef } from 'react'

export function BoxingGym3D() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    let animId: number
    let cleanupFn: (() => void) | undefined

    import('three').then((THREE) => {
      if (!mountRef.current) return

      // ── Renderer ───────────────────────────────────────────
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
      renderer.setSize(mount.clientWidth || window.innerWidth, mount.clientHeight || window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
      renderer.shadowMap.enabled = true
      renderer.shadowMap.type = THREE.PCFSoftShadowMap
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.toneMappingExposure = 1.8
      mount.appendChild(renderer.domElement)

      // ── Scene ──────────────────────────────────────────────
      const scene = new THREE.Scene()
      scene.background = new THREE.Color(0x0f0c06)
      scene.fog = new THREE.Fog(0x0f0c06, 22, 55)

      // ── Camera ─────────────────────────────────────────────
      const w = mount.clientWidth || window.innerWidth
      const h = mount.clientHeight || window.innerHeight
      const camera = new THREE.PerspectiveCamera(62, w / h, 0.1, 120)
      camera.position.set(0, 3.5, 12)
      camera.lookAt(0, 1.5, -1)

      // ── Lights ─────────────────────────────────────────────
      scene.add(new THREE.AmbientLight(0x554433, 6))

      const mainSpot = new THREE.SpotLight(0xFFD070, 18, 40, Math.PI / 3.5, 0.4, 1.0)
      mainSpot.position.set(0, 13, 0)
      mainSpot.target.position.set(0, 0, 0)
      mainSpot.castShadow = true
      mainSpot.shadow.mapSize.set(512, 512)
      scene.add(mainSpot)
      scene.add(mainSpot.target)

      const redSpot = new THREE.SpotLight(0xFF3344, 12, 35, Math.PI / 4.5, 0.5, 1.2)
      redSpot.position.set(-11, 9, 6)
      redSpot.target.position.set(0, 0, 0)
      scene.add(redSpot)
      scene.add(redSpot.target)

      const fillSpot = new THREE.SpotLight(0xFFAA30, 10, 28, Math.PI / 4, 0.6, 1.5)
      fillSpot.position.set(11, 7, -4)
      fillSpot.target.position.set(0, 1, -2)
      scene.add(fillSpot)
      scene.add(fillSpot.target)

      const backFill = new THREE.SpotLight(0xFFCCCC, 6, 30, Math.PI / 4, 0.8, 2)
      backFill.position.set(0, 8, -18)
      backFill.target.position.set(0, 1, 0)
      scene.add(backFill)
      scene.add(backFill.target)

      // ── Floor ──────────────────────────────────────────────
      const floor = new THREE.Mesh(
        new THREE.PlaneGeometry(60, 60),
        new THREE.MeshLambertMaterial({ color: 0x2a1e0a })
      )
      floor.rotation.x = -Math.PI / 2
      floor.receiveShadow = true
      scene.add(floor)

      // Ceiling
      const ceiling = new THREE.Mesh(
        new THREE.PlaneGeometry(60, 60),
        new THREE.MeshLambertMaterial({ color: 0x111111 })
      )
      ceiling.rotation.x = Math.PI / 2
      ceiling.position.y = 15
      scene.add(ceiling)

      // Walls
      const wallMat = new THREE.MeshLambertMaterial({ color: 0x1c1c1c })

      const addWall = (px: number, py: number, pz: number, ry: number) => {
        const wall = new THREE.Mesh(new THREE.PlaneGeometry(44, 15), wallMat)
        wall.position.set(px, py, pz)
        wall.rotation.y = ry
        scene.add(wall)
      }
      addWall(0, 7.5, -22, 0)
      addWall(0, 7.5, 22, Math.PI)
      addWall(-22, 7.5, 0, Math.PI / 2)
      addWall(22, 7.5, 0, -Math.PI / 2)

      // ── Boxing Ring ────────────────────────────────────────
      const RX = 0, RZ = -2
      const RW = 7.5, RD = 7.5, RH = 0.32

      const platform = new THREE.Mesh(
        new THREE.BoxGeometry(RW, RH, RD),
        new THREE.MeshStandardMaterial({ color: 0x3a1515, roughness: 0.8 })
      )
      platform.position.set(RX, RH / 2, RZ)
      platform.castShadow = true
      platform.receiveShadow = true
      scene.add(platform)

      const ringCanvas = new THREE.Mesh(
        new THREE.BoxGeometry(RW - 0.15, 0.025, RD - 0.15),
        new THREE.MeshStandardMaterial({ color: 0xeee8cc, roughness: 0.9 })
      )
      ringCanvas.position.set(RX, RH + 0.012, RZ)
      ringCanvas.receiveShadow = true
      scene.add(ringCanvas)

      // Corner posts
      const postMat = new THREE.MeshStandardMaterial({ color: 0xCC2936, roughness: 0.35, metalness: 0.5 })
      const padMat = new THREE.MeshStandardMaterial({ color: 0x7a0f1a, roughness: 0.8 })
      const hw = RW / 2, hd = RD / 2
      const POST_H = 5.5

      const cornerPositions: [number, number][] = [
        [RX - hw, RZ - hd], [RX + hw, RZ - hd],
        [RX - hw, RZ + hd], [RX + hw, RZ + hd],
      ]
      cornerPositions.forEach(([cx, cz]) => {
        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, POST_H, 8), postMat)
        post.position.set(cx, RH + POST_H / 2, cz)
        post.castShadow = true
        scene.add(post)

        const pad = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.55, 8), padMat)
        pad.position.set(cx, RH + POST_H + 0.27, cz)
        scene.add(pad)
      })

      // Ropes
      const ropeMat = new THREE.MeshStandardMaterial({ color: 0xD4A847, roughness: 0.15, metalness: 0.6 })
      const ropeHeights = [1.0, 1.75, 2.5, 3.25].map(rh => RH + rh)
      ropeHeights.forEach(rh => {
        // Front & back
        const zboth = [RZ - hd, RZ + hd]
        zboth.forEach(rz => {
          const g = new THREE.CylinderGeometry(0.022, 0.022, RW, 6)
          g.rotateZ(Math.PI / 2)
          const r = new THREE.Mesh(g, ropeMat)
          r.position.set(RX, rh, rz)
          scene.add(r)
        })
        // Left & right
        const xboth = [RX - hw, RX + hw]
        xboth.forEach(rx => {
          const g = new THREE.CylinderGeometry(0.022, 0.022, RD, 6)
          g.rotateX(Math.PI / 2)
          const r = new THREE.Mesh(g, ropeMat)
          r.position.set(rx, rh, RZ)
          scene.add(r)
        })
      })

      // Steps
      const stepMat = new THREE.MeshLambertMaterial({ color: 0x140e04 })
      const stepSides = [-1, 1]
      stepSides.forEach(s => {
        const step = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.14, 0.85), stepMat)
        step.position.set(RX + s * (hw + 0.27), 0.07, RZ)
        scene.add(step)
      })

      // ── Heavy Bags ─────────────────────────────────────────
      interface BagInstance { pivot: InstanceType<typeof THREE.Group>; phase: number; speed: number }
      const bagInstances: BagInstance[] = []

      const createBag = (x: number, z: number, phase: number) => {
        const pivot = new THREE.Group()
        pivot.position.set(x, 11, z)

        const bagGroup = new THREE.Group()
        const bagMat = new THREE.MeshStandardMaterial({ color: 0x3a1212, roughness: 0.85 })
        const strapMat = new THREE.MeshStandardMaterial({ color: 0xD4A847, roughness: 0.25, metalness: 0.6 })

        const body = new THREE.Mesh(new THREE.CylinderGeometry(0.23, 0.19, 1.6, 12), bagMat)
        body.position.y = -1.6
        body.castShadow = true
        bagGroup.add(body)

        const topDome = new THREE.Mesh(
          new THREE.SphereGeometry(0.23, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2),
          bagMat
        )
        topDome.position.y = -0.8
        bagGroup.add(topDome)

        const botDome = new THREE.Mesh(
          new THREE.SphereGeometry(0.19, 10, 6, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2),
          bagMat
        )
        botDome.position.y = -2.4
        bagGroup.add(botDome)

        const strapYs = [-1.2, -2.0]
        strapYs.forEach(sy => {
          const strap = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.032, 4, 12), strapMat)
          strap.position.y = sy
          bagGroup.add(strap)
        })

        const chainMat = new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 0.9, roughness: 0.1 })
        for (let i = 0; i < 7; i++) {
          const link = new THREE.Mesh(new THREE.TorusGeometry(0.048, 0.014, 5, 8), chainMat)
          link.position.y = i * 0.1 - 0.3
          link.rotation.x = i % 2 === 0 ? 0 : Math.PI / 2
          bagGroup.add(link)
        }

        pivot.add(bagGroup)
        scene.add(pivot)
        bagInstances.push({ pivot, phase, speed: 0.22 + Math.random() * 0.18 })
      }

      createBag(-9, 4.5, 0)
      createBag(9, 3, 1.6)
      createBag(-7, -6, 0.9)

      // ── Speed Bag ──────────────────────────────────────────
      const sbGeo = new THREE.SphereGeometry(0.17, 10, 6)
      sbGeo.scale(0.85, 1.45, 0.85)
      const speedBag = new THREE.Mesh(
        sbGeo,
        new THREE.MeshStandardMaterial({ color: 0xCC2936, roughness: 0.5 })
      )
      speedBag.position.set(10, 4.5, -8)
      speedBag.castShadow = true
      scene.add(speedBag)

      const sbBoard = new THREE.Mesh(
        new THREE.BoxGeometry(0.7, 0.08, 0.7),
        new THREE.MeshStandardMaterial({ color: 0x2a1200, roughness: 0.9 })
      )
      sbBoard.position.set(10, 4.8, -8)
      scene.add(sbBoard)

      // ── Bench ──────────────────────────────────────────────
      const benchTop = new THREE.Mesh(
        new THREE.BoxGeometry(2.4, 0.12, 0.55),
        new THREE.MeshLambertMaterial({ color: 0x1a0f04 })
      )
      benchTop.position.set(10, 0.56, 6)
      benchTop.castShadow = true
      scene.add(benchTop)

      const legMat2 = new THREE.MeshLambertMaterial({ color: 0x2a2a2a })
      const legXs = [-1.0, 1.0]
      legXs.forEach(dx => {
        const leg = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.56, 0.45), legMat2)
        leg.position.set(10 + dx, 0.28, 6)
        scene.add(leg)
      })

      // ── Ceiling Lights ─────────────────────────────────────
      const bulbMat = new THREE.MeshBasicMaterial({ color: 0xFFEEAA })
      const fixtureMat = new THREE.MeshLambertMaterial({ color: 0x222222 })
      const bulbPositions: [number, number, number][] = [
        [-5, 13, -2], [5, 13, -2], [0, 13, 6], [0, 13, -9],
      ]
      bulbPositions.forEach(([bx, by, bz]) => {
        const fixture = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.2, 0.2, 8), fixtureMat)
        fixture.position.set(bx, by + 0.1, bz)
        scene.add(fixture)

        const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.1, 6, 4), bulbMat)
        bulb.position.set(bx, by - 0.05, bz)
        scene.add(bulb)

        const pt = new THREE.PointLight(0xFFD580, 4, 22, 1.5)
        pt.position.set(bx, by, bz)
        scene.add(pt)
      })

      // ── Animation ──────────────────────────────────────────
      let t = 0
      const CAM_R = 12

      const animate = () => {
        animId = requestAnimationFrame(animate)
        t += 0.006

        camera.position.x = Math.sin(t * 0.1) * CAM_R
        camera.position.z = Math.cos(t * 0.1) * CAM_R
        camera.position.y = 3.5 + Math.sin(t * 0.07) * 1
        camera.lookAt(0, 1.5, -1)

        bagInstances.forEach(({ pivot, phase, speed }) => {
          pivot.rotation.z = Math.sin(t * speed + phase) * 0.1
          pivot.rotation.x = Math.cos(t * speed * 0.65 + phase) * 0.055
        })

        speedBag.rotation.y = t * 2.5
        mainSpot.intensity = 18 + Math.sin(t * 0.65) * 4
        redSpot.intensity = 12 + Math.cos(t * 1.05 + 1.2) * 3

        renderer.render(scene, camera)
      }

      animate()

      const handleResize = () => {
        if (!mount) return
        const nw = mount.clientWidth || window.innerWidth
        const nh = mount.clientHeight || window.innerHeight
        camera.aspect = nw / nh
        camera.updateProjectionMatrix()
        renderer.setSize(nw, nh)
      }
      window.addEventListener('resize', handleResize)

      cleanupFn = () => {
        cancelAnimationFrame(animId)
        window.removeEventListener('resize', handleResize)
        if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
        renderer.dispose()
      }
    })

    return () => cleanupFn?.()
  }, [])

  return <div ref={mountRef} className="w-full h-full" />
}
