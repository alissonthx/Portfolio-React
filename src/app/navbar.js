import { BsFillMoonStarsFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="py-10 flex justify-between dark:text-white">
      <a href="/">
        <h1 className="text-xl">About Me</h1>
      </a>
      <a href="/projects">
        <h1 className="text-xl">Projects</h1>
      </a>
      <ul className="flex items-center">
        {/* <li>
          <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
        </li> */}
        <li>
          <a
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-none rounded-md px-4 py-2"
            href="https://www.canva.com/design/DAFubOFfHlo/KSCWrWKRttTldJnpNgsT0w/edit?utm_content=DAFubOFfHlo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>    
  );
};

export default Navbar;
