import React from 'react'
const Login = () => {
  return (
    <div className='Login'>
      <h2>Login Page</h2>
      <form>
        <label>
          Email:
          <input type='email' name='email' />
        </label>
        <br />
        <label>
          Password:
          <input type='password' name='password' />
        </label>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login;
