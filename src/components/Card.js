import React from "react";
import styled from 'styled-components';

function Card(props){
  const infoData = props.data.reverse().slice(0,6);
  const activeCrypto = props.active;
  const currencyPrice = infoData[0]

  return(
    <>
      <CryptoCard>
        <CardTitle className="title-card">
          <h2>
            { currencyPrice?.map((crypto) => (crypto.symbol === activeCrypto && (crypto.current_price) ))} 
          </h2>
        </CardTitle>
        <div className="history">
          { infoData.map((info) => (
            info.map((crypto) => (
              crypto.symbol === activeCrypto && (
                  <Row key={crypto}>
                    <span>{crypto.last_updated}</span>
                    <span>{crypto.current_price}</span>
                  </Row>
              )  
            ))
          )) }
        </div>
      </CryptoCard>
    </>
    
  );
}

export default Card

//Styles card

const CryptoCard = styled.div`
  width: 30%;
  margin-right: 10px;
  border: 1px solid #ddd;

  .history {
    div:nth-child(2n) {
      background: #ffa800;
    }
  }
`;

const CardTitle = styled.div`
  text-align: center;
  padding: 10px 0;
  background-color: #141925;
  color: #ffa800;
`;

const  Row= styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;