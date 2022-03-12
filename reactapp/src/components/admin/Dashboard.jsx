import DisplayUser from "./DisplayUser";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <div className="dashboard_content">
      <Navbar />
      <DisplayUser />
    </div>
  );
}

export default Dashboard;