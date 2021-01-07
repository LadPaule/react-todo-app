import React from "react";
import styled from "@emotion/styled";

const Condition = (props) => {
  const State = styled.h3`
    font-family: "Merriweather" "Lucida Sans", "Lucida Sans Regular",
      "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 1.2rem;
  `;
  const Temp = styled.h1`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1.5rem;
    font-weight: 200px;
  `;

  return (
    < >
      <Temp>20 ℃</Temp>
      <State>clouds</State>
    </ >
  );
};

export default Condition;
