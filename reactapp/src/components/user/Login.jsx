const Signup = () => {
  return (
    <div className="wrapper">
      <div className="squeeze_wrapper">
        <div className="squeeze_header">
          <h2 id="main_title">Bike Loan</h2>
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
        </div>
      </div>
    </div>
  )
}

export default Signup;