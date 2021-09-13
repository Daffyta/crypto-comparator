import React from "react";
import Tabs from '../components/Tabs'
import Convert from "../components/Convert";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const  Container= styled.div`
  display: grid;
  margin: 20px 50px;

  h2 {
    text-align: center;
  }
`;

const  Row= styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
`;

const  CryptoComparator= styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
`;


function Dashboard(props) {
  const history = useHistory();

  const registryForm = history.location.state;

  return(
    <>
      <Container>
        <h2>
          Hello {registryForm.firstName} {registryForm.lastName}!
        </h2>
        <Row>
          <div>
            <h3>
            Your registration data are:
            </h3>
            <ul>
              <li>
                Email: {registryForm.email}
              </li>
              <li>
                Phone number: {registryForm.phoneNumber}
              </li>
            </ul>
          </div>
          <CryptoComparator>
            <Tabs />
            <Convert />
          </CryptoComparator>
        </Row>
      </Container>
    </>
  )
}

export default Dashboard