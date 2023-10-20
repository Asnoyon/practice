import { useLocation } from "react-router-dom";

const Logout = () => {
  const location = useLocation();
  return (
    <div>
      <h1>Logout Page</h1>
      <h2> {location.state.name} Logout !~!!!</h2>
    </div>
  );
};

export default Logout;
