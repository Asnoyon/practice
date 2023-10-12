import React, { useState } from "react";
import Increment from "./component/Increment";
import List from "./component/List";
// import AppC from './component/app'
// import State from "./component/state";
const App = () => {
  const [number, setNumber] = useState(0);
  const mfactor = [1, 2, 3, 4, 5];
  const multiply = mfactor.map((factor) => factor * number);
  return (
    <>
      {/* <AppC/> */}
      {/* <State/> */}
      <Increment />
      <h1>List in React</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      {multiply.map((multiple) => (
        <List production={multiple}/>
      ))}
    </>
  );
};
export default App;
// import { useEffect, useState } from "react";
// function IncrementCounter() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     setInterval(() => setCount((prev) => prev + 1), 5000);

//   }, []);

//   return (
//     <>
//       <div>Count :{count}</div>
//     </>
//   );
// }
// const App = () => {
//   const [show, setShow] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setShow(!show)}>
//         {show ? "Hide" : "Show"} Counter
//       </button>
//       {show && <IncrementCounter />}
//     </div>
//   );
// };

// export default App;
