import Navbar from "../../../navbar";
import Image from "next/image";
import bubbledash from "../../../../../public/bubble-dash.gif";
import bubbleguy from "../../../../../public/bubble-guy.gif";
import bubblestages from "../../../../../public/bubble-stages.gif";
import bubblejump from "../../../../../public/bubble-jump.gif";

const Games = () => {
  return (
    <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
      <Navbar></Navbar>
      {/* Title Section */}
      <section>
        <h1 className="py-2 text-5xl text-purple-600 font-medium dark:text-purple-400 md:text-6xl text-center">
          The Legend of Bubble Guy
        </h1>
      </section>
      {/* Video Section */}
      <section>
        <div className="flex justify-center w-full h-full py-10">
          <iframe
            className="lg:w-[66%] md:w-[100%] md:h-[350px] lg:h-[574px] h-[170px]"
            src="https://www.youtube.com/embed/PZNW77pghmU"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
            allowfullscreen
          ></iframe>
        </div>
      </section>

      {/* Overview Section */}
      <section className="flex justify-center">
        <div className="w-full flex flex-col justify-center lg:flex-row max-w-[85rem]">
          <div className="grid lg:grid-cols-2 lg:w-9/12">
            <div className="w-full mt-6 lg:mt-0">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
                Platform
              </h2>
              <ul className="text-lg text-gray-500">
                <li>PC/Web</li>
              </ul>
              <h2 className="mt-4 text-3xl font-semibold text-gray-800 dark:text-gray-200">
                Tools Used
              </h2>
              <ul className="text-lg text-gray-500">
                <li>C#</li>
                <li>Unity Game Engine</li>
                <li>Aseprite</li>
              </ul>
              <h2 className="mt-4 text-3xl font-semibold text-gray-800 dark:text-gray-200">
                Team
              </h2>
              <ul className="text-lg text-gray-500">
                <li>4</li>
              </ul>
              <h2 className="mt-4 text-3xl font-semibold text-gray-800 dark:text-gray-200">
                Role
              </h2>
              <ul className="text-lg text-gray-500">
                <li>Gameplay Programming</li>
                <li>Level Design</li>
                <li>UI Design and Programming</li>
              </ul>
            </div>
            <div className="w-full mt-6 pb-10 lg:mt-0">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
                Overview
              </h2>
              <p className="text-lg text-gray-500">
                Game made for 99Jam in 10 days. This platform you have power to
                inflate your bubble at two stages. Utilize it to ensnare
                enemies, peacefully traverse through the game world. Small
                bubbles grant you the ability to leap to greater heights, while
                larger ones envelop you, enabling you to execute dashes. You
                also can check the game availble on{" "}
                <a
                  href="https://tempestdeveloper.itch.io/bubbleguy"
                  target="_blank"
                  className="text-blue-500 cursor-pointer"
                >
                  Itch
                </a>
                .
              </p>
              <h2 className="mt-6 text-3xl font-semibold text-gray-800 dark:text-gray-200">
                Goals
              </h2>
              <ul className="text-lg text-gray-500">
                <li>• Design and polish level elements</li>
                <li>• Implement character movement system</li>
                <li>• Implement bubble mechanic</li>
                <li>• Create a whole level design</li>
                <li>• Add sound effects and background music</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Role/Game info */}
      <section>
        <div class="w-full flex flex-col items-center pb-10">
          <hr className="w-full max-w-5xl my-6 border-gray-300"></hr>
          <div class="w-full flex flex-col justify-center lg:flex-row max-w-[85rem]">
            <div class="grid lg:grid-cols-1 lg:w-9/12">
              <div class="w-full mt-6 lg:mt-0">
                <h2 class="text-3xl font-semibold text-gray-800 dark:text-gray-200">
                  Game Info
                </h2>
                <ul class="text-lg text-gray-500">
                  <li className="text-2xl font-semibold mt-6 text-gray-200">
                    Keyboard
                  </li>
                  <li>Z key: Inflate the bubble</li>
                  <li>C key: Shoot the bubble</li>
                  <li>
                    W, A, S, D/Up, Down, Left, Right keys: Control the player's
                    movements.
                  </li>
                  <li>Space: Jump</li>
                  <li className="text-2xl font-semibold mt-6 text-gray-200">
                    Gamepad
                  </li>
                  <li>Y button: Inflate the bubble</li>
                  <li>B button: Shoot the bubble</li>
                  <li>Left Stick: Control the player's movements.</li>
                  <li>A button: Jump</li>
                  <li className="text-gray-500 mt-6">• Particle System.</li>
                  <Image src={bubbleguy}></Image>
                  <li className="text-gray-500 mt-6">
                    • Inflate bubble Stage 1 and Stage 2.
                  </li>
                  <Image src={bubblestages}></Image>
                  <li className="text-gray-500 mt-6">• Using bubble Stage 1.</li>
                  <Image src={bubblejump}></Image>
                  <li className="text-gray-500 mt-6">• Using bubble Stage 2.</li>
                  <Image src={bubbledash}></Image>
                  <li className="text-gray-200 mt-6">
                    Source code on{" "}
                    <a
                      href="https://github.com/alissonthx/99Jam"
                      target="_blank"
                      className="text-blue-500 cursor-pointer"
                    >
                      GitHub
                    </a>
                    .
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Games;
