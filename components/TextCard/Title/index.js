import React from "react";

const Title = (props) => {
  const { text } = props;

  return <h1>{text}</h1>;
};

export default React.memo(Title);
