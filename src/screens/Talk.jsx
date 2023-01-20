import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Title from "../components/Elements/Title";
import Images from "../components/Elements/Images";
import Talk1 from '../assets/img/talk/talk1.webp';
import Talk2 from '../assets/img/talk/talk2.webp';
import Image1 from '../assets/img/talk/1.webp';
import Image2 from '../assets/img/talk/2.webp';
import Image3 from '../assets/img/talk/3.webp';
import Image4 from '../assets/img/talk/4.webp';
import FullButton from "../components/Buttons/FullButton";
import Body from "../components/Elements/Body";
import List from "../components/Elements/List";
import { useNavigate } from "react-router-dom";

export default function NzLocum() {

  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Wrapper className="whiteBg">
      <div className="container">
        <HeaderInfo>
          <Title
            title="Deltapath Talk (Microsoft Teams Integration)"
            desc1="Initiate calls from Microsoft Teams on any device you have the application installed and start enjoying audio or video calls from anywhere.​​"
            desc2={`Outgoing calls launch the Deltapath Engage or Deltapath Mobile productivity application. 
            Download Deltapath Engage on Windows or macOS or download Deltapath Mobile on iOS or Android.`}
            skills="UI Design"
            year="2022"
          />
        </HeaderInfo>
        <Images img1={Talk1} alt1={"project image cover"} img2={Talk2} alt2={"project image cover"} />

        <Body
          title={'Problem:'}
          desc={`Dealing with so many applications is a very big and daunting part of our daily lives. 
          Messing with different applications only to make a phone call is a thing of the past. 
          In this project; I'm designing an app for the 
          Microsoft team to directly launch the Deltapath Engage or Deltapath Mobile productivity application.`}
        />

        <Body
          title={'Process:'}
          desc={`It was crucial that Deltapath Talk maintained its brand identity and did not merge with the Teams app while being an embedded app within Microsoft Teams. 
          The colours green, white, and blue serve as the design's foundation and are further 
          used as colour coding to distinguish between significant objects in the Deltapath Talk interface.`}
        />

        <Body
          title={'Results:'}
          desc={`Overall, we were successful in achieving our objectives, received favourable consumer feedback, and noticed an increase in the conversion rate.`}
        />

        <Images img1={Image1} alt1={"concept image 1"} img2={Image2} alt2={"concept image 2"} img3={Image3} alt3={"concept image 3"}
          img4={Image4} alt4={"concept image 4"} />


        <div style={{ width: "150px", paddingTop: "100px" }}>
          <FullButton title="Back" border={false} action={() => { navigate(-1) }} />
        </div>

      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
        padding: 10% 10% 5% 10%;
        width: 100%;
        @media (max-width: 860px) {
          padding: 25% 10% 10% 10%;
  }
        `;

const HeaderInfo = styled.div`
        @media (max-width: 860px) {
          text - align: left;
  }
        `;

const ButtonsRow = styled.div`
        @media (max-width: 860px) {
          justify - content: space-evenly;
  }
        `;
