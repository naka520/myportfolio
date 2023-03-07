import { Stack } from "@mui/system";
import React from "react";
import "./../App.css";
import Header from "./Header";
import Pipi from "./pipi.png";

function Page() {
  return (
    <div>
      <Header />
      <div className="prof">
        <ul className="profile">
          <li>
            <img src={Pipi}></img>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default Page;
