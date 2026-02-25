'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

export default function RouteReload() {
  const pathname = usePathname()
  const previousPath = useRef(pathname)

  useEffect(() => {
    if (previousPath.current !== pathname) {
      previousPath.current = pathname
      window.location.reload()
    }
  }, [pathname])

  return null
}