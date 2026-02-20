import React from 'react'
import assets from '../assets/assets'

const themeToggleBtn = ({theme , setTheme}) => {
  return (
    <>
      <button>
        {theme === 'dark' ? (
            <img onClick={()=> setTheme('light')} src={assets.sun_icon} className='size-8.5 p-1.5 border border-gray-500 rounded-all' alt="" />
        ) : (
            <img onClick={()=> setTheme('light')} src={assets.moon_icon} className='size-8.5 p-1.5 border border-gray-500 rounded-all' alt="" />
        )}
      </button>
    </>
  )
}

export default themeToggleBtn
