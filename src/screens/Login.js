import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

export default function Login() {
  const [credentials, setCredentials] = useState({
        
          email: "",
          password: "",
          
      });
  let navigate = useNavigate();
      const handleChange = (e) => {
          setCredentials({ ...credentials, [e.target.name]: e.target.value });
      };
  
      const handleSubmit = async (e) => {
          e.preventDefault();
          const response = await fetch('http://localhost:5000/api/loginuser', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                 
                  email: credentials.email,
                  password: credentials.password,
                 
              })
          });
  
          const json = await response.json();
          console.log(json);
          if (json.success) {
              alert("Login successfully");
              localStorage.setItem('authToken', json.authToken);
              console.log(localStorage.getItem('authToken'));
              navigate("/");
          } else {
              alert("Error creating account: " + json.error);
          }
      };
  return (
    <>
       <div className="container">
                  <form onSubmit={handleSubmit}>
                      
                      <div className="mb-3">
                          <label htmlFor="email" className="form-label">Email address</label>
                          <input
                              type="email"
                              className="form-control"
                              name="email"
                              value={credentials.email}
                              onChange={handleChange}
                          />
                          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                      </div>
                      <div className="mb-3">
                          <label htmlFor="password" className="form-label">Password</label>
                          <input
                              type="password"
                              className="form-control"
                              name="password"
                              value={credentials.password}
                              onChange={handleChange}
                          />
                      </div>
                     
                      <button type="submit" className="btn btn-primary">Submit</button>
                      <Link to="/Signup" className="m-3 btn btn-danger">Don't  have an account</Link>
                  </form>
              </div>
          
    </>
  )
}
