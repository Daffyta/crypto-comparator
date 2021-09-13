import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Login = styled.div`
  display: grid;
  justify-content: center;
  background-color: #141925;
  height: 100vh;
  align-content: center;

  h1 {
    color: #FFA800;
    text-align: center;
    font-size: 40px;
    margin-top: 0px;
  }
`;

const Form = styled.div`
  display: grid;
  align-content: space-between;
  background: rgb(238,238,238);
  padding: 20px 80px;
  border-radius: 10px;

  p {
    padding: 20px;
  }
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  label {
    font-size: 12px;
  }

  input {
    padding: 6px;
    font-size: 16px;
    margin: 8px 0px;
    border: 1px;
  }
`;

const Button = styled.div`
  margin: 30px 0;
  padding: 10px;
  background-color: #ffa800;
  border: 1px;
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
        <h1>Welcome!</h1>
        <Form>
          <p>
            Please, type your data in the next form.
          </p>
          <FormControl>
            <label htmlFor="InputFirstName">First name:</label>
            <input
              type="name"
              id="firstName"
              aria-describedby="firstNameHelp"
              placeholder="Enter first name"
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
              placeholder="Enter last name"
              value={state.lastName}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <label htmlFor="InputEmail">Email address:</label>
            <input
              type="email"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
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
              placeholder="Enter phone number"
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
      </Login>
    </>
  );
}

export default RegistrationForm;
