import { useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Login Page</h1>
      <h2>{location.state.st}</h2>
    </div>
  );
};

export default Login;
