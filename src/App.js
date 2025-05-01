import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLogin from './pages/Admin/AdminLogin'
import SDashboard from './pages/Station/Dashboard'

export default function App() {
  return (
    <Routes>
      {/* Admin paths */}
      <Route path='/' element={<AdminLogin />} />
      <Route path='/admin-dashboard' element={<SDashboard />} />
    </Routes>
  )
}
