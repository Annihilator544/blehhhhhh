import React from 'react'
import ReactDOM from 'react-dom/client'
import Thanks from './components/Thanks'
import './index.css'
import MainPage from './components/MainPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Thanks />
    <MainPage />
  </React.StrictMode>,
)
