// import React from 'react'
import List from "./Component/List/List";
import Todoo from "./Component/Todoo/Todoo";

import "./Component/Todoo/Style.css";
import { useState } from "react";
import Store from "./Component/Context/Store";

function App() {
  const [update, setUpdate] = useState(false);
  const toupdate = () => setUpdate((value) => !value);
  return (
    <>
    <Store>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/logo.svg" alt="my Logo" />
            <figcaption>Add your List Here ✌</figcaption>
          </figure>
          <Todoo toupdate={toupdate} />
          <List
          checkUpdate={update}
            toupdate={toupdate}
          />
        </div>
      </div>
      </Store>
    </>
  );
}

export default App;
