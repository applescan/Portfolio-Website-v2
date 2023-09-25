import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Title from "../components/Elements/Title";
import Images from "../components/Elements/Images";
import CompetitiveBenchmark from '../assets/img/hikitia/competitiveBenchmark.jpg'
import UsabilityTest from '../assets/img/hikitia/usabilityTesting.jpg'
import AffinityDiagram from '../assets/img/hikitia/affinityDiagram.jpg'
import CustomerJourney from '../assets/img/hikitia/customerJourney.jpg'
import UserFlow from '../assets/img/hikitia/userFlow.jpg'
import Anno1 from '../assets/img/hikitia/anno1.jpg'
import Anno2 from '../assets/img/hikitia/anno2.jpg'
import Image1 from '../assets/img/hikitia/banner1.jpg';
import Image2 from '../assets/img/hikitia/banner2.jpg';
import Image3 from '../assets/img//hikitia/banner3.jpg';
import FullButton from "../components/Buttons/FullButton";
import Body from "../components/Elements/Body";
import List from "../components/Elements/List";
import { useNavigate } from "react-router-dom";

export default function Hikitia() {

  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Wrapper className="whiteBg">
      <div className="container">
        <HeaderInfo>
          <Title
            title="Hikitia Air UI & UX Design"
            desc1="During my educational program at The UX Design Institute, I undertook an academic case study focused on perfecting the online airline booking experience. 
            Prioritizing speed, simplicity, and intuition, I crafted a UX design deeply anchored in user-centric principles."
            desc2={`I took an active role in all facets of the project, from user research to competitive benchmarking, 
            ensuring that every design decision was informed and effective. This wasn't just an exercise in aesthetics; 
            it was a comprehensive journey to understand and cater to our target audience's genuine needs and preferences.`}
            skills="UX & UI Design"
            year="2023"
          />
        </HeaderInfo>
        <Images img1={Image1} alt1={"project image cover"} img2={Image2} alt2={"mockup image"} img3={Image3} alt3={"mockup image"} />

        <List
          title={'Competitive Benchmark'}
          desc={'I conducted a competitive benchmarking analysis, comparing industry leaders and identifying best practices to inform and elevate my design strategy.'}
          list1={'- What strategies are top apps/websites employing successfully in their booking process that I can adopt?'}
          list2={`- Where are they falling short, offering opportunities for enhancement?`}
          list3={`- Which recognized standards should I adhere to? (Detailed in the Workflow section)`}
        />
        <Images img1={CompetitiveBenchmark} alt1={"cometitive benchmark cover"} />
        <div style={{ width: "280px" }}>
          <a href="https://drive.google.com/file/d/1O41oy2mXxg4WHdttVp4EIWDrc8L7RDEu/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <FullButton title="Download the full reserach here" border={false} />
          </a>
        </div>

        <List
          title={'Usability Testing'}
          desc={'I carry out usability testing on existing websites during my UX research to gain a deeper understanding of the real-world user experience—identifying what is working, uncovering pain points, and discerning both the strengths and weaknesses inherent in current design solutions.'}
          list1={`Outcomes from the sessions:`}
          list2={`- Often, users look up flights on their phones, yet prefer to complete the purchase on a desktop.`}
          list3={`- Users often find themselves at a standstill if they can't view all the necessary information simultaneously on their screen.`}
          list4={`- Had reservations about the fare prices.`}
        />
        <Images img1={UsabilityTest} alt1={"Usability test"} />


        <List
          title={'Affinity Diagram'}
          desc={'After completing the research phase, it was essential to structure the findings. The goal was to streamline the information into primary categories, which would then be utilized in the subsequent Customer Journey.'}
          list1={`- Review competitive benchmarks, surveys, and usability tests and write down any kind of observation on a post it note.`}
          list2={`- Organize all observations from the post it into groups`}
          list3={`- Finalize groupings in Miro`}
        />

        <Images img1={AffinityDiagram} alt1={"Affinity diagram"} />
        <div style={{ width: "280px" }}>
          <a href="https://drive.google.com/file/d/1bxbu8jYEQaOKrNkOtWUaDKARAWF5SweO/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <FullButton title="Download the affinity diagram here" border={false} />
          </a>
        </div>

        <Body
          title={'Customer Journey Map'}
          desc={"The Customer Journey Map simplified the visualization of the user path. It also aided me in determining which areas of the journey required immediate attention and rectification."}
        />
        <Images img1={CustomerJourney} alt1={"CustomerJourney Map"} />


        <List
          title={'User Flow'}
          desc={"This user flow's objective is to fix the issues I have uncovered during my research, which are highlighted in the affinity diagram and customer journey map."}
          list1={`- Define the high-level booking flow for the new website.`}
          list2={`- Address all the issues highlighted in your customer journey map`}
          list3={`- Lay the groundwork for prototype`}
        />
        <Images img1={UserFlow} alt1={"User Flow Map"} />
        <div style={{ width: "280px" }}>
          <a href="https://drive.google.com/file/d/1hWYWnPCmVyw9EZXdwIdv7S0LjrWvxfky/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <FullButton title="Download the user flow here" border={false} />
          </a>
        </div>

        <Body
          title={'High Fidelity Prototype with Annotations'}
          desc={"After exhaustive UX research and assimilating all the insights gathered, I moved forward with crafting a high-fidelity prototype, ensuring it was a true reflection of the user needs and design solutions identified through the research process."}
        />
        <Images img1={Anno1} img2={Anno2} alt1={"High fidelity prototype"} />
        <div style={{ width: "280px" }}>
          <a href="https://drive.google.com/file/d/1WQujyCpGtKgX9nqwViM1nZnIBNMxWmZu/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <FullButton title="Download the prototype here" border={false} />
          </a>
        </div>

        <Body
          title={'Results:'}
          desc={`After diving deep into my UX research, all the insights and hard work came together in this fully interactive high-fidelity prototype. I invite you to explore and experience it!`}

        />

        <br></br>

        <ResponsiveIframeContainer>
          <iframe
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "1px solid rgba(0, 0, 0, 0.1)" }}
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FkYbZQzyFiQLNmRcuyHwCK0%2FFeliciaFelicia_Project11%3Ftype%3Ddesign%26t%3D8QoeQDWaLhHxv6pM-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D4%253A6446%26node-id%3D4-6446%26mode%3Ddesign"
            allowFullScreen
          ></iframe>
        </ResponsiveIframeContainer>

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

const ResponsiveIframeContainer = styled.div`
        position: relative;
        padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
        height: 0;
        overflow: hidden;
        @media (max-width: 860px) {
          padding-bottom: 75%; /* Adjusted Aspect Ratio for smaller screens */
        }
      `;