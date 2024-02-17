import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import NzLocum from "../../assets/img/projects/nz-locum.png";
import Mix from "../../assets/img/projects/mix1.png";
import Airscammer from "../../assets/img/projects/airscammer.png";
import Dpm from "../../assets/img/projects/dpm.png";
import Cti from "../../assets/img/projects/cti.png";
import Hikitia from "../../assets/img/projects/hikitia.jpg"
import WhatToEat from "../../assets/img/projects/What to eat.png"
import Appreciateya from "../../assets/img/projects/appreciateya.jpg"



export default function Projects() {

  const navigate = useNavigate()

  return (
    <div className="whiteBg">
      <Wrapper id="projects" className="container" style={{ padding: '10% 5%' }}>
        <HeaderInfo>
          <h1 className="font40 extraBold">Projects</h1>
        </HeaderInfo>
        <div className="row textCenter">
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" style={{ textAlign: "left" }}>
            <ProjectBox
              img={Appreciateya}
              title="AppreciateYa - Together, Let's Build a Happier, More Connected Workspace!"
              text="Full Stack Web Developer | 2024 | Personal Project"
              action={() => { navigate(`/appreciate-ya`) }}
            />
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" style={{ textAlign: "left" }}>
            <ProjectBox
              img={WhatToEat}
              title="What to Eat - A Recipe Recommendation Engine"
              text="Full Stack Web Developer | 2023 | Personal Project"
              action={() => { navigate(`/what-to-eat`) }}
            />
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" style={{ textAlign: "left" }}>
            <ProjectBox
              img={Hikitia}
              title="Hikitia Air UI & UX Design"
              text="UI & UX Design | 2023 | UX Design Institute"
              action={() => { navigate(`/hikitia`) }}
            />
          </div>
         
        </div>
        <div className="row textCenter">
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" style={{ textAlign: "left" }}>
            <ProjectBox
              img={NzLocum}
              title="NZ Veterinary Locum Network"
              text="Full Stack Web Developer | 2023 | Institute of Data"
              action={() => { navigate(`/nz-locum`) }}
            />
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" style={{ textAlign: "left" }}>
            <ProjectBox
              img={Mix}
              title="Mixtape-me | Spotify app integration."
              text="Full Stack Web Developer | 2022 | Spotify Web API"
              action={() => { navigate(`/mixtape-me`) }}
            />
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" style={{ textAlign: "left" }}>
            <ProjectBox
              img={Airscammer}
              title="Airscammer - Let's Learn About Airline Scams!"
              text="Full Stack Web Developer | 2022 | Future Skills Academy"
              action={() => { navigate(`/airscammer`) }}
            />
          </div>
         

        </div>
        <div className="row textCenter">
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" style={{ textAlign: "left" }}>
            <ProjectBox
              img={Dpm}
              title="Deltapath Mobile UI & UX Design"
              text="UI & UX Design | 2022 | Deltapath"
              action={() => { navigate(`/dpm`) }}
            />
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" style={{ textAlign: "left" }}>
            <ProjectBox
              img={Cti}
              title="Deltapath Salesforce CTI Integration"
              text="UI & UX Design | 2022 | Deltapath"
              action={() => { navigate(`/cti`) }}
            />
          </div>
        </div>
      </Wrapper >
    </div >
  );
}

const Wrapper = styled.section`
width: 100%;
min-height: 100vh;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;

