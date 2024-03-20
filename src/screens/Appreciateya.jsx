import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Title from "../components/Elements/Title";
import Images from "../components/Elements/Images";
import Appreciateya from '../assets/img/appreciate/appreciateYa.jpg';
import AI from '../assets/img/appreciate/AI.png';
import AppreciateyaVid from '../assets/img/appreciate/appreciateYa.mp4';
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
            title="AppreciateYa - Together, Let's Build a Happier, More Connected Workspace!"
            desc1="AppreciateYa transforms workplace gratitude with easy-to-send kudos, virtual coffees, and gift cards. It promotes a positive culture by celebrating every contribution. ✨"
            skills="Full Stack Web Developer"
            year="2024"
          />
        </HeaderInfo>

        <Images img1={Appreciateya} alt1={"project image cover"} />

        <video style={{ width: '100%', height: '100%', paddingBottom: "50px" }} className="radius8" controls>
          <source src={AppreciateyaVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>


        <h1 className='extraBold font25'>Links:</h1>
        <br></br>
        <ButtonsRow className="flexNullCenter">
          <div style={{ width: "190px" }}>
            <a href="https://appreciate-ya.vercel.app/" target="_blank" rel="noopener noreferrer">
              <FullButton title="Try the app!" border={false} />
            </a>
          </div>
          <div style={{ width: "190px", marginLeft: "15px" }}>
            <a href="https://github.com/applescan/appreciate.ya" target="_blank" rel="noopener noreferrer">
              <FullButton title="View Code" border={false} />
            </a>
          </div>


        </ButtonsRow>


        <Body
          title={'Why is this problem valuable to address?'}
          desc={`In today's fast-paced work environment, it's easy to overlook the power of a simple "thank you" or "great job." 
          However, these small gestures of appreciation can significantly impact morale, motivation, and workplace happiness. 
          That's where AppreciateYa comes in.`}
        />


        <Body
          title={'New Feature'}
          desc={`Introducing the latest feature to spark your creativity: AI Suggestion! Now, whenever you need a dose of inspiration or just a little nudge in the right direction, our AI can craft personalized kudos for you. Whether you're celebrating a team win, recognizing a colleague's hard work, or just spreading some positivity, AI Suggestion is here to help you express your appreciation in the most impactful way. Let AI ignite your imagination and help you pen the perfect note of praise.`}
        />
        <Images img1={AI} alt1={"AI image cover"} />

        <Body
          title={'Goals'}
          desc={`I believe that appreciation should be easy, meaningful, and fun. 
          AppreciateYa is designed to be intuitive and engaging, 
          ensuring that every team member feels valued and recognized.`}

        />

        <Body
          title={'Built With'}
          desc={`T3 Stack • Next.js • Prisma • Canva • Figma • React • Tailwind CSS • GraphQL • Typescript • Supabase • NextAuth • Node.js`}

        />

        <Body
          title={'App'}
        />
        <p>Visit <a className="purpleColor" href="https://appreciate-ya.vercel.app/"
          target="_blank">https://appreciate-ya.vercel.app/</a> to
          access the web application.
        </p>

        <List
          title={'Features'}
          list1={'💌 Send personalized appreciation messages, whether its a warm thank you, congratulations, or a virtual coffee or gift card.'}
          list2={'🏆 Discover your top fans and MVPs, and make sure no one feels left out.'}
          list3={'📊 Gain insights into the appreciation culture within your team or organization.'}
          list4={'🤖 Meet AI Suggestion, your quick tool for crafting inspiring kudos. Express appreciation with creativity and ease.'}
        />

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
