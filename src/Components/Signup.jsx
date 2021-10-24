import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Signup = (props) => {
  const [sCredentials, setsCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  let history = useHistory();
  const host = "http://localhost:5000"

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(sCredentials.password == sCredentials.cpassword){
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: sCredentials.name, email: sCredentials.email, password: sCredentials.password })
    });
    const json = await response.json();
    console.log(json);
    // Save the authtoken and redirect

    localStorage.setItem("token", json.authtoken);
    props.showAlert("Congratulations! Account created Successfully", "success");
    history.push("/")
  }
  else{
    props.showAlert("Passwords doesnt match", "danger")
  }
  }
  const onChange = (e) => {
    setsCredentials({ ...sCredentials, [e.target.name]: e.target.value })   // ... is a spread operator
  }
  return (
    <div className="container mt-5 pt-5">
      <h1 className="col-md-8 col-12 mx-auto">Signup  </h1>
      <div className="row g-3">
        <form onSubmit={handleSubmit}>
          <div className="col-md-8 col-12 mx-auto">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={sCredentials.name} onChange={onChange} placeholder="" required="" />
          </div>
          <div className="col-md-8 col-12 mx-auto">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" value={sCredentials.email} onChange={onChange} placeholder="you@example.com" />
          </div>
          <div className="col-md-8 col-12 mx-auto">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" value={sCredentials.password} onChange={onChange} placeholder="xxxxxxxxxxxxxxx"required minLength={5} />
          </div>
          <div className="col-md-8 col-12 mx-auto">
            <label htmlFor="cpassword" className="form-label">Password</label>
            <input type="password" className="form-control" id="cpassword" name="cpassword" value={sCredentials.cpassword} onChange={onChange} placeholder="xxxxxxxxxxxxxxx" required minLength={5}/>
          </div>
          <div className="col-md-8 col-12 mx-auto mt-3">
            <button type="submit" className="btn btn-outline-success">Signin</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup;
