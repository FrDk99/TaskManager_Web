import './App.css'
import { Navigate, Route, Routes } from 'react-router'
import { LoginPage } from './Login/pages/LoginPage'
import { PrivateRouter } from './routes/PrivateRouter'
import { DashboardPage } from './Dashboard/pages/DashboardPage'

function App() {

  return (
    <>

      <Routes>

        <Route path='/login' element={<LoginPage />}></Route>
        <Route path="/manager" element={<PrivateRouter />}>
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
        <Route path='*' element={<Navigate to="/login" />}></Route>

      </Routes>


    </>
  )
}

export default App
