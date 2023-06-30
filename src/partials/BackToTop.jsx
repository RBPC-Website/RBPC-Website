import { useEffect, useState } from "react";
import leftIcon from "../images/left-arrow.svg";

const BackToTop = () => {
  const [isShowingBackToTopButton, showBackToTopButton] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", scrollFunction);

    return () => {
      document.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 900 ||
      document.documentElement.scrollTop > 900
    ) {
      showBackToTopButton(true);
    } else {
      showBackToTopButton(false);
    }
  };
  return (
    <div
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className={`sm:flex flex-col hidden justify-center items-center w-12 aspect-square transform transition-all z-10 bg-green-100 opacity-70 text-black-100 fixed right-6 bottom-6 hover:cursor-pointer ${
        isShowingBackToTopButton ? "sm:flex" : "sm:hidden"
      }`}
    >
      <img src={leftIcon} alt="back to top" className="transform rotate-90 w-[60%] -mb-1"/>
      <p>TOP</p>
    </div>
  );
};

export default BackToTop;
