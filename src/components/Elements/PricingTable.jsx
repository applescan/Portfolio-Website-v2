import React from "react";
import styled from "styled-components";
// Assets
import CheckMark from "../../assets/svg/Checkmark";

export default function PricingTable({ icon, price, title, text,  offers, action }) {


  return (
    <Wrapper className="whiteBg radius8 shadow">
      <div className="flexSpaceCenter">
  
        <p className="font30 extraBold">{price}</p>
      </div>
      <div style={{ margin: "30px 0" }}>
        <h4 className="font20 extraBold">{title}</h4>
        <p className="font16">{text}</p>
      </div>
      <div>
        {offers
          ? offers.map((item, index) => (
              <div className="flexNullCenter" style={{ margin: "15px 0" }} key={index}>
                <div style={{ position: "relative", top: "-1px", marginRight: "15px" }}>
                  {item.cheked ? (
                    <div style={{ minWidth: "10px" }}>
                      <CheckMark />
                    </div>
                  ) : (
                    <div style={{ minWidth: "10px" }}></div>
                  )}
                </div>
                <p className="font15 semiBold">{item.name}</p>
              </div>
            ))
          : null}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;
