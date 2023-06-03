import React from "react";
import styled from "styled-components";

export default function Services() {
  return (
    <div className="darkBg">
      <Wrapper id="about" className="container">
        <HeaderInfo>
          <h1 className="font40 bold whiteColor">A bit about me</h1>
          <br></br>
          <p className="font15 whiteColor regular">
            A dynamic blend of a Web Developer and UX Designer with an innovative, goal-oriented approach.
            I bring to the table three years of experience in the design industry,
            where I've honed my skills in designing user interfaces for websites and mobile apps.
            My track record speaks to my competence in building user interfaces, writing and testing code,
            debugging problems, and implementing new features based on user feedback.
            What sets me apart is my ability to seamlessly interweave solid coding with a deep understanding of user needs, which makes me a valuable addition to any team.
          </p>
          <br></br>
          <ul className="font15 whiteColor regular">

            <li>
              <p>🌱 As a tech enthusiast, I'm always ready to learn more!
                I have a special spot in my heart for Full Stack Web Development,
                and I am continually finding ways to grow in this area.</p>
            </li>
            <br></br>
            <li>
              <p>💁 I find it super rewarding to solve complex problems and love combining design thinking with software development.
                It's like piecing together a puzzle, and I adore it!</p>
            </li>
            <br></br>
            <li>
              <p>✅ I believe my strengths can help make our tech world a friendlier place.
                I'm keen on smoothing out the communication bumps between designers and developers,
                and I can't wait to create fantastic products that the end-users will love.</p>
            </li>
            <br></br>
            <li>
              <p>🎯 When it comes to design, I always put myself in the user's shoes. 
                I want to understand their needs and find the most straightforward way to help them reach their goals.</p>
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
