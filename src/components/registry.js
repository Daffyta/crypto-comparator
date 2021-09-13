import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import moneyCrypto from '../assets/img/fondo.png';

const Login = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items:center;
  align-items: center;
  background-color: #141925;
  height: 100vh;
`;

const Form = styled.div`
  display: grid;
  align-content: space-between;
  background: rgb(238,238,238);
  padding: 30px 40px;
  border-radius: 25px;
  margin-left: 20%;

  h1 {
    color: #FFA800;
    text-align: center;
    font-size: 40px;
    margin-bottom: 10px;
  }

  h3 {
    text-align: center;
    margin-bottom: 30px;
  }
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;

  label {
    font-size: 12px;
  }

  input {
    padding: 6px;
    font-size: 16px;
    margin: 8px 0px;
    border: 1px solid #00000040;
    border-radius: 5px;
  }
`;

const ConsecutiveInputs = styled.div`
  display: flex;
`;

const Button = styled.div`
  margin: 30px 0;
  padding: 10px;
  background-color: #ffa800;
  border: 1px;
  border-radius: 8px;
  text-align: center;
  &:hover {
    box-shadow: rgba(0,0,0,0.2) 6px 10px 8px;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 20px;
    font-weight: bold;
  }
`;

const Image = styled.div`
  img {
    width: 100%;
  }
`;

function RegistrationForm() {
  const [state , setState] = useState({
    firstName: "",
    lastName: "",
    email : "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
      const {id , value} = e.target   
      setState(prevState => ({
          ...prevState,
          [id] : value
      }))
  };
  
  return (
    <>
      <Login>
        <Form>
          <h1>Welcome</h1>
          <h3>
            Please tell us more about yourself
          </h3>
          <ConsecutiveInputs>
            <FormControl>
              <label htmlFor="InputFirstName">First name:</label>
              <input
                type="name"
                id="firstName"
                aria-describedby="firstNameHelp"
                placeholder="Dafne"
                value={state.firstName}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <label htmlFor="InputLastName">Last name:</label>
              <input
                type="name"
                id="lastName"
                aria-describedby="lastNameHelp"
                placeholder="Díaz"
                value={state.lastName}
                onChange={handleChange}
              />
            </FormControl>
          </ConsecutiveInputs>
          <FormControl>
            <label htmlFor="InputEmail">Email address:</label>
            <input
              type="email"
              id="email"
              aria-describedby="emailHelp"
              placeholder="mi_mail@mail.com"
              value={state.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <label htmlFor="InputPhoneNumber">Phone number:</label>
            <input
              type="tel"
              id="phoneNumber"
              aria-describedby="phoneNumberHelp"
              placeholder="55 55 55 55 55"
              value={state.phoneNumber}
              onChange={handleChange}
            />
          </FormControl>

          {/* This button come to dashboard cryptos */}
          <Button type="submit">
            <Link to={{
              pathname: "/dashboard",
              state: state
            }}>
              Submit
            </Link>
          </Button>
        </Form>
        <Image>
          <img src={moneyCrypto} alt="this is crypto image" />
        </Image>
      </Login>
    </>
  );
}

export default RegistrationForm;
