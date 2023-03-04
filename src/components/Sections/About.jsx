import React from "react";
import styled from "styled-components";

export default function Services() {
  return (
    <div className="blueBg">
    <Wrapper id="about" className="container">
        <HeaderInfo>
          <h1 className="font40 extraBold whiteColor">A bit about me</h1>
          <p className="font16 whiteColor semiBold">
            Innovative, goal-oriented individual with three years of experience in the telecommunications and sustainability industry designing user interfaces for websites and mobile apps.
            Able to work on a complex framework with a track record of success. Competent in building user interfaces, writing and testing code, debugging complicated/simple problems,
            and putting new features into practice based on user feedback.
          </p>
          <br></br>
          <ul className="font16 whiteColor semiBold">

            <li>
              <p>👀 I specialize in Website Design, Graphic Design and Visual
                Content Creation</p>
            </li>
            <li>
              <p>🌱 I’m currently learning next js & typescript *lifetime learner!</p>
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
    </Wrapper>
      </div>
  );
}

const Wrapper = styled.section`
  width: 100%;
  display:flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 5%;
@media (max-width: 960px) {
  flex-direction: column;
  padding: 15% 10%;
}
`;

const HeaderInfo = styled.div`
  @media (max-width: 960px) {
    text-align: left;
  }
`;
