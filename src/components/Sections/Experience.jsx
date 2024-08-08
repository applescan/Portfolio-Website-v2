import React from "react";
import styled from "styled-components";
// Components
import Card from "../Elements/Card";

export default function Experience() {
  return (
    <div className="darkBg">
      <Wrapper id="resume" className="container" style={{ padding: '10% 5%' }}>
        <HeaderInfo>
          <h1 className="font40 bold whiteColor">Resume</h1>
          <br></br>
          <p className="font25 whiteColor">
            Work Experience
          </p>
        </HeaderInfo>

        <TablesWrapper className="flexSpaceNull">
          <TableBoxLarge>
          <Card
            title="PHQ Studios (founded by Phantom London) - Intermediate Developer"
            text="July 2024 - Current"
            offers={[
              { name: "Work with Angular, Pixi.js, and Gerrit on various Google projects.", cheked: true },
              { name: "Develop video games for Google Play.", cheked: true },
              { name: "Collaborate with international clients and agencies.", cheked: true },
              { name: "Work with back-end developers and other stakeholders to integrate front-end features with back-end services and APIs.", cheked: true },
              { name: "Work closely with producers and other teams to ensure technical implementations align with project objectives and effectively meet user requirements.", cheked: true },
            ]}
          />
          </TableBoxLarge>
          <TableBoxLarge>
            <Card
              title="Generate Zero - Frontend Software Developer"
              text="February 2023 - June 2024"
              offers={[
                { name: "Collaborate with back-end developers and other stakeholders to integrate front-end functionality with back-end services and APIs.", cheked: true },
                { name: "Taking an active role in the implementation, deployment, monitoring, and support activities of new products.", cheked: true },
                { name: "Ongoing expansion of the codebase, developed in a structured and reusable way.", cheked: true },
                { name: "Work as part of a cross-functional team, focusing on ensuring that the technical implementation aligns with project objectives and meets user requirements effectively.", cheked: true },
              ]}
            />
          </TableBoxLarge>
        </TablesWrapper>

        <TablesWrapper className="flexSpaceNull">
          <TableBox>
            <Card
              title="Liia NZ Limited - Integrated Marketing Designer (Independent Contractor)"
              text="June 2022 - July 2022"
              offers={[
                { name: "Developing art concepts for events and exhibitions", cheked: true },
                { name: "Creation of graphic content for clients", cheked: true },
                { name: "Branding & product logo design", cheked: true }
              ]}
            />
          </TableBox>
          <TableBox>
            <Card
              title="Deltapath - Visual Designer - Senior Visual Designer"
              text="October 2019 - June 2022"
              offers={[
                { name: "Website designs & development", cheked: true },
                { name: "UI and UX design on products", cheked: true },
                { name: "Creation of graphic content on all social media channels", cheked: true },
                { name: "Company video editing", cheked: true },
                { name: "Branding & product logo design", cheked: true },
              ]}
            />
          </TableBox>
          <TableBox>
            <Card
              title="The Web Guys - Web Designer & Graphic Designer Intern"
              text="October 2018 - February 2019"
              offers={[
                { name: "Website design", cheked: true },
                { name: "Overall design and creation of graphic content", cheked: true },
                { name: "Video editing, picture editing, and logo design", cheked: true }
              ]}
            />
          </TableBox>
        </TablesWrapper>

        <HeaderInfo>
          <br></br>
          <br></br>
          <p className="font25 whiteColor">
            Education
          </p>
        </HeaderInfo>

        <TablesWrapper className="flexSpaceNull">
          <TableBox>
            <Card
              title="Academy EX - Disruptive Technologies, NZQA level 8"
              text="Juni 2023 - August 2023"
              offers={[
                { name: "Technologies covered include: Artificial Intelligence, Blockchain, Cybersecurity, the Internet of Things, Mobility, Extended Reality and Big Data.", cheked: true }
              ]}
            />
          </TableBox>
          <TableBox>
            <Card
              title="Auckland University of Technology with Institute of Data"
              text="Ocotober 2022 - January 2023"
              offers={[
                { name: "Institute of Data Software Engineering Certificate | Software Development", cheked: true }
              ]}
            />
          </TableBox>
          <TableBox>
            <Card
              title="UX Design Institute & Glasgow Caledonian University"
              text="July 2022 - December 2022"
              offers={[
                { name: "Professional Diploma in UX Design", cheked: true }
              ]}
            />
          </TableBox>
        </TablesWrapper>
        <TablesWrapper className="flexSpaceNull">
          <TableBox>
            <Card
              title="Future Skills Academy"
              text="July 2022 - September 2022"
              offers={[
                { name: "Certificate in Software Development (Level 5)", cheked: true }
              ]}
            />
          </TableBox>
          <TableBox>
            <Card
              title="Media Design School"
              text="July 2015 - May 2018"
              offers={[
                { name: "Bachelor of Art and Design, specializing in 3D animation and VFX", cheked: true },
                { name: "Served as a Student Ambassador from June 2016 to May 2018", cheked: true }
              ]}
            />
          </TableBox>
          <TableBox className="hidden">
            <Card
            />
          </TableBox>
        </TablesWrapper>
      </Wrapper >
    </div>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  display: flex;
  flex-direction: column;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto;
  }
`;
const TableBoxLarge = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto;
  }
`;
