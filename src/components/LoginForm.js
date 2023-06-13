import { useState } from "react"

export default function LoginForm(props) {

  const [loginVisible, setLoginVisible] = useState(false)

  const hideWhenVisible = { display: loginVisible ? 'none': ''}
  const showWhenVisible = { display: loginVisible ? '': 'none'}

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={() => setLoginVisible(true)}>Login</button>
      </div>
      <div style={showWhenVisible}>
        <form onSubmit={props.handlerSubmit}>
          <div>
            <input
              type='text'
              value={props.username}
              name='Username'
              placeholder='Username'
              onChange={props.handlerUsernameChange}
            />
          </div>
          <div>
            <input
              type='password'
              value={props.password}
              name='Password'
              placeholder='Password'
              onChange={props.handlerPasswordChange}
            />
          </div>
          <button>
            Login
          </button>
        </form>
        <button onClick={()=> setLoginVisible(false)}>Cancel</button>
      </div>
    </div>
  )
}
