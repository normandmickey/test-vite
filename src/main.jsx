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
        <a className="button" href="./">Explore</a>
        <a className="button secondary" href="#next">Get Started</a>
      </div>
      <section id="next">
        <p className="subtitle">Start shaping this page into your real homepage, launch page, or landing flow.</p>
      </section>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
