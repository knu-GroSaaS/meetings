import React, { useState } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // 로그인 처리 로직 추가
    console.log('Username:', username)
    console.log('Password:', password)
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="/Grosaas_logo.png" alt="Logo" className="logo" />
        <h2>
          <span className="highlight">GroSaaS</span> Dashboard
        </h2>
        <p>Please login to GroSaaS Dashboards</p>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  )
}

export default App
