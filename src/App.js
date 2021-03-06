import React from "react";

//components
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component"
import TitleMessage  from './components/titlemessage/title-message';

import './App.css';

const  App = () => {
  return (
    <div >
      <MyNavbar></MyNavbar>
      <MyCarousal/>
      <TitleMessage/>
    </div>
  );
}

export default App;
