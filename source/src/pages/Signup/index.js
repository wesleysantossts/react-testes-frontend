import { Component } from 'react'

class SignUp extends Component {
  render() {
    return (
      <>
        <h1>Sign Up</h1>
        <div>
          <form method="get">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="username" />
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="email" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="password" />
            <label htmlFor="passwordRepeat">Password Repeat</label>
            <input type="password" id="passwordRepeat" placeholder="password repeat" />
            <button type="submit" disabled>Sign Up</button>
          </form>
        </div>
      </>
    )
  }
}

export default SignUp