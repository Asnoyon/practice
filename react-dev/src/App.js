import { useEffect, useState } from "react";
// import Greet from "./component/Greet";
import UserList from "./component/UserList";
import { Data } from "./Data";
import LoaderHoc from "./shared/LoaderHoc";
import Main from "./fetch/App";

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
      {/* <Greet name="Noyon" /> */}
      <UserListWithLoader users={user} isLoading={loading} />
      <Main />
    </div>
  );
};

export default App;
