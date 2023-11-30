import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DoctorDataProvider from './useHooks/DoctorDataProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <DoctorDataProvider>
    <App />
  </DoctorDataProvider>

)
