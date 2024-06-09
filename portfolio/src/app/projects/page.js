"use client";
import { useState } from "react";
import { games } from "../data.js";
import Navbar from "../navbar.js";
import Link from "next/link";

const Projects = () => {

  return (
    <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
      <section>
        <Navbar></Navbar>
        <h1 className="text-5xl py-2 text-purple-600 font-medium dark:text-purple-400 md:text-6xl text-center">
          Projects
        </h1>
        {/* Card */}
        <div className="flex flex-col gap-10 items-center justify-center py-10 lg:flex-row lg:flex-wrap">
          <div className="grid grid-col gap-10 sm:grid-cols-2 mt-6 sm:w-full lg:w-9/12">
            {games.map((game) => (
              <div
                key={game.id}
                className="p-6 mt-6 border rounded-xl hover:text-blue-600 focus:text-blue-600 relative"                
              >
                <div className="h-full">
                  <Link href={`/projects/games/${game.id}`}>                  
                    <div className="w-full h-full object-cover rounded-md block">
                      <img
                        src={game.imgs[0]}
                        alt={`${game.title} first image`}
                        className="w-full h-full object-cover rounded-md"                        
                      />
                      <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-md">
                        {game.title}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
export default Projects;
