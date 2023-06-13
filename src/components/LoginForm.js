import Toggable from "./Toggable";

export default function LoginForm(props) {

  return (
    <Toggable buttonLabel={'Login'}>
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
    </Toggable>
  )
}
