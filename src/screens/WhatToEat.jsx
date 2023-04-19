import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Title from "../components/Elements/Title";
import Images from "../components/Elements/Images";
import WhatToEat1 from '../assets/img/what-to-eat/What-to-eat-1.png';
import WhatToEat2 from '../assets/img/what-to-eat/What-to-eat-2.png';
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
            title="What to Eat - A Recipe Recommendation Engine 🌭🥫"
            desc1="What to Eat - is a recipe recommendation engine that suggests delicious recipes based on your dietary preferences and ingredients on hand, 
            while also helping to reduce food waste. 🍴"
            desc2="If you are like me, meal planning can be a challenge, especially when you have limited ingredients on hand or dietary restrictions to consider. 
            What to Eat takes the guesswork out of meal planning and helps you find delicious recipes that fit your unique preferences and needs."
            skills="Full Stack Web Developer"
            year="2023"
          />
        </HeaderInfo>
        <Images img1={WhatToEat1} alt1={"project image cover"} img2={WhatToEat2} alt2={"mockup image"} />


        <h1 className='extraBold font25'>Links:</h1>
        <br></br>
        <ButtonsRow className="flexNullCenter">
          <div style={{ width: "190px" }}>
            <a href="https://what-to-eat-applescan.vercel.app/" target="_blank" rel="noopener noreferrer">
              <FullButton title="Try the app!" border={false} />
            </a>
          </div>
          <div style={{ width: "190px", marginLeft: "15px" }}>
            <a href="https://github.com/applescan/what-to-eat" target="_blank" rel="noopener noreferrer">
              <FullButton title="View Code" border={false} />
            </a>
          </div>
          <div style={{ width: "190px", marginLeft: "15px" }}>
            <a href="https://www.producthunt.com/posts/what-to-eat-2" target="_blank" rel="noopener noreferrer">
              <FullButton title="Featured on product hunt" border={false} />
            </a>
          </div>

        </ButtonsRow>
        

        <Body
          title={'Why this project?'}
          desc={`I created this project during my spare time to learn Typescript and Next.js, and it has been a fun and fulfilling experience. 🤓`}

        />

        <Body
          title={'Goals'}
          desc={`By suggesting recipes based on the ingredients you already have at home, you can use up those items before they go bad and minimize the amount of food that gets thrown away. 🌍
          I hope this project can help people find inspiration and joy in cooking at home. Please give it a try and let me know what you think!`}

        />

        <Body
          title={'Built With'}
          desc={`• Axios • CSS • Canva • Figma • React • Tailwind css • Spoonacular api • Typescript • JavaScript • Next.js • Node.js`}

        />

        <Body
          title={'App'}
        />
        <p>Visit <a className="purpleColor" href="https://nz-locum-network.netlify.app/"
          target="_blank">https://what-to-eat-applescan.vercel.app/</a> to
          access the web application.
        </p>

        <List
          title={'User Guide'}
          list1={'1. Click the get repice button from the homescreen'}
          list2={'2. Select your dietary preferences and ingredients at home'}
          list3={'3. Click next and recipes recomendations based on your preferences will show up'}
          list4={'4. Click on the recipe you want to cook or experiment with!'}
        />

        <Body
          title={'Bug / Feature Request'}
        />

        <b>Known limitations:</b>
        <p>If there is a typo in the ingredients form, the result will not show properly, so user have to be very precise when inputting their items.
          Sometimes spoonacular api includes items that are not part of user's dietary requirements.
        </p>

        <Body
          title={'Future Software Enhancement List'}
          desc={`In the future, I am planning to include NLP in the ingredients form, so when user typed something that are not precise, the NLP can predict what user mean and fix those inputs. 
          Another future enhancement will be adding a meal planning capabilities and add favorite meals. `}
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
