import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  if (!localStorage.getItem('id')) return <Navigate to='/' replace />
  return children
}

export default ProtectedRoute