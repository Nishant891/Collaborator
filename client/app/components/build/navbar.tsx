import { links } from "@/lib/navdata";
import { FaGithub } from "react-icons/fa6";

export default function Navbar() {
  return (
    <header>
      <div
        className="h-[4.5rem] w-full z-20 flex items-center justify-between px-3 rounded-none bg-[#1B1A1A]"
      >
        <a href="https://github.com/Nishant891/CodingFlux">
          <FaGithub size={30} fill="white"/>
        </a>
        <ul className="flex w-full flex-wrap items-center justify-center gap-0 text-gray-50 sm:w-[initial] sm:flex-nowrap sm:gap-6">
          {links.map((link) => {
            return (
              <li
                className="flex items-center justify-center m-0"
                key={link.hash}
              >
                <a
                  className="flex items-center justify-center rounded-full px-2 py-2 hover:text-gray-400 transition"
                  href={link.hash}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
        <a href="https://github.com/Nishant891/CodingFlux">
          <FaGithub size={30} fill="white"/>
        </a>
      </div>
    </header>
  );
}
