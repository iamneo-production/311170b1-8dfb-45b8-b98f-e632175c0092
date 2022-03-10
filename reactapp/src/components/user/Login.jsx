import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const Login = () => {
  return (
    <div className="wrapper">
      <div className="squeeze_wrapper">
        <div className="squeeze_header">
          <h2 id="main_title">
            <Link to="/">Bike Loan</Link>
          </h2>
          <p id="header_desc">Apply for a bike loan in 5 minutes!</p>
        </div>
        <div className="squeeze_form">
          <div className="login">
            <form>
              <h4 id="login_">Login</h4>
              <label>Email</label>
              <input type="email" id="email" placeholder="Email" />
              <label>Password</label>
              <input type="password" id="password" placeholder="Password" />
              <button type="submit" id="loginButton">Login</button>
            </form>
          </div>
          <div className="not_a">
            <p>
              Not a user? &nbsp;
              <Link to="/user/signup">Signup</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;