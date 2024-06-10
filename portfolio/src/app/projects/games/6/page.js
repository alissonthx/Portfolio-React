import Navbar from "../../../navbar";

const Games = () => {
  return (
    <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
      <Navbar></Navbar>
      {/* Title Section */}
      <section>
        <h1 className="py-2 text-5xl text-purple-600 font-medium dark:text-purple-400 md:text-6xl text-center">
          Procedural World Generator
        </h1>
      </section>
      {/* Video Section */}
      <section>
        <div className="flex justify-center w-full py-10">
          <iframe
            className="lg:w-[66%] lg:h-[548px] h-[170px]"            
            src="https://www.youtube.com/embed/IKge0IYp9Y8"
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
                <li>Unity Asset Store</li>
              </ul>
              <h2 className="mt-4 text-3xl font-semibold text-gray-800 dark:text-gray-200">
                Tools Used
              </h2>
              <ul className="text-lg text-gray-500">
                <li>C#</li>
                <li>Unity Game Engine</li>
                <li>Blender</li>
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
                Asset Tool for Unity Store Easily generate small island-format
                grids complete with terrain and tree prefabs(still in
                development).
                {/* permadeath/game over. You also can check the game availble on{" "}
                <a
                  href="https://tempestdeveloper.itch.io/zombie-apocalypse"
                  target="_blank"
                  className="text-blue-500 cursor-pointer"
                >
                  Itch
                </a> */}
              </p>
              <h2 className="mt-6 text-3xl font-semibold text-gray-800 dark:text-gray-200">
                Goals
              </h2>
              <ul className="text-lg text-gray-500">
                <li>
                  • Create an asset tool ready for publishing on the Unity Asset
                  Store
                </li>
                <li>• Develop a tool to generate islands</li>
                <li>
                  • Implement an algorithm to spawn trees at random points on
                  the terrain
                </li>
                <li>
                  • Create a user-friendly GUI for easy tool usage within the
                  inspector of the game engine
                </li>
                <li>• Ensure good performance</li>
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
                  Asset Info
                </h2>
                <ul class="text-lg text-gray-500">
                  <li className="text-gray-200 md:text-xl mt-2">
                    Script Reference:{" "}
                  </li>
                  <li>Grid.cs</li>
                  <li className="text-gray-200 md:text-xl mt-6">Namespace: </li>
                  <li> WorldGeneratorTool.Core</li>
                  <li className="text-gray-200 md:text-xl mt-6">
                    Description:
                  </li>
                  <li>
                    {" "}
                    This script handles the procedural generation of a
                    grid-based world.
                  </li>
                  <li className="text-gray-200 md:text-xl mt-6">Properties:</li>
                  <li className="mt-2">
                    <code class="text-gray-300 p-1 rounded">
                      [SerializeField] private GameObject[] treePrefabs;
                    </code>
                    Array of tree prefabs used for tree generation.
                  </li>
                  <li>
                    <code class="text-gray-300 p-1 rounded">
                      [SerializeField] private Material terrainMaterial;
                    </code>
                    Material used for the terrain.
                  </li>
                  <li>
                    <code class="text-gray-300 p-1 rounded">
                      [SerializeField] private Material edgeMaterial;
                    </code>
                    Material used for the edges.
                  </li>
                  <li>
                    <code class="text-gray-300 p-1 rounded">
                      [SerializeField] private float waterLevel;
                    </code>
                    Threshold for water level.
                  </li>
                  <li>
                    <code class="text-gray-300 p-1 rounded">
                      [SerializeField] private float scale;
                    </code>
                    Scale of the noise used for terrain generation.
                  </li>
                  <li>
                    <code class="text-gray-300 p-1 rounded">
                      [SerializeField] private float treeNoiseScale;
                    </code>
                    Scale of the noise used for tree distribution.
                  </li>
                  <li>
                    <code class="text-gray-300 p-1 rounded">
                      [SerializeField] private float treeDensity;
                    </code>
                    Density of trees in the terrain.
                  </li>
                  <li>
                    <code class="text-gray-300 p-1 rounded">
                      [SerializeField] private float riverNoiseScale;
                    </code>
                    Scale of the noise used for river generation.
                  </li>
                  <li>
                    <code class="text-gray-300 p-1 rounded">
                      [SerializeField] private int rivers;
                    </code>
                    Number of rivers to generate.
                  </li>
                  <li>
                    <code class="text-gray-300 p-1 rounded">
                      [SerializeField] private int size;
                    </code>
                    Size of the grid.
                  </li>
                  <li class="text-gray-200 mdtext-xl mt-6">Methods</li>
                  <li className="mt-2">
                    <code class="text-gray-300 p-1 rounded">void Start()</code>
                    Initializes the grid and generates the procedural world.
                  </li>
                  <li>
                    <code class="text-gray-300 p-1 rounded">
                      void DrawTerrainMesh(Cell[,] grid)
                    </code>
                    Draws the terrain mesh based on the grid data.
                  </li>
                  <li>
                    <code class="text-gray-300 p-1 rounded">
                      void DrawEdgeMesh(Cell[,] grid)
                    </code>
                    Draws the edge mesh around the water areas.
                  </li>
                  <li>
                    <code class="text-gray-300 p-1 rounded">
                      void DrawTexture(Cell[,] grid)
                    </code>
                    Draws the texture for the terrain based on the grid data.
                  </li>
                  <li>
                    <code class="text-gray-300 p-1 rounded">
                      void GenerateTrees(Cell[,] grid)
                    </code>
                    Generates trees on the terrain based on the grid data.
                  </li>
                  <li className="mt-6">
                    Source code on{" "}
                    <a
                      href="https://github.com/alissonthx/World-Generator"
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
