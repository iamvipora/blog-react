import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index.jsx'
import Home from './pages/Home.jsx'
import Create from './pages/Create.jsx'
import View from './pages/View.jsx'
import Error from './pages/Error.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />}/>
        <Route 
          path='/home' 
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }/>
        <Route 
          path='/create' 
          element={
            <ProtectedRoute>
              <Create />
            </ProtectedRoute>
          }/>
          <Route 
          path='/view/:id' 
          element={
            <ProtectedRoute>
              <View />
            </ProtectedRoute>
          }/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
