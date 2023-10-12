import React from "react";

const List = (props) => {
  const { production } = props;
  return (
    <div>
      <li>{production}</li>
    </div>
  );
};

export default List;
