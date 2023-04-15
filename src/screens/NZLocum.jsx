import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Title from "../components/Elements/Title";
import Images from "../components/Elements/Images";
import NzLocum1 from '../assets/img/locum/nz-locum1.jpg';
import NzLocum2 from '../assets/img/locum/nz-locum2.jpg';
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
            title="NZ Veterinary Locum Network"
            desc1="In order to market themselves and look for jobs, there hasn't 
          been a website created exclusively for veterinary locums in New Zealand."
            desc2="This project intends to develop a platform where veterinary locums can create profiles and introduce 
          themselves and companies can post job vacancies for locums. We resolve the current communication issue by facilitating direct 
          communication between veterinarian offices and locum tenens."
            skills="Full Stack Web Developer"
            year="2023"
          />
        </HeaderInfo>
        <Images img1={NzLocum1} alt1={"project image cover"} img2={NzLocum2} alt2={"mobile mockup image"} />


        <h1 className='extraBold font25'>Links:</h1>
        <br></br>
        <ButtonsRow className="flexNullCenter">
          <div style={{ width: "190px" }}>
            <a href="https://nz-locum-network.netlify.app/" target="_blank" rel="noopener noreferrer">
              <FullButton title="Try the app!" border={false} />
            </a>
          </div>
          <div style={{ width: "190px", marginLeft: "15px" }}>
            <a href="https://github.com/applescan/NZ-Veterinary-Locum-Frontend" target="_blank" rel="noopener noreferrer">
              <FullButton title="Front-end Code" border={false} />
            </a>
          </div>
          <div style={{ width: "190px", marginLeft: "15px" }}>
            <a href="https://github.com/applescan/NZ-Veterinary-Locum-CapstoneProject" target="_blank" rel="noopener noreferrer">
              <FullButton title="Back-end Code" border={false} />
            </a>
          </div>
        </ButtonsRow>

        <Body
          title={'What made this project relevant?'}
          desc={`There is still no infrastructure that enables veterinary locums to openly promote 
        themselves outside of a recruitment agency, making it very difficult for locums and clinics to connect without third-party intervention (recruitment agency). 
        If new veterinary locums don't already have personal relationships with clinics, finding one can be very challenging. 
        They have no platform to view and identify the clinics that require them. Currently, a Facebook group is the only location locums may access information. 
        My aim is to have all doctors' information in a beautiful, understandable style so that they don't have to wade through several Facebook postings to figure out which locum is reliable and reachable for a clinic.`}

        />

        <Body
          title={'Goals'}
          desc={`With this project, I intend to make it easier for veterinary clinics and locums to organize employment 
          on their own without the use of a recruitment firm by centralizing lists of available jobs and veterinary locums. 
          The NZ Veterinary Locum Network will be the only platform to keep track of veterinary locum's profiles that are visible to the public online, 
          filling a specialized need for a distinct sector on the website rather than specialized Facebook groups.`}

        />

        <Body
          title={'Built With'}
          desc={`• Axios • Bcryptjs • Express.js • MongoDB • MongoDB Atlas • Multer • Node.js • Swagger UI • Bootstrap • CSS • Canva • Figma • React • MUI • MDB Bootstrap.`}

        />

        <Body
          title={'App'}
        />
        <p>Visit <a className="purpleColor" href="https://nz-locum-network.netlify.app/"
          target="_blank">https://nz-locum-network.netlify.app/</a> to
          access the web application.
        </p>

        <List
          title={'User Guide'}
          desc={'As a doctor'}
          list1={'1. Register an account as a doctor'}
          list2={'2. Sign in with your credentials from signing up'}
          list3={'3. You will be redirected to your profile when login is successful'}
          list4={'4. You can update and delete your profile. You can also browse clinics, jobs, and other doctors'}
        />

        <List
          desc={'As a clinic'}
          list1={'1. Register an account as a clinic'}
          list2={'2. Sign in with your credentials from signing up'}
          list3={'3. You will be redirected to your profile when login is successful'}
          list4={'4. You can update and delete your profile.'}
          list5={'5. You can add job listing, update your job listing and delete it'}
          list6={'6. You can also browse clinics, jobs, and other doctors'}
        />

        <Body
          title={'Bug / Feature Request'}
        />

        <p><b>Known limitations:</b> When you register a user, any uploaded image that's larger than 1 Mb will not go
          through,
          this is because the TSL certificate from the cloud server is built with an older version of security
          policies, your browser won't allow a large file to be sent. The console log will show that it's a CORS
          issue.. More information regarding TSL certificate can be found
          <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html"
            target="_blank">
            <span className="purpleColor"> here.</span></a>
          <br />
          <br />
          <b>If you're running the backend in your local, there should be no problem with CORS and uploading image
            larger than 1mb.</b>
        </p>

        <Body
          title={'Future Software Enhancement List'}
          desc={'In the future, I am planning to develop a job listing due date feature, so when a job listing is expired it will automatically be removed from the website.'}
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
