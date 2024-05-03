import React from "react";
import { PulseLoader } from "react-spinners";
import "./styles.scss";

const Loader = ({
  color = "#CEA965",
  height = "100vh",
  background = "#101010",
  size = 16,
}) => {
  return (
    <div
      className="loader-wrapper"
      style={{
        height,
        background,
      }}
    >
      <PulseLoader size={size} color={color} />
    </div>
  );
};

export default Loader;
