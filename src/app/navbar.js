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
            href="https://docs.google.com/document/d/e/2PACX-1vSHWq0XhvVKXsNvAgFcx74ffAtWDxQj_241RE5O8-vWbXt9Sn27U1JW0uMJF5ypKdvqXXP56YmAutnE/pub"
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
