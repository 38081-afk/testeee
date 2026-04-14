import { useState } from 'react'
import fotocs2 from './assets/fotocs2.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <div className='fotocs2'>
          <img src="" alt="" />
        </div>

        <div className='login'>
          <div className='borda'>
          <h1>Counter-Strike 2</h1>
          <input type="text" className='usua' placeholder='Usuario'/>
          <input type="text" className='senha' placeholder='Senha'/>
          </div>
        </div>
        
        
      </main>
    </>
  )
}

export default App
