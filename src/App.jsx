import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Axios } from './axios'
import { Fatch } from './fatch'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Axios />} />
          <Route path="/fatch" element={<Fatch/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
