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
            Over the past three years, I've gotten my hands dirty with everything from crafting interfaces to squashing bugs and adding cool new features based on what users are asking for. 
            What I love doing is figuring out what users need and making it happen, coding it into reality. 
            I believe that understanding people is just as important as understanding code, and that’s what I bring to the table.
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
              <p>💁 I find it incredibly rewarding to tackle complex problems and thrive on the challenge of software development. 
                It feels like solving a puzzle, and I absolutely love it!</p>
            </li>
            <br></br>
            <li>
              <p>✅ I believe my strengths can significantly contribute to making the tech world more user-friendly. 
                I'm all about enhancing communication within teams to build amazing products that end-users will adore. 
                I can't wait to dive in and start creating solutions that make everyone's life a bit easier.</p>
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
