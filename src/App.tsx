
import './App.css'
import { Metric } from './components/Metric'
import Products from './components/Products'

function App() {

  return (
    <div className='bg-sky-950 text-white'>
      <div className='flex h-full p-1 gap-1'>
        <Products />
        <Metric />
      </div>
    </div>
  )
}

export default App
