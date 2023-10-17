import { useEffect, useState } from "react";

const Main = () => {
  const [cuteDog, setCuteDog] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((res) => {
        setCuteDog(res.message);
      });
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const dataToSubmit = {
      name,
      phone,
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(dataToSubmit),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then(res=>{console.log(res)})
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
