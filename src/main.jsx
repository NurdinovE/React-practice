import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import App from './App/App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React>,
)
