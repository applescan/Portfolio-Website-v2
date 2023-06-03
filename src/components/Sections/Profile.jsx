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
          <h2>My name is Felicia, a vibrant fusion of Web Developer and UX Designer</h2>
          <br></br>
          <p className="font15">As a software engineer, I thrive on crafting outstanding web applications.
            I'm proficient in Typescript, Next.js, React, Node.js, SQL, and more.
            As part of the team at Generate Zero, I apply these tech skills and my deep understanding of user needs to create engaging, scalable experiences.  </p>
          <br></br>
          <p className="font15"> I'm all about creating a beautiful harmony between solid code and user-focused design - it's like my secret recipe for being a helpful team player! </p>

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

