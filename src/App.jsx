import './App.css'
import { Countries } from './components/Countries/Countries'

function App() {

  return (
    <>
      <h1 className='text-5xl text-center mb-10'>Select a country to see newspapers</h1>
      <Countries></Countries>
    </>
  )
}

export default App
