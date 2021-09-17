import React, { useState, useEffect } from "react";
import styled from 'styled-components';

function Convert(props) {

  let currentMxnUsd = sessionStorage.getItem('mxn_usd');
  const {comparator} = props;
  const [mxnPrice, setMxnPrice] = useState(0);
  const [btcPrice, setBtcPrice] = useState(1);
  const [ethPrice, setEthPrice] = useState(1);
  const [xrpPrice, setXrpPrice] = useState(1);

  useEffect(() => {
    const last = comparator.reverse();

    if (last.length > 0) {
      setBtcPrice(last[0][0].current_price);
      setEthPrice(last[0][1].current_price);
      setXrpPrice(last[0][2].current_price);
    }
  }, [comparator])
  

  const convertMxnToUsd = (e) => {
    setMxnPrice(e.target.value);
  };

  return(
    <LayoutConverter>
      <Subtitle>
        <h3>CONVERT</h3>
      </Subtitle>
      <Row>
        <FormControl>
          <label htmlFor="Coin">MXN</label>
          <input
            type="number"
            id="Coin"
            value={mxnPrice}
            onChange={convertMxnToUsd}
            name="mxnUsd"
            aria-describedby="coinHelp"
          />
        </FormControl>
        <ul>
          <li>
            <b>BTC:</b> <br/> { (mxnPrice / currentMxnUsd) / btcPrice }
          </li>
          <br />
          <li>
            <b>ETH:</b> <br /> { (mxnPrice / currentMxnUsd) / ethPrice }
          </li>
          <br />
          <li>
            <b>XRP:</b> <br /> { (mxnPrice / currentMxnUsd) / xrpPrice }
          </li>
        </ul>
      </Row>
    </LayoutConverter>
  )
}

export default Convert

// Styles of convert

const  Subtitle = styled.div`
  h3 {
    margin: 0px;
  }
`;

const FormControl = styled.div`
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

const  Row= styled.div`
  display: flex;
  padding: 10px;
  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
`;

const LayoutConverter= styled.div`
  background-color: #80808085;
  padding: 30px;
  border-radius: 10px;
  margin-top: 30px;
`