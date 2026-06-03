import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'

function App() {
  return (
    <main className="wrap">
      <span className="eyebrow">Built with SaaSClaw</span>
      <h1>test-vite</h1>
      <p className="subtitle">This Vite React starter was bootstrapped by SaaSClaw and is ready for preview deploys.</p>
      <div className="actions">
        <a className="button" href="https://app.saasclaw.ai/">Open SaaSClaw</a>
        <a className="button secondary" href="https://github.com/">View source</a>
      </div>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
