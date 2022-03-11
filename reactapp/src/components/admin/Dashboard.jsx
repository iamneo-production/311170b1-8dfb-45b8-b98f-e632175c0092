import { Link } from "react-router-dom";
import DisplayUser from "./DisplayUser";

const Dashboard = () => {
  return (
    <div>
      <header className="navbar">
        <div className="navbar__title navbar__item">Bike Loan</div>
        <div className="navbar__item" id="adminAppliedLoans">
          <Link to="/">Applied Loan</Link>
        </div>
        <div className="navbar__item" id="AdminLoanDetails">
          <Link to="/">Loan Details</Link>
        </div>
        <div className="navbar__item" id="logout">
          <Link to="/">Logout</Link>
        </div>
      </header>
      <div className="dashboard_content">
        <DisplayUser />
      </div>
    </div >
  );
}

export default Dashboard;