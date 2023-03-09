import { Stack } from "@mui/system";
import { GitHubIcon } from "@mui/icons-material/GitHub";
import React from "react";
import "./../App.css";
import Header from "./Header";
import Pipi from "./pipi.png";
import Okame from "./okamediet.png";

function Page() {
  return (
    <div>
      <Header />
      <div className="prof">
        <ul className="profile drop-shadow-md">
          <li className="border-2 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg">
            <img src={Pipi}></img>
          </li>
          <li className="border-2 h-4/5 w-4/5 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg bg-zinc-100">
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
      <div>
        <h1 className="mt-4 bg-stone-100 text-2xl italic rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg drop-shadow-md">
          My product
        </h1>
      </div>
      <div className="prof">
        <ul className="profile drop-shadow-md">
          <li className="border-2 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg">
            <img src={Okame}></img>
          </li>
          <li className="border-2 h-4/5 w-4/5 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg bg-zinc-100">
            <Stack>
              <ul className="mt-2  text-left ">
                <li className="mt-1 ml-2 text-xl">
                  <p className="italic">ProductName : OkameDiet</p>
                </li>
                <li className="mt-1 ml-2">
                  <p>
                    学内ハッカソン「ペンギンハック」にて作成しました。体重記録アプリで、目標体重を5キロオーバーするとオカメインコが太ります.
                  </p>
                  <p>
                    メンターさんにアドバイスを頂きながら初めて一人で実装を行いました。
                  </p>
                </li>
                <li className="mt-4 ml-2 text-xl">
                  <p className="italic">
                    GitHub ▶
                    <a href="https://github.com/naka520/okamecalender">
                      Click Me!
                    </a>
                  </p>
                </li>
                <li className="mt-1 ml-2 text-xl">
                  <p className="italic">
                    Deploy（Azure）▶
                    <a href="https://twitter.com/yashiki0520">Click Me!</a>
                  </p>
                </li>
              </ul>
            </Stack>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
}

export default Page;
