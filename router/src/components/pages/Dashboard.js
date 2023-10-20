import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const data = {
    name: "Noyon"
  }
  return (
    <div>
      <h1>Dashboard Page</h1>
      <button
        onClick={() => {
          navigate("/logout", {state:data});
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Dashboard;
