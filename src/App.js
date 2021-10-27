// import React from 'react'
import List from "./Component/List/List";
import Todoo from "./Component/Todoo/Todoo";

import "./Component/Todoo/Style.css";
import { useState } from "react";

function App() {
  const [slideBar, ToogleSlideBar] = useState(false);
  const handleToggleSidebar = () => ToogleSlideBar((value) => !value);
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/logo.svg" alt="my Logo" />
            <figcaption>Add your List Here ✌</figcaption>
          </figure>
          <Todoo handleToggleSidebar={handleToggleSidebar} />
          <List
            handleToggleSidebar={slideBar}
            handleToggleSidebar={handleToggleSidebar}
          />
        </div>
      </div>
    </>
  );
}

export default App;
