import React, { useState } from 'react'
import './Login.css';
import assets from '../../assets/assets';
import { login, signup} from '../../config/Firebase';
const Login = () => {
  const [currentState, setCurrentState] = useState("Sign up");
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentState === 'Sign up') {
      signup(userName, email, password);
      console.log("Data of the users", {
        "UserName": userName,
        "Email": email,
        "password": password,
      })
    }
    else {
      login(email, password);
      console.log("Data of the users in login",{
        "Email": email,
        "password": password
      })
    }
  }
  return (
    <div className="login">
      <img src={assets.logo_big} alt='' className="logo" />
      <form onSubmit={handleSubmit} action="" className='login-form'>
        <h2>
          {currentState}
        </h2>
        {currentState === 'Sign up' ? (<input type="text" onChange={(e) => { setUserName(e.target.value) }} value={userName} placeholder='username' className="form-input" required />) : ''}
        <input type="email" onChange={(e) => { setEmail(e.target.value) }} value={email} placeholder="Email address" className="form-input" required />
        <input type="text" placeholder='password' onChange={(e) => { setPassword(e.target.value) }} value={password} className="form-input" required />
        <button type="submit">{currentState === 'Sign up' ? 'Sign Up' : 'Login'}</button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>
        <div className="login-forgot">
          {currentState === 'Sign up' ? (<p className="login-toggle">
            Already have an account <span onClick={() => { setCurrentState("Login") }}>Login</span>
          </p>) : <p className="login-toggle">
            If you have not an account <span onClick={() => { setCurrentState("Sign up") }}>Create Account</span>
          </p>}

        </div>
      </form>
    </div>
  )
}

export default Login
