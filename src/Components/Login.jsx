import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let history = useHistory();
  const host = "http://localhost:5000"

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the authtoken and redirect
      localStorage.setItem("token", json.authtoken);
      history.push("/")
    } else {
      alert("Invalid Credentials");
    }
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })   // ... is a spread operator
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3" >
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control border-none shadow-sm" id="email" name="email" aria-describedby="email" value={credentials.email} onChange={onChange} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control border-none shadow-sm" id="password" name="password" value={credentials.password} onChange={onChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login
