import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home, MainLayout } from './routes/router'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
