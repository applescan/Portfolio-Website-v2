import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Title from "../components/Elements/Title";
import Images from "../components/Elements/Images";
import Cti1 from '../assets/img/salesforce/cti1.webp';
import Image1 from '../assets/img/salesforce/1.webp';
import Image2 from '../assets/img/salesforce/2.webp';
import Image3 from '../assets/img/salesforce/3.webp';
import Image4 from '../assets/img/salesforce/4.webp';
import Image5 from '../assets/img/salesforce/5.webp';
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
            title="Deltapath Salesforce CTI Integration"
            desc1="Initiate calls from your Salesforce on any device you have the application installed and start enjoying audio or video calls from anywhere. 
            Enjoy Salesforce computer telephony integration (CTI).​"
            desc2={`Outgoing calls launch the Deltapath Engage or Deltapath Mobile productivity application. 
            Download Deltapath Engage on Windows or macOS or download Deltapath Mobile on iOS or Android.`}
            skills="UX & UI Design"
            year="2022"
          />
        </HeaderInfo>
        <Images img1={Cti1} alt1={"project image cover"} />

        <Body
          title={'Problem:'}
          desc={`Before the introduction of Open CTI (Computer Telephony Integration), 
        Salesforce users could only use the features of a CTI system after they installed a 
        CTI adapter program on their machines. These types of programs often included desktop software that required maintenance 
        and didn’t offer the benefits of cloud architecture. After the Open CTI implementation was introduced, 
        it’s now integrated with Salesforce using the Salesforce Call Center.`}
        />

        <br></br>

        <p>My responsibility in this project is to design the Open CTI implementations' user interface and user experience.</p>

        <List
          title={'Process:'}
          desc={`When rolling out all the screens, careful attention was paid so that the colour hierarchies
          were respected. White space was used generously to keep the layouts uncluttered and to balance out the vibrancy of the icon colours. 
          Using strong and simple geometry and confident typography, we created a quick and effective UI that looks good with the brand guidelines. 
          We used circular forms to create a more welcoming look for the application. The working process can be summarized to:​`}
          list1={`- Work on the software requirements with the product design manager.`}
          list2={`- Find out what Salesforce agents are in need of and what their pain points are.`}
          list3={`- I began working on redesigns for particular aspects of the calling experience, such as choosing transfer choices, while I was conducting research.`}
        />

        <Body
          title={'Results:'}
          desc={`Although the project is still in development, we have received positive comments thus far from our potential consumers, who appreciate the colourful design and straightforward user interface.`}
        />

        <Images img1={Image1} alt1={"concept image 1"} img2={Image2} alt2={"concept image 2"} img3={Image3} alt3={"concept image 3"}
          img4={Image4} alt4={"concept image 4"} img5={Image5} alt5={"concept image 5"} />


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
