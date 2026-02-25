'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function AutoRefresh() {
  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      router.refresh()
    }, 5000) // refresh every 5 seconds

    return () => clearInterval(interval)
  }, [router])

  return null
}