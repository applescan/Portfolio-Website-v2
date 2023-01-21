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

  const navigate = useNavigate()

  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <HeaderP>
            <h1 className="extraBold font60">Hi there, </h1>
            <h2>I'm Felicia. A Web Developer & UX Designer</h2>
            <p>At the moment I just finished my qualification in Full Stack Software Development with Auckland University of Technology &
              Institute of Data. Combined with my programme at UX Design Institute & Glasgow Caledonian University,
              I will be able to further the knowledge that I got from my software development qualification and apply it to human-centred design.</p>
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
          </HeaderP>
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
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
    padding: 5%;
  }
  @media (max-width: 560px) {
    flex-direction: column;
    padding: 15%;
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
const HeaderP = styled.div`
  padding: 0 5%;
  @media (max-width: 960px) {
    padding: 0 10%;
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
  padding-top: 20px;
  @media (max-width: 960px) {
    justify-content: start;
    padding: 10% 0;
  }
`;

