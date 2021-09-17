import React, { useState } from "react";
import styled from 'styled-components';

function Convert() {

  let currentMxnUsd = sessionStorage.getItem('mxn_usd');

  const [state , setState] = useState({
    mxnUsd: "",
  });

  const convertMxnToUsd = (e) => {
    setState(e.target.value)
  };

  return(
    <>
      <Subtitle>
        <h3>CONVERT</h3>
      </Subtitle>
      <FormControl>
        <label htmlFor="Coin">MXN</label>
        <input
          type="number"
          id="Coin"
          value={state.mxnUsd}
          onChange={convertMxnToUsd}
          name="mxnUsd"
          aria-describedby="coinHelp"
        />
        <p>{ state.mxnUsd }</p>
      </FormControl>
      <ul>
        <li>
          BTC: 
        </li>
        <br />
        <li>
          ETH:
        </li>
        <br />
        <li>
          XRP:
        </li>
      </ul>
    </>
  )
}

export default Convert

// Styles of convert

const  Subtitle = styled.div`
  h3 {
    color: #ffa800;;
  }
`;

const FormControl = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;

  label {
    font-size: 12px;
    margin-right: 5px;
  }

  input {
    padding: 6px;
    font-size: 16px;
    margin: 8px 0px;
    border: 1px solid #00000040;
    border-radius: 5px;
  }
`;