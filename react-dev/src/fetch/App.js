//Axios and Fetch Data
import { useEffect, useState } from "react";
import axios from "./Axios";
const Main = () => {
  const [cuteDog, setCuteDog] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  useEffect(() => {
    axios({
      url: "https://dog.ceo/api/breeds/image/random",
      method: "GET",
    }).then((res) => {
      setCuteDog(res.data.message);
      // console.log(res)
    });
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const dataToSubmit = {
      name,
      phone,
    };
    axios({
      url: "posts",
      method: "POST",
      data: dataToSubmit,
    }).then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <h1>Hey There</h1> <br />
      <p>Cute Dog Image Here</p>
      {cuteDog && <img width={400} height={300} src={cuteDog} alt="" />} <br />
      <form method="post" action="#" onSubmit={handleSubmit}>
        <label>
          Name : <br />
          <input
            type="text"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <br />
        </label>
        <label>
          Phone : <br />
          <input
            type="number"
            value={phone}
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
          />{" "}
          <br />
        </label>
        <input type="submit" />
        <input type="reset" />
      </form>
    </div>
  );
};

export default Main;
