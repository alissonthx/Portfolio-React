import Navbar from "./navbar.js";
import Head from "next/head";
import Image from "next/image";
import perfil from "../../public/perfil.jpeg";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Alisson's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <Navbar></Navbar>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-purple-600 font-medium dark:text-purple-400 md:text-6xl">
              Álisson Marques
            </h2>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Software developer with almost 4 years of experience, highly proficient in Javascript and C#,
               I have worked with Docker, .NET, SQL, Docker, Javascript, Typescript, Angular and React/Next. Specialist in problem solving and performance improvement in code.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-500 dark:text-gray-400">
              <a  target="_blank" href="https://x.com/AlissonNymph">
                <AiFillTwitterCircle />
              </a>
              <a  target="_blank" href="https://www.linkedin.com/in/alisson-marques-miquelace/">
                <AiFillLinkedin />
              </a>
              <a  target="_blank" href="https://www.youtube.com/channel/UCWSYLuSvl0q4bVWprGs_XbA">
                <AiFillYoutube />
              </a>
            </div>
            <div className="justify-center mx-auto bg-gradient-to-b from-purple-500 rounded-full min-w-10  w-60 h-60 relative overflow-hidden mt-10 md:h-96 md:w-96">
              <Image src={perfil} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
