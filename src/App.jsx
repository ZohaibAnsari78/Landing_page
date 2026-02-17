import { useState } from 'react'
import navbar from './components/navbar'

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <div className='dark:bg-black relative'>
    <navbar theme={theme} setTheme={setTheme}/>
    </div>
  
  )
}

export default App
