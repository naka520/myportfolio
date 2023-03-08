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
          <li className="border-4">
            <img src={Pipi}></img>
          </li>
          <li className="border-4 h-4/5 w-4/5">
            <Stack>
              <ul className="mt-2  text-left text-xl">
                <li>名前 : 中屋敷楓</li>
              </ul>
            </Stack>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Page;
