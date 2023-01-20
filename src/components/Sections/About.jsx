import React from "react";
import styled from "styled-components";

export default function Services() {
  return (
    <Wrapper id="about" className="blueBg">
      <div className="container">
        <HeaderInfo>
          <h1 className="font40 extraBold whiteColor">A bit about me</h1>
          <p className="font15 whiteColor semiBold">
            Innovative, goal-oriented individual with three years of experience in the telecommunications industry designing user interfaces for websites and mobile apps.
            Able to work on a complex framework with a track record of success. Competent in building user interfaces, writing and testing code, debugging complicated/simple problems,
            and putting new features into practice based on user feedback.
          </p>
          <br></br>
          <ul className="font15 whiteColor semiBold">

            <li>
              <p>👀 I specialize in Website Design, Graphic Design and Visual
                Content Creation</p>
            </li>
            <li>
              <p>🌱 I’m currently learning Full Stack Web Development *lifetime learner!</p>
            </li>
            <li>
              <p>💁 I love to work on problem-solving together with the
                combination of design thinking and
                software development.</p>
            </li>
            <li>
              <p>✔️ I hope with my skills and experience I can simplify the
                communication barriers by bridging the
                gap between designers and developers and creating an excellent product for end-users.</p>
            </li>
            <li>
              <p>🎯 I want to do a design that considers the user’s goals and
                provides the simplest way to achieve
                those goals!</p>
            </li>
          </ul>

        </HeaderInfo>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 15% 5%;
  width: 100%;
  min-height: 100vh;
  @media (max-width: 860px) {
    padding: 20% 10% 10% 10%;
  }
`;

const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: left;
  }
`;
