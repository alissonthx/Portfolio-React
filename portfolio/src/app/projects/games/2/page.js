import Navbar from "../../../navbar";

const Games = () => {
  return (
    <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
      <Navbar></Navbar>
      {/* Title Section */}
      <section>
        <h1 className="py-2 text-5xl text-purple-600 font-medium dark:text-purple-400 md:text-6xl text-center">
          Zombie Apocalypse
        </h1>
      </section>
      {/* Video Section */}
      <section>
        <div className="flex justify-center w-full h-full py-10">
          <iframe
            className="lg:w-[66%] lg:h-[574px] h-[170px]"
            src="https://www.youtube.com/embed/x5f1pKrNm5g"
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
              </ul>
              <h2 className="mt-4 text-3xl font-semibold text-gray-800 dark:text-gray-200">
                Team
              </h2>
              <ul className="text-lg text-gray-500">
                <li>Independent</li>
              </ul>
              <h2 className="mt-4 text-3xl font-semibold text-gray-800 dark:text-gray-200">
                Role
              </h2>
              <ul className="text-lg text-gray-500">
                <li>All aspects</li>
              </ul>
            </div>
            <div className="w-full mt-6 pb-10 lg:mt-0">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
                Overview
              </h2>
              <p className="text-lg text-gray-500">
                Survival Game where you can shoot enemies, defeat bosses, spawn
                bosses, spawn enemies, collect health drops, and experience
                permadeath/game over. You also can check the game availble on{" "}
                <a
                  href="https://tempestdeveloper.itch.io/zombie-apocalypse"
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
                <li>• Develop a system to spawn enemies</li>
                <li>
                  • Implement a system to spawn a boss at specific intervals
                </li>
                <li>
                  • Balance the difficulty to ensure a fun and casual gameplay
                  experience
                </li>
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
                  <li>
                    • Key Features: Intuitive Controls: Utilize the classic
                    keyboard controls (WASD) for smooth movement, allowing you
                    to navigate your way through treacherous environments with
                    ease.
                  </li>
                  <li className="mt-6">
                    • Simple Aim: Wield your weapon with precision using the
                    mouse, allowing for accurate targeting and deadly shots
                    against the oncoming zombie threat.
                  </li>
                  <li className="mt-6">
                    Source code on{" "}
                    <a
                      href="https://github.com/alissonthx/apocalipse-zumbi-alura"
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
