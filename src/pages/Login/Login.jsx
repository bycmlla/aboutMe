import './Login.css';
import React, { useState } from 'react';
// import Placeblack from '../../assets/place-black.png'
import { Link } from 'react-router-dom';



const Login = () => {
  const [emailL, setEmailL] = useState()
  const [passwordL, setPasswordL] = useState()

  return (
    <div className='login-div'>

      <form className='form-login'>
        <h1>Sign in</h1>
        <label id='label'>
          <span>E-mail</span>
          <input
            type="email"
            name='emailL'
            placeholder='Enter your e-mail'
            onChange={(e) => setEmailL(e.target.value)} />
        </label>
        <label id='label'>
          <span>Password</span>
          <input
            type="password"
            name='passwordL'
            placeholder='Enter your password'
            onChange={(e) => setPasswordL(e.target.value)} />
        </label>

        <div className='button-login'>
          <Link to="/"><button type="submit">continue</button></Link>

        </div>

        <div className='go-to-register'>
          <span>Don't have an account? <a href="/register">Create now</a></span>
        </div>
      </form>

      {/* <img src={Placeblack} alt="" id='img-login' /> */}

    </div>
  )
}

export default Login