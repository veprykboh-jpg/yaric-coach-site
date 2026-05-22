import Image from 'next/image'
import { NanoParticles } from './NanoParticles'

export function GymPhotoBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gym photo */}
      <Image
        src="/images/photo_2026-05-22_00-40-50.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
        aria-hidden
        sizes="100vw"
      />

      {/* Dark overlay — increased for readability */}
      <div className="absolute inset-0 bg-black/68" />

      {/* Smoke clouds — white/grey drift */}
      <div
        className="absolute rounded-full animate-smoke-a pointer-events-none"
        style={{
          width: 560, height: 380,
          top: '12%', left: '4%',
          background: 'radial-gradient(ellipse, rgba(255,255,255,0.09) 0%, transparent 68%)',
          filter: 'blur(70px)',
        }}
      />
      <div
        className="absolute rounded-full animate-smoke-b pointer-events-none"
        style={{
          width: 440, height: 320,
          top: '42%', right: '8%',
          background: 'radial-gradient(ellipse, rgba(255,255,255,0.07) 0%, transparent 65%)',
          filter: 'blur(85px)',
          animationDelay: '-9s',
        }}
      />
      <div
        className="absolute rounded-full animate-smoke-c pointer-events-none"
        style={{
          width: 680, height: 460,
          bottom: '0%', left: '22%',
          background: 'radial-gradient(ellipse, rgba(255,255,255,0.06) 0%, transparent 70%)',
          filter: 'blur(100px)',
          animationDelay: '-5s',
        }}
      />
      <div
        className="absolute rounded-full animate-smoke-d pointer-events-none"
        style={{
          width: 340, height: 260,
          top: '60%', left: '2%',
          background: 'radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, transparent 65%)',
          filter: 'blur(60px)',
          animationDelay: '-14s',
        }}
      />

      {/* Red accent smoke — matches gym's red lighting */}
      <div
        className="absolute rounded-full animate-smoke-b pointer-events-none"
        style={{
          width: 400, height: 300,
          top: '8%', right: '18%',
          background: 'radial-gradient(ellipse, rgba(180,20,20,0.08) 0%, transparent 68%)',
          filter: 'blur(90px)',
          animationDelay: '-3s',
        }}
      />
      <div
        className="absolute rounded-full animate-smoke-c pointer-events-none"
        style={{
          width: 320, height: 240,
          bottom: '20%', right: '5%',
          background: 'radial-gradient(ellipse, rgba(160,15,15,0.07) 0%, transparent 65%)',
          filter: 'blur(75px)',
          animationDelay: '-18s',
        }}
      />

      {/* Nano-tech particle network */}
      <NanoParticles />

      {/* Bottom ground fog */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: 0, left: 0, right: 0, height: '35%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)',
        }}
      />
    </div>
  )
}
