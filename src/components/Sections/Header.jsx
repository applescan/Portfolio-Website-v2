import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'
import { Link } from "react-scroll";
// Assets
import HeaderImage from "../../assets/img/felicia-profile.png";
import Dots from "../../assets/svg/Dots";
// Components
import FullButton from "../Buttons/FullButton";

export default function Header() {

  return (
    <Wrapper id="home" className="container">
      <LeftSide>
        <div>
          <h1 className="extraBold font60">Hi there, </h1>
          <h2>I'm Felicia. A Web Developer & UX Designer</h2>
          <br></br>
          <p className="font15">As a Front-end Developer at Data Insight, I bring a unique perspective to the development process.
            I have a solid foundation in programming languages, frameworks, and software architecture, as well as an understanding of human-centered design, including user research, wireframing,
            prototyping, and usability testing. I have leveraged these skills to create intuitive and engaging user experiences
            that are both technically sound and scalable, making me a valuable asset to the team.
          </p>
          <br></br>
          <ButtonsRow className="flexNullCenter">
            <div style={{ width: "190px" }}>
              <a href="https://www.linkedin.com/in/felicia-fel/" target="_blank" rel="noopener noreferrer">
                <FullButton title="Linkedin" border={true} />
              </a>
            </div>
            <div style={{ width: "190px", marginLeft: "15px" }}>
              <a href="https://github.com/applescan" target="_blank" rel="noopener noreferrer">
                <FullButton title="Github" border={false} />
              </a>
            </div>
          </ButtonsRow>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img className="radius8" src={HeaderImage} alt="office" style={{ zIndex: 9 }} />
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

