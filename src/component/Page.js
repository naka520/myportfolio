import { Stack } from "@mui/system";
import { GitHubIcon } from "@mui/icons-material/GitHub";
import React from "react";
import "./../App.css";
import Header from "./Header";
import Pipi from "./pipi.png";
import Okame from "./okamediet.png";
import Supportfolio from "./Supportfolio.png";
import Usako from "./usako.png";

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
      <div className="mt-6">
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
                      ２０２３年２月下旬に学内ハッカソン「ペンギンハック」にて作成しました。
                    </p>
                    <p>
                      体重記録アプリで、目標体重を5キロオーバーするとオカメインコが太ります.
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
      </div>
      <div className="mt-8">
        <div className="prof">
          <ul className="profile drop-shadow-md">
            <li className="border-2 h-4/5 w-4/5 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg bg-zinc-100">
              <Stack>
                <ul className="mt-2  text-left ">
                  <li className="mt-1 ml-2 text-xl">
                    <p className="italic">ProductName : Supportfolio</p>
                  </li>
                  <li className="mt-1 ml-2">
                    <p>
                      ２０２３年１月のハックツハッカソン「ノコギリカップ」にて作成しました。
                    </p>
                    <p>ポートフォリオを投稿するSNSサイトです。</p>
                    <p>
                      私は外身の一部を担当しています（ヘッダー、投稿ページの一部など）。
                    </p>
                    <p>詳しくは以下Topazにて！</p>
                  </li>
                  <li className="mt-4 ml-2 text-xl">
                    <p className="italic">
                      GitHub ▶
                      <a href="https://github.com/tosaken1116/nokogiri_cup">
                        Click Me!
                      </a>
                    </p>
                  </li>
                  <li className="mt-1 ml-2 text-xl">
                    <p className="italic">
                      Topaz▶
                      <a href="https://topaz.dev/projects/4055f79df93a932b88db">
                        Click Me!
                      </a>
                    </p>
                  </li>
                </ul>
              </Stack>
            </li>

            <li className="border-2 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg">
              <img src={Supportfolio}></img>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <div className="prof">
          <ul className="profile drop-shadow-md">
            <li className="border-2 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg">
              <img src={Usako}></img>
            </li>
            <li className="border-2 h-4/5 w-4/5 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg bg-zinc-100">
              <Stack>
                <ul className="mt-2  text-left ">
                  <li className="mt-1 ml-2 text-xl">
                    <p className="italic">ProductName : Usako-chan</p>
                  </li>
                  <li className="mt-1 ml-2">
                    <p>
                      ２０２３年１２月のハックツハッカソン「メガロカップ」にて作成しました。
                    </p>
                    <p>
                      うさこちゃんにリプライをすると、うさこちゃんがあなたのツイートから
                    </p>
                    <p>ネガティブ・ポジティブ判定を行います。</p>
                    <p>
                      私はツイート分析してリプライを返す部分の実装の一部を担当しました。
                    </p>
                    <p>詳しくは以下Topazにて！</p>
                  </li>
                  <li className="mt-4 ml-2 text-xl">
                    <p className="italic">
                      GitHub ▶
                      <a href="https://github.com/Mcpu3/karatoichiba_de_sushi_tabetai_backend">
                        Click Me!
                      </a>
                    </p>
                  </li>
                  <li className="mt-1 ml-2 text-xl">
                    <p className="italic">
                      Topaz▶
                      <a href="https://topaz.dev/projects/2a9106e7526a51adc891">
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
    </div>
  );
}

export default Page;
