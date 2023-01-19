import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#6c9ffb" : "#6c9ffb")};
  background-color: ${(props) => (props.border ? "transparent" : "#6c9ffb")};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#6c9ffb" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "#D3E6FF" : "#D3E6FF")};
    border: 1px solid #6c9ffb;
    color: ${(props) => (props.border ? "#6c9ffb" : "#6c9ffb")};
  }
`;

