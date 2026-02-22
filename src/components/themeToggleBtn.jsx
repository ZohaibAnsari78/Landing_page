import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({ theme, setTheme }) => {

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (!theme) {
      setTheme(stored || (prefersDarkMode ? 'dark' : 'light'))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [theme])

  return (
    <>
      <button>
        {theme === 'dark' ? (
          <img onClick={() => setTheme('light')} src={assets.sun_icon} className='w-8 h-8 p-1.5 border border-gray-500 rounded-full' alt="Switch to light" />
        ) : (
          <img onClick={() => setTheme('dark')} src={assets.moon_icon} className='w-8 h-8 p-1.5 border border-gray-500 rounded-full' alt="Switch to dark" />
        )}
      </button>
    </>
  )
}

export default ThemeToggleBtn
