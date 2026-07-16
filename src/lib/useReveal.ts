import { useEffect, useRef, useState } from 'react'

/**
 * Adds the `is-visible` class when the element scrolls into view.
 * Used together with the `.reveal` utility class for subtle entrances.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
) {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.unobserve(entry.target)
        }
      })
    }, options)
    obs.observe(el)
    return () => obs.disconnect()
  }, [options])

  return { ref, visible }
}
