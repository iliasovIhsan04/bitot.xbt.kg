import React from "react";

const DifferenceComponent = ({ value }) => {
  const textStyle = {
    color: value > 0 ? "#00FC46" : "#F00",
  };

  return <span style={textStyle}>{value}</span>;
};

export default DifferenceComponent;
