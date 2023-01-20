import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Title from "../components/Elements/Title";
import Images from "../components/Elements/Images";
import Airscammer1 from '../assets/img/airscammer/airscammer1.webp';
import Airscammer2 from '../assets/img/airscammer/airscammer2.webp';
import Airscammer3 from '../assets/img/airscammer/airscammer3.webp';
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
            title="Airscammer - Let's Learn About Airline Scams!"
            desc1="The most common air travel scams are those that occur online. In reality, 
            it is very easy for scammers to create a fake airline website that uses very similar text and images to persuade users. 
            This is because they can take their money in the process."
            desc2={`Airscammer is a web application that simulates what a potentially suspicious booking website will typically do. 
            The name Airscammer is inspired by Skyscanner, an actual airline aggregator website. 
            The purpose of the project is to educate my users to pay attention to online booking by setting up some "traps" for them and informing them what
             potential harm can occur as a result of being caught up in those "traps".`}
            skills="Full Stack Web Developer"
            year="2022"
          />
        </HeaderInfo>
        <Images img1={Airscammer1} alt1={"project image cover"} img2={Airscammer2} alt2={"mobile mockup image"} img3={Airscammer3} alt3={"mobile mockup image"} />


        <h1 className='font25'>Links:</h1>
        <br></br>
        <ButtonsRow className="flexNullCenter">
          <div style={{ width: "190px" }}>
            <a href="https://airscammer.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <FullButton title="Try the app!" border={false} />
            </a>
          </div>
          <div style={{ width: "190px", marginLeft: "15px" }}>
            <a href="https://github.com/applescan/Airscammer-public" target="_blank" rel="noopener noreferrer">
              <FullButton title="View Code" border={false} />
            </a>
          </div>
          <div style={{ width: "190px", marginLeft: "15px" }}>
            <a href="https://www.futureskills.co.nz/students/success-stories/story/31" target="_blank" rel="noopener noreferrer">
              <FullButton title="Featured in Future Skills" border={false} />
            </a>
          </div>
        </ButtonsRow>

        <br></br>
        <br></br>


        <p>The most common air travel scams are those that occur online. In reality, it is very easy for scammers to
          create a fake airline website that uses very similar text and images to persuade users. This is because
          they can take their money in the process.

          <br></br>
          <br></br>

          Airscammer is a web application that simulates what a potentially suspicious booking website will
          typically do. The name Airscammer is inspired by Skyscanner, an actual airline aggregator website. The
          purpose of the project is to educate my users to pay attention to online booking by setting up some
          "traps" for them and informing them what potential harm can occur as a result of being caught up in
          those "traps".
        </p>

        <Body
          title={'Built With'}
          desc={`• Bootstrap • CSS • Clear DB • Chart.js • Cookie-parser • EJS • Express.js • Figma • GitHub • Heroku • HTML • JavaScript • Lucid Chart 
          • My SQL Workbench • Node.js • Nodemailer • phpMyAdmin • SendGrid API • XAMPP • Visual Studio Code`}

        />

        <Body
          title={'SDLC'}
          desc={`For this project, the agile methodology is really useful. Because of this, I can work on projects in manageable chunks and give my MVP my 
          full attention before moving on to other aspects of the programme. It is relatively simple to add new features and modify existing functionality. 
          The 1-week sprints are incredibly beneficial for me since they spur me on to complete the task swiftly and accomplish the next objective. I'm able to 
          finish the project quicker than I had planned and expand the functionality of my web application.`}

        />

        <Body
          title={'App'}
        />
        <p>Visit <a className="purpleColor" href="https://airscammer.herokuapp.com/"
          target="_blank">https://airscammer.herokuapp.com/</a> to
          access the web application.
        </p>

        <List
          title={'User Guide'}
          desc={'Booking:'}
          list1={'1. Go to the homepage, pick the date and destination, and click search flight.'}
          list2={'2. Users will be taken to choose flights.'}
          list3={`3. After the user chooses the flight, they will be taken to fill in their detail (customer details will ask for 
            suspicious questions and the user will be made obvious to educate them on this topic).`}
          list4={'4. Click “Register”.'}
          list5={'5. The user will be taken to the login page to see the statistics data.'}
          list6={'6. Login to see the statistics data.'}
          list7={'7. In case you forget your password please go to the contact page and let me know.'}
        />

        <List
          desc={'Contact page:'}
          list1={'1. Fill in the details and message'}
          list2={'2. Click “send”'}
          list3={'3. The message will be sent to my email address.'}
        />

        <Body
          title={'Reflection'}
        />

        <p>I had some basic HTML and CSS expertise when I first started, as well as some experience with WordPress and
          Wix to create static websites. By working on this project, I gained expertise on how to apply my fundamental
          understanding of HTML & CSS to a completely functional online application. I grew my understanding of the
          SDLC, server-side and client-side web apps, and picked up skills in JavaScript, Bootstrap, MYSQL, Node.JS,
          Passport, and user authentication. It is the next stage in my learning process to fully expand that
          knowledge and construct new applications with the back-end, therefore I am really excited to be able to
          learn about building a web application with a database and putting it online.

          <br></br>
          <br></br>

          I'm conscious that there is still a lot to learn, and I'm eager to learn more in the future about APIs,
          React, and other frameworks. If I were to undertake this project—or one very similar to it—again, I would
          attempt to build the web application using a mobile-first strategy and would strive to thoroughly flesh out
          all the needs before beginning to add further dependencies to my project.


        </p>


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
