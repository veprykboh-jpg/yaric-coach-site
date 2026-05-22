'use client'

import dynamic from 'next/dynamic'

const BoxingGym3D = dynamic(
  () => import('@/components/ui/BoxingGym3D').then(m => ({ default: m.BoxingGym3D })),
  { ssr: false }
)

export function BoxingGym3DWrapper() {
  return <BoxingGym3D />
}
