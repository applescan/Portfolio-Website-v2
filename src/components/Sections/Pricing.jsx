import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <div className="blueBg">
      <Wrapper id="resume" className="container" style={{ padding: '10% 5%' }}>
        <HeaderInfo>
          <h1 className="font40 extraBold whiteColor">Resume</h1>
          <br></br>
          <p className="font25 whiteColor">
            Work Experience
          </p>
        </HeaderInfo>

        <TablesWrapper className="flexSpaceNull">
          <TableBox>
            <PricingTable
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
            <PricingTable
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
            <PricingTable
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
            <PricingTable
              title="Auckland University of Technology with Institute of Data"
              text="Ocotober 2022 - January 2023"
              offers={[
                { name: "Institute of Data Software Engineering Certificate | Software Development", cheked: true }
              ]}
            />
          </TableBox>
          <TableBox>
            <PricingTable
              title="UX Design Institute & Glasgow Caledonian University"
              text="July 2022 - December 2022"
              offers={[
                { name: "Professional Diploma in UX Design", cheked: true }
              ]}
            />
          </TableBox>
          <TableBox>
            <PricingTable
              title="Future Skills Academy"
              text="July 2022 - September 2022"
              offers={[
                { name: "Certificate in Software Development (Level 5)", cheked: true }
              ]}
            />
          </TableBox>
        </TablesWrapper>
        <TablesWrapper className="flexSpaceNull">
          <TableBox>
            <PricingTable
              title="Media Design School"
              text="July 2015 - May 2018"
              offers={[
                { name: "Bachelor of Art and Design, specializing in 3D animation and VFX", cheked: true },
                { name: "Served as a Student Ambassador from June 2016 to May 2018", cheked: true }
              ]}
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
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




