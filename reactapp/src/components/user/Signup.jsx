const Signup = () => {
  return (
    <div className="wrapper">
      <div className="squeeze_wrapper">
        <div className="squeeze_header">
          <h2 id="main_title">Bike Loan</h2>
          <p id="header_desc">Apply for a bike loan in 5 minutes!</p>
        </div>
        <div className="squeeze_form">
          <div className="register">
            <form>
              <h4 id="register_signup">Register</h4>
              <label>Enter admin/user</label>
              <input type="text" id="admin/user" placeholder="Admin/User" />
              <label>Username</label>
              <input type="text" id="username" placeholder="Username" />
              <label>Email</label>
              <input type="email" id="email" placeholder="Email" />
              <label>Mobile number</label>
              <input type="text" id="mobileNumber" placeholder="Mobile number" />
              <label>Password</label>
              <input type="password" id="password" placeholder="Password" />
              <label>Confirm password</label>
              <input type="password" id="confirmPassword" placeholder="Confirm password" />
              <button type="submit" id="submitButton">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;