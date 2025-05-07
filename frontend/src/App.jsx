import { useState } from 'react'
import GoogleLogin from './components/googleLogin.jsx'
import Dashboard from './components/dashboard.jsx'
import {  Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<GoogleLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
