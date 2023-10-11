import { useEffect, useState } from "react";
function IncrementCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const hello = setInterval(() => setCount((prev) => prev + 1), 1000);
    return () => {
      console.log("Clearing Interval");
      clearInterval(hello);
    };
  }, []);

  return <div className="div">count: {count}</div>;
}
function Increment() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Counter
      </button>
      {show && <IncrementCounter />}
    </div>
  );
}
export default Increment;
