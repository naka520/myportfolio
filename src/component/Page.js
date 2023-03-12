import { Stack } from "@mui/system";
import { GitHubIcon } from "@mui/icons-material/GitHub";
import React from "react";
import "./../App.css";
import Header from "./Header";
import Pipi from "./pipi.png";
import Okame from "./okamediet.png";
import Supportfolio from "./Supportfolio.png";
import Usako from "./usako.png";
import AlienBusters from "./AlienBusters.png";
import enikki from "./enikki.png";

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
                    SelfIntoroduce（note） ▶
                    <a href="https://note.com/kaedenakayashiki/n/nf358da162a6e">
                      Click Me!
                    </a>
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
                      <a href="https://ambitious-plant-0c5e40c00.2.azurestaticapps.net/">
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
                    <p className="italic">ProductName : うさこちゃん</p>
                  </li>
                  <li className="mt-1 ml-2">
                    <p>
                      ２０２２年１２月のハックツハッカソン「メガロカップ」にて作成しました。
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
      <div className="mt-8">
        <div className="prof">
          <ul className="profile drop-shadow-md">
            <li className="border-2 h-4/5 w-4/5 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg bg-zinc-100">
              <Stack>
                <ul className="mt-2  text-left ">
                  <li className="mt-1 ml-2 text-xl">
                    <p className="italic">ProductName : AlienBusters</p>
                  </li>
                  <li className="mt-1 ml-2">
                    <p>
                      ２０２２年１１月の技育キャンプ主催「初めてのハッカソン」にて作成しました。
                    </p>
                    <p>「おばけキャッチ」をオマージュしたゲームです。</p>
                    <p>私はイラストとCSSの担当をしました。</p>
                    <p>
                      メインページのエイリアンのCSSアニメーションは、フリーで公開されているサンプルを利用しましたが、
                    </p>
                    <p>
                      まだフロントエンド超・初心者だったため、色や配置の微調整に苦戦しました・・・
                    </p>
                    <p>詳しくは以下Googleslideにて！</p>
                  </li>
                  <li className="mt-4 ml-2 text-xl">
                    <p className="italic">
                      GitHub ▶
                      <a href="https://github.com/claustra01/AlienBusters">
                        Click Me!
                      </a>
                    </p>
                  </li>
                  <li className="mt-1 ml-2 text-xl">
                    <p className="italic">
                      GoogleSlide▶
                      <a href="https://docs.google.com/presentation/d/1OaU14UgOByKkvYUsq9xfbSiVlixu1f7mz4vEncURUeU/edit#slide=id.g19a5d8ab83f_5_950">
                        Click Me!
                      </a>
                    </p>
                  </li>
                </ul>
              </Stack>
            </li>
            <li className="border-2 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg">
              <img src={AlienBusters}></img>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <div className="prof">
          <ul className="profile drop-shadow-md">
            <li className="border-2 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg">
              <img src={enikki}></img>
            </li>
            <li className="border-2 h-4/5 w-4/5 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg bg-zinc-100">
              <Stack>
                <ul className="mt-2  text-left ">
                  <li className="mt-1 ml-2 text-xl">
                    <p className="italic">ProductName : 自動絵日記</p>
                  </li>
                  <li className="mt-1 ml-2">
                    <p>
                      ２０２２年１１月の「SAGA Azure Hackathon
                      vol.2」にて作成しました。
                    </p>
                    <p>私が初めて参加したハッカソンになります。</p>
                    <p>AIが作成した絵に対して１行日記をつけるアプリです。</p>
                    <p>私はCSSの担当をしました。</p>
                    <p>詳しくは以下Topazにて！</p>
                  </li>
                  <li className="mt-4 ml-2 text-xl">
                    <p className="italic">
                      GitHub ▶
                      <a href="https://github.com/yamato0211/azure-tutorial">
                        Click Me!
                      </a>
                    </p>
                  </li>
                  <li className="mt-1 ml-2 text-xl">
                    <p className="italic">
                      Topaz▶
                      <a href="https://topaz.dev/projects/6e45ce54ea6dc2776396">
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
