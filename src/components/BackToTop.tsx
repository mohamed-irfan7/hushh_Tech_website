import React, { useEffect, useState, useCallback } from 'react'

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false)

  const handleScroll = useCallback(() => {
    setVisible(window.scrollY > 300)
  }, [])

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    const throttled = () => {
      clearTimeout(timeout)
      timeout = setTimeout(handleScroll, 100)
    }
    window.addEventListener('scroll', throttled)
    return () => {
      window.removeEventListener('scroll', throttled)
      clearTimeout(timeout)
    }
  }, [handleScroll])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 z-50 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300"
    >
      ↑
    </button>
  )
}

export default BackToTop