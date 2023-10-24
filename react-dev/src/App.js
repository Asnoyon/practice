import { useEffect, useState } from "react";
import Greet from "./component/Greet";
import { BrowserRouter } from "react-router-dom";
import UserList from "./component/UserList";
import { Data } from "./Data";
import LoaderHoc from "./shared/LoaderHoc";
import Main from "./fetch/App";
import Navigate from "./routes/Navigate";

const UserListWithLoader = LoaderHoc(UserList);
const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setUser(Data);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <Greet name="Noyon" />
      <UserListWithLoader users={user} isLoading={loading} />
      <Main />
      <BrowserRouter>
        <Navigate />
      </BrowserRouter>
    </div>
  );
};

export default App;
