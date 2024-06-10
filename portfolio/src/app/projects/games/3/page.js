import Navbar from "../../../navbar";
import Image from "next/image";
import cookhell from "../../../../../public/cookhell.png";
import scriptables from "../../../../../public/scriptables.png";
import scriptableAudio from "../../../../../public/scriptable-audio.png";
import scriptableFoods from "../../../../../public/scriptable-foods.png";
import scriptableFryingRecipes from "../../../../../public/scriptable-frying-recipe.png";
import scriptableKitchenObjects from "../../../../../public/scriptable-kitchen-objects.png";
import scriptableListRecipes from "../../../../../public/scriptable-list-recipes.png";
import scriptableMeat from "../../../../../public/scriptable-meat-cooked.png";
import scriptableRecipe from "../../../../../public/scriptable-recipe.png";
import cellShader from "../../../../../public/cellshader.png";

const Games = () => {
  return (
    <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
      <Navbar></Navbar>
      {/* Title Section */}
      <section>
        <h1 className="py-2 text-5xl text-purple-600 font-medium dark:text-purple-400 md:text-6xl text-center">
          CookHell
        </h1>
      </section>
      {/* Video Section */}
      <section>
        <div className="flex justify-center w-full h-full py-10">
          <iframe
            className="lg:w-[66%] md:w-[100%] md:h-[350px] lg:h-[574px] h-[170px]"
            src="https://www.youtube.com/embed/2svi1NUrWO0"
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
                <li>PC</li>
              </ul>
              <h2 className="mt-4 text-3xl font-semibold text-gray-800 dark:text-gray-200">
                Tools Used
              </h2>
              <ul className="text-lg text-gray-500">
                <li>C#</li>
                <li>Unity Game Engine</li>
                <li>Blender</li>
                <li>Krita</li>
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
                Cooking Game where you can . You also can check the game
                availble on{" "}
                <a
                  href="https://tempestdeveloper.itch.io/cook-hell"
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
                <li>• Create Low poly model characters</li>
                <li>• Implement Toon Shader and shader to deliver counter</li>
                <li>• Develop Timer to control game</li>
                <li>• Implement a system for Recipes</li>
                <li>
                  • Utilize scriptable objects to easily implement more features
                  and recipes
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
                <h2 class="mb-6 text-3xl font-semibold text-gray-800 dark:text-gray-200">
                  Game Info
                </h2>
                <ul class="text-lg text-gray-500">
                  <li class="mt-6 text-3xl font-semibold text-gray-800 dark:text-gray-200">
                    Overview
                  </li>
                  <li className="mb-6">
                    In this project, I learned how to implement events, use
                    Unity's new input system, and create state machines to
                    control the state of the game, the foods, and the
                    animations. The core of the game uses ScriptableObjects to
                    manage the objects' data and some information, and to
                    control the states. I connected these components using
                    events and delegates, and finally, I worked on some UI and
                    low-poly artwork.
                  </li>
                </ul>
                <ul>
                  <ul className="text-lg text-gray-500">
                    <li>
                      • Provide a tutorial UI to explain the game before it
                      starts, including controls for both gamepads and
                      keyboards.
                      <Image src={cookhell}></Image>
                    </li>
                  </ul>
                  <ul className="text-lg text-gray-500">
                    <li className="mt-6">
                      • Created scriptable objects to control the recipes, types
                      of food, fried foods, foods available to put on the top of
                      the counter, and audio clips.
                      <Image src={scriptables}></Image>
                    </li>
                  </ul>
                  <ul className="lg:grid lg:grid-cols-2 text-lg text-gray-500">
                    <li className="mt-6 max-w-md">
                      • Created a scriptable object to store data on the
                      possible foods that can be cut.
                      <Image src={scriptableFoods}></Image>
                    </li>
                    <li className="mt-6 max-w-md">
                      • Created a scriptable object to store data on the
                      possible foods that can be fried.
                      <Image src={scriptableFryingRecipes}></Image>
                    </li>
                    <li className="mt-6 max-w-md">
                      • Created a scriptable object to store kitchen objects
                      that are available to put on the counter to cut and get
                      their outside mesh.
                      <Image src={scriptableKitchenObjects}></Image>
                    </li>
                    <li className="mt-6 max-w-md">
                      • Created a scriptable object to get the output of
                      possible foods that can be burned and that the player can
                      use but not get any points for delivering these recipes.
                      <Image src={scriptableMeat}></Image>
                    </li>
                  </ul>
                  <ul className="lg:grid lg:grid-cols-2 text-lg text-gray-500">
                    <li className="mt-6 max-w-md">
                      • Created a scriptable object to control audio clips with
                      variations.
                      <Image src={scriptableAudio}></Image>
                    </li>
                    <li className="mt-6 max-w-md">
                      • Created a scriptable object for the possible foods in
                      each recipe.
                      <Image className="" src={scriptableRecipe}></Image>•
                      Created a scriptable object to store data on the list of
                      available recipes.
                      <Image src={scriptableListRecipes}></Image>
                    </li>
                  </ul>
                </ul>
                <ul className="text-lg">
                  <li className="mt-6 text-gray-500">
                    • Created cel shading for the entire game to give it a
                    cartoon-like appearance.
                  </li>
                  <Image src={cellShader}></Image>
                  <li className="mt-6 text-gray-200">
                    Source code on{" "}
                    <a
                      href="https://github.com/alissonthx/CookHell"
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
