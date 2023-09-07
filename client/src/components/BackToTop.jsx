import { useEffect, useState } from "react";
import { BiSolidUpArrowAlt } from "react-icons/bi";

export default function BackToTop() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const BackToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      {scrollY > 250 ? (
        <button
          className="p-2 rounded text-white bg-orange-500 hover:bg-orange-600 fixed right-5 bottom-5 text-3xl"
          onClick={BackToTop}
        >
          <BiSolidUpArrowAlt />
        </button>
      ) : (
        ""
      )}
    </>
  );
}
