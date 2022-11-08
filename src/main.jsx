import React from 'react'
import ReactDOM from 'react-dom/client'
import Charts from './components/charts'
import Header from './components/header/index'
import TableData from './components/table'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Charts />
    <TableData />
  </React.StrictMode>
)
