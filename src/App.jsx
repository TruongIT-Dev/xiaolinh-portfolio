import './App.css'
import { Route, Routes } from 'react-router-dom'
import { CV, Hobby, Home, Job, MainLayout, Unavaiable } from './routes/router'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/hobby' index element={<Hobby />} />
          <Route path='/job' element={<Job />} />
          <Route path='/cv' element={<CV />} />


          <Route path='/error' element={<Unavaiable />} />
          <Route path='*' element={<Unavaiable />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
