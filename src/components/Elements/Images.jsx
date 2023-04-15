import React from 'react'
import styled from "styled-components";

export default function Images(props) {
  return (
    <Wrapper>
      <img className="radius8" src={props.img1} alt={props.alt1} style={{width:'100%'}}/>
      <img className="radius8" src={props.img2} alt={props.alt2} style={{width:'100%'}}/>
      <img className="radius8" src={props.img3} alt={props.alt3} style={{width:'100%'}}/>
      <img className="radius8" src={props.img4} alt={props.alt4} style={{width:'100%'}}/>
      <img className="radius8" src={props.img5} alt={props.alt5} style={{width:'100%'}}/>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;