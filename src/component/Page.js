import { Stack } from "@mui/system";
import { GitHubIcon } from "@mui/icons-material/GitHub";
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
                <li className="mt-1 ml-2">
                  <p className="italic">Name : KaedeNakayashiki</p>
                </li>
                <li className="mt-1 ml-2">
                  <p className="italic">
                    University : Kyushu Institute of Technology
                  </p>
                </li>
                <li className="mt-1 ml-2">
                  <p className="italic">
                    GitHub ▶<a href="https://github.com/naka520">Click Me!</a>
                  </p>
                </li>
                <li className="mt-1 ml-2">
                  <p className="italic">
                    Twitter ▶
                    <a href="https://twitter.com/yashiki0520">Click Me!</a>
                  </p>
                </li>
                <li className="mt-1 ml-2">
                  <p className="italic">
                    Wantedlly ▶
                    <a href="https://www.wantedly.com/id/kaede_nakayashiki">
                      Click Me!
                    </a>
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
