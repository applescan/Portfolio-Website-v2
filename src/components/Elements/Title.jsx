import React from 'react'
import styled from "styled-components";

export default function Title(props) {
    return (
        <div>
            <h1 className='font30 extraBold'>{props.title}</h1>
            <h2 className='font20 semiBold'>{props.subtitle}</h2>
            <br></br>
            <p>{props.desc1}</p>
            <br></br>
            <p>{props.desc2}</p>
            <Wrapper>
                <LeftSide>
                    <h4>Expertise</h4>
                    <p>{props.skills}</p>
                </LeftSide>

                <RightSide>
                    <h4>Year</h4>
                    <p>{props.year}</p>
                </RightSide>
            </Wrapper>
        </div>
    )
}


const Wrapper = styled.section`
  width: 100%;
  display: flex;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  padding-top: 50px;
  padding-right:50px;
  
  @media (max-width: 960px) {
    order: 2;
    width: 100%;
    text-align: left;
  }
  @media (max-width: 860px) {
    order: 2;
    width: 100%;
    text-align: left;
    padding-top: 20px;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  padding-top: 50px;
  padding-right:50px;

  @media (max-width: 960px) {
    width: 100%;
    text-align: left;
    padding-top: 20px;
  }
`;