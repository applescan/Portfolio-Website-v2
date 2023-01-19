import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="whiteBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <StyleP className="font13">
              © {getCurrentYear()} - <span className="purpleColor font13">Felicia Fel</span> All Right Reserved | Email: <a href={"mailto:feliu.ren@gmail.com"}>feliu.ren@gmail.com</a>
            </StyleP>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  justify-content: center;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: row;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;