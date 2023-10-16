import { SimpleHoc } from "../shared/SimpleHoc";
const Greet = (props) => {
    console.log(props)
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <p>This message is getting displayed from Higher order components : {props.newProps}</p>
    </div>
  );
};

export default SimpleHoc(Greet);
