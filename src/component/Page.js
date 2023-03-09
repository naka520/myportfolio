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
          <li className="border-2 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg">
            <img src={Pipi}></img>
          </li>
          <li className="border-2 h-4/5 w-4/5 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg">
            <Stack>
              <ul className="mt-2  text-left text-xl">
                <li>
                  <p className="italic">Name : KaedeNakayashiki</p>
                </li>
                <li>
                  <p className="italic">
                    University : Kyushu Institute of Technology{" "}
                  </p>
                </li>
              </ul>
            </Stack>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Page;
