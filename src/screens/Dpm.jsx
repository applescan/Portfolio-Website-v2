import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Title from "../components/Elements/Title";
import Images from "../components/Elements/Images";
import Dpm1 from '../assets/img/dpm/dpm1.webp';
import Dpm2 from '../assets/img/dpm/dpm2.webp';
import Dpm3 from '../assets/img/dpm/dpm3.webp';
import Concept1 from '../assets/img/dpm/concept1.webp';
import Concept2 from '../assets/img/dpm/concept2.webp';
import Concept3 from '../assets/img/dpm/concept3.webp';
import Image1 from '../assets/img/dpm/1.webp';
import Image2 from '../assets/img/dpm/2.webp';
import Image3 from '../assets/img/dpm/3.webp';
import Image4 from '../assets/img/dpm/4.webp';
import Image5 from '../assets/img/dpm/5.webp';
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
            title="Deltapath Mobile UI & UX Design"
            desc1="Background: Deltapath Mobile is a cutting-edge mobile app that can handle all of your daily business communication needs. 
            Users of Deltapath Mobile are able to adapt to any situation at any time and place while keeping high fidelity, excellent audio quality, instant messaging, 
            access to conference calls on the fly, and much more."
            desc2={`I had to do user experience research for this project, create a strategy for redesigning the following iteration, and prototype the mobile app's user interface. 
            The business wishes to modernise its user interface and user experience from the old appearance of 2018.`}
            skills="UX & UI Design"
            year="2022"
          />
        </HeaderInfo>
        <Images img1={Dpm1} alt1={"project image cover"} img2={Dpm2} alt2={"mobile mockup image"} img3={Dpm3} alt3={"mobile mockup image"} />

        <List
          title={'Problems'}
          desc={'Other Apps:'}
          list1={'- Often have one primary feature that serves as the focal point of the app.'}
          list2={`- When fewer features are available, other businesses will typically decide to create a 
          separate app rather than merging all of them into one.`}
          list3={`- Typically, all of the functionality can be arranged on the bottom screen's tabs.`}
        />

        <List
          title={'Deltapath Mobile'}
          desc={'Requirements:'}
          list1={`- Every user uses a different key feature, thus we need to make sure 
          that everyone enjoys utilising those features.`}
          list2={`- Need a way to group all the additional features so it isn't crowded and busy 
          (learning from the mistake of the current version)`}
          list3={`- Not all of the functionality can fit on the bottom screen's tabs.`}
        />

        <List
          title={'Proposed Solution:'}
          desc={'The needs of Deltapath Mobile Users vary depending on the industry they work in, which is advantageous for sales but problematic when creating a mobile app.'}
          list1={`- When users first instal the app, we give them the option to choose which features they wish to have shortcuts to on their home screens. By doing this, 
          we are giving our user the best chance to complete their primary goal within the application.`}
          list2={`- The home page ought to be as uncomplicated as possible; if there is too much information on the home screen, 
          it will cause information overload and make users more fatigued.`}
          list3={`- The user can browse to the side menu to access the other functions. 
          We need to put function over form, thus we'll use the side menu. 
          Even though the bottom tab is common in many apps, this is only possible because these programmes have simpler structures and capabilities. 
          Since Deltapath mobile is so feature-rich in our situation, 
          I believe having a hamburger menu is good for our user experience.`}
          list4={`- When the user restarts the app after killing it, it will start from the home screen.`}
          list5={`- The last page or activity users were on will remain when they exit the app (without terminating it).`}
        />

        <br></br>
        <Images img1={Concept1} alt1={"concept image 1"} img2={Concept2} alt2={"concept image 2"} img3={Concept3} alt3={"concept image 3"} />


        <Body
          title={'Results:'}
          desc={`The team is quite enthusiastic about the new homepage look and user experience even if 
          the project is still in the development stage. The suggested answers are being examined and developed. 
          I've so far designed the UX Flow for the homepage and login screen.`}

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
          padding: 20% 10% 10% 10%;
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
