import { Bars3Icon } from "@heroicons/react/24/outline";
import { MdClear } from "react-icons/md";
import { useEffect, useState } from "react";
import Switcher from "./Switcher";
import { FaGithub } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollColor, setScrollColor] = useState(false);

  const handleMenuOpen = () => {
    setMobileMenuOpen(true);
    document
      .getElementById("nav-items")
      .classList.remove("max-sm:animate-drop-t-back");
  };

  const handleMenuClose = async () => {
    setMobileMenuOpen(false);
    const nav = document.getElementById("nav-items");
    await setTimeout(() => {
      nav.classList.remove("max-sm:hidden");
      nav.classList.add("max-sm:animate-drop-t-back");
    }, [0]);
    setTimeout(() => {
      nav.classList.remove("max-sm:animate-drop-t-back");
      nav.classList.add("max-sm:hidden");
    }, [1100]);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setMobileMenuOpen(false);
      }
    };

    function handleScroll() {
      if (window.scrollY > 300) {
        setScrollColor(true);
      } else {
        setScrollColor(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full fixed backdrop-blur top-0 z-40 flex-none transition-colors duration-1000 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] supports-backdrop-blur:bg-white/95 bg-transparent ${
        mobileMenuOpen
          ? "max-sm:dark:bg-black max-sm:bg-white"
          : scrollColor
          ? "dark:bg-black/80 bg-white/80"
          : "dark:bg-black/10"
      }`}
    >
      <Fade>
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 relative"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a
              href="/"
              className="-m-1.5 p-1.5 bg-blu flex items-center gap-2 flex-wrap"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 48 48"
                // className="transform scale-x-[-1]"
              >
                <path
                  fill="rgb(37,99,235)"
                  d="M5 42L17 6 31 6 43 42 32.1 42 24 13 19 31 30 31 16 42z"
                ></path>
              </svg>
              <div>
                <span className="dark:text-white text-black">ADWebz</span>
                <p className="uppercase text-slate-500 text-[11px] tracking-wider">
                  personal
                </p>
              </div>
            </a>
          </div>
          <div className="flex gap-7">
            <div className="flex sm:hidden">
              {mobileMenuOpen ? (
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 dark:text-gray-300 text-black"
                  onClick={handleMenuClose}
                >
                  <MdClear className="h-6 w-6" />
                </button>
              ) : (
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 dark:text-gray-300 text-black"
                  onClick={handleMenuOpen}
                >
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              )}
            </div>
            <div
              id="nav-items"
              className={`flex gap-7 max-sm:flex-col max-sm:absolute max-sm:w-full max-sm:left-0 max-sm:top-0 transition delay-200 justify-center items-center max-sm:px-6 max-sm:py-8 max-sm:dark:bg-black max-sm:bg-white max-sm:-z-10 ${
                mobileMenuOpen
                  ? "max-sm:visible animate-drop-t shadow"
                  : "max-sm:hidden animate-none"
              }`}
            >
              <div className="flex flex-row gap-4 text-black dark:text-slate-300 max-sm:flex-col">
                {/* <a
                  href="/demo"
                  className="dark:hover:text-white hover:text-slate-600 dark:text-gray-700 text-gray-400"
                >
                  Demo
                </a> */}
                <a
                  href="#about"
                  className="dark:hover:text-white hover:text-slate-600"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="dark:hover:text-white hover:text-slate-600"
                >
                  Projects
                </a>
                <a
                  href="#blogs"
                  className="dark:hover:text-white hover:text-slate-600"
                >
                  Blogs
                </a>
                <a
                  href="#contacts"
                  className="dark:hover:text-white hover:text-slate-600"
                >
                  Contacts
                </a>
              </div>
              <div className="flex gap-7">
                <Switcher />
                <a
                  href="https://github.com/akshayxemo/portfolio"
                  target="blank"
                  className="aspect-square cursor-pointer text-black hover:text-slate-600 dark:text-slate-300 dark:hover:text-white text-xl"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </Fade>
    </header>
  );
}
