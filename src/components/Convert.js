import React, { useState } from "react";

function Convert() {

  let currentMxnUsd = sessionStorage.getItem('mxn_usd');

  const [state , setState] = useState({
    mxnUsd: "",
  });

  const convertMxnToUsd = (e) => {
    setState(e.target.value)
  };

  return(
    <div>
      <h3>
        CONVERT
      </h3>
      <div>
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
      </div>
    </div>
  )
}

export default Convert