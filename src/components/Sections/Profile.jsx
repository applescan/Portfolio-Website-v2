import React from "react";
import styled from "styled-components";
// Assets
import HeaderImage from "../../assets/img/felicia-profile-2.png";
import Dots from "../../assets/svg/Dots";
// Components
import FullButton from "../Buttons/FullButton";

export default function Header() {

  return (
    <Wrapper id="home" className="container">
      <LeftSide>
        <div>
          <h1 className="extraBold font60">Hi there, </h1>
          <h2>I’m Felicia, a web developer who turns coffee into code. Fueled by caffeine, I turn ideas into reality. ☕👩‍💻</h2>
          <br></br>
          <p className="font15"> I thrive on creating exceptional web applications. With expertise in TypeScript, Next.js, React, Node.js, SQL.
              I leverage my technical skills and deep understanding of user needs to build engaging and scalable applications. </p>
          <br></br>
          <p className="font15"> I'm all about creating a beautiful harmony between solid code and user-focused applications. </p>

          <br></br>
          <ButtonsRow className="flexNullCenter">
            <ResponsiveButton>
              <a href="https://www.linkedin.com/in/felicia-fel/" target="_blank" rel="noopener noreferrer">
                <FullButton title="Linkedin" border={true} />
              </a>
            </ResponsiveButton>
            <ResponsiveButton>
              <a href="https://github.com/applescan" target="_blank" rel="noopener noreferrer">
                <FullButton title="Github" border={false} />
              </a>
            </ResponsiveButton>
          </ButtonsRow>
          <div style={{ paddingTop: "10px" }}>
            <ResponsiveButton wide>
              <a href="https://www.institutedata.com/blog/unlocking-potential-felicias-journey-from-design-to-software-engineering/" target="_blank" rel="noopener noreferrer">
                <FullButton title="My Software Dev Journey: An Interview with Institute of Data" border={true} />
              </a>
            </ResponsiveButton>
          </div>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img className="radius8" height={450} width={450} src={HeaderImage} alt="office" style={{ zIndex: 9 }} />
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper>
        <GreyDiv className="lightBg"></GreyDiv>
      </RightSide>
    </Wrapper>
  );
}


const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 5%;
  @media (max-width: 960px) {
    flex-direction: column;
    padding: 15% 10%;
  }
`;

const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    text-align: left;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  width: 100%
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;
const ButtonsRow = styled.div`
  padding-top: 10px;
  @media (max-width: 960px) {
    justify-content: start;
    padding: 10% 0;
  }
`;
const ResponsiveButton = styled.div`
  width: calc(50% - 7.5px); /* 50% of the available width minus half the margin */
  margin: 5px; /* provides space between stacked buttons */
  
  @media (max-width: 768px) {
    width: 100%;
  }
  
  ${props => props.wide && `
    width: 100%;
  `}
`;
