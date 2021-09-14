import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Card from './Card';

const Tab = styled.button`
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;

const ButtonGroup = styled.div`
  display: flex;
`;

const TabCards = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const types = ['BTC', 'ETH', 'XRP'];

function TabGroup() {
  const [comparator, setComparator] = useState([]);
  const [delay, setDelay] = useState(1);
  const [active, setActive] = useState(types[0]);

  useEffect(() => {
    const requestTime = setTimeout(() => {
      axios.get(process.env.REACT_APP_API_HISTORYCAL)
        .then((response) => {
          setComparator(comparator => [...comparator, console.log(response.data)]);
          setDelay(15000);
        });
    }, delay);
    return () => clearTimeout(requestTime);
  }, [delay, comparator]);

  return (
    <>
      <ButtonGroup>
        {types.map(type => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))}
      </ButtonGroup>

      <p />
      <TabCards>
        <Card />
        <Card />
      </TabCards>
    </>
  );
}
// Usage
<TabGroup/>

export default TabGroup