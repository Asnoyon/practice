import React from "react";
import Increment from "./component/Increment";
// import AppC from './component/app'
// import State from "./component/state";
const App = () => {
  return (
    <>
      {/* <AppC/> */}
      {/* <State/> */}
      <Increment />
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
