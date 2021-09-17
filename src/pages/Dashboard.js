import React from "react";
import Tabs from '../components/Tabs'
import Convert from "../components/Convert";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

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
                  <b>Email:</b> <br/> <p>{registryForm.email}</p>
                </li>
                <li>
                  <b>Phone number:</b> <br/> <p>{registryForm.phoneNumber}</p>
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


// Styles Dashboard

const  Container= styled.div`
  display: grid;

  h1 {
    text-align: center;
    font-size: 40px;
    color: #ffa800;
    background-color: #141925;
    padding: 20px;
    margin: 0;
  }
`;

const  Row= styled.div`
  display: grid;
  grid-template-columns: repeat(2, 25% 75%);
  grid-gap: 30px;
  height: 85vh;
`;

const  SlidebarDataConvert= styled.div`
  background-color: #141925;
  color: white;
  padding: 15px 28px;
`;


const  CryptoComparator= styled.div`
  padding: 30px;
`;

const  DataRegistrer= styled.div`
  margin-bottom: 60px;
  h3 {
    color: #ffa800;
  }

  li {
    margin-bottom: 10px;
    b {
      color: #ffa800;
    }
  }
`;