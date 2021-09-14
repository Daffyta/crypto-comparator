import React, { useState } from "react";
import styled from 'styled-components';

const CryptoCard = styled.div`
  width: 30%;
  border: 1px solid #000;
  margin-right: 10px;
`;

const CardTitle = styled.div`
  text-align: center;
  border-bottom: 1px solid #000;
`;

const  Row= styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

function Card(props){
  return(
    <CryptoCard>
      <CardTitle className="title-card">
        <h2>
          123,450
        </h2>
        <h4>
          Bitso
        </h4>
      </CardTitle>
      <div className="history">
        <Row>
          <span>fecha</span>
          <span>Hora</span>
          <span>Precio</span>
        </Row>
        <Row>
          <span>fecha</span>
          <span>Hora</span>
          <span>Precio</span>
        </Row>
        <Row>
          <span>fecha</span>
          <span>Hora</span>
          <span>Precio</span>
        </Row>
        <Row>
          <span>fecha</span>
          <span>Hora</span>
          <span>Precio</span>
        </Row>
        <Row>
          <span>fecha</span>
          <span>Hora</span>
          <span>Precio</span>
        </Row>
      </div> 
    </CryptoCard>
  );
}

export default Card