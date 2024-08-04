import React from 'react'
import ReactDOM from 'react-dom/client'
import InputPane from './components/InputPane'
import PreviewPane from './components/PreviewPane'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <div id="main">
    <InputPane />
    <PreviewPane />
    </div>
  </React.StrictMode>,
)
