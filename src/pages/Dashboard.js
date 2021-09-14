import React from "react";
import Tabs from '../components/Tabs'
import Convert from "../components/Convert";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const  Container= styled.div`
  display: grid;

  h1 {
    text-align: center;
    font-size: 40px;
    color: #ffa800;
    background-color: rgb(238,238,238);
    padding: 20px;
    margin: 0;
  }
`;

const  Row= styled.div`
  display: grid;
  grid-template-columns: repeat(2, 25% 75%);
  grid-gap: 30px;
`;

const  SlidebarDataConvert= styled.div`
  background-color: rgb(238,238,238);
  padding: 20px 60px;
`;


const  CryptoComparator= styled.div`
  display: grid;
  padding: 30px;
`;

const  DataRegistrer= styled.div`
  margin-bottom: 60px;
  li {
    margin-bottom: 10px;
  }
`;


function Dashboard(props) {
  const history = useHistory();

  const registryForm = history.location.state;

  return(
    <>
      <Container>
        <h1>
          Hello {registryForm.firstName} {registryForm.lastName}!
        </h1>
        <Row>
          <SlidebarDataConvert>
            <DataRegistrer>
              <h3>
              Your registration data are:
              </h3>
              <ul>
                <li>
                  <b>Email:</b> {registryForm.email}
                </li>
                <li>
                  <b>Phone number:</b> {registryForm.phoneNumber}
                </li>
              </ul>
            </DataRegistrer>
            <Convert />
          </SlidebarDataConvert>
          <CryptoComparator>
            <Tabs />
          </CryptoComparator>
        </Row>
      </Container>
    </>
  )
}

export default Dashboard