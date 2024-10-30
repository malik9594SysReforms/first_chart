import React, { useState } from 'react'
import './Login.css';
import assets from '../../assets/assets';
const Login = () => {
  const [currentState, setCurrentState] = useState("Sign up")
  return (
    <div className="login">
      <img src={assets.logo_big} alt='' className="logo"/>
     <form action="" className='login-form'>
      <h2>
      {currentState}
      </h2>
      {currentState ==='Sign up'? (<input type="text" placeholder='username' className="form-input" required />):''}
      
      <input type="email" placeholder="Email address"  className="form-input" required />
      <input type="text" placeholder='password' className="form-input" required />
      <button type="submit">{currentState ==='Sign up'?'Sign Up':'Login'}</button>
      <div className="login-term">
        <input type="checkbox"/>
        <p>Agree to the terms of use & privacy policy.</p>
      </div>
      <div className="login-forgot">
        {currentState ==='Sign up'? (<p className="login-toggle">
          Already have an account <span onClick={()=>{setCurrentState("Login")}}>Login</span>
        </p>): <p className="login-toggle">
          If you have not an account <span onClick={()=>{setCurrentState("Sign up")}}>Create Account</span>
        </p>}
       
      </div>
     </form>
    </div>
  )
}

export default Login
