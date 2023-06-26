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
      className={`w-8 h-8 rounded-full transform transition-all -rotate-90 bg-white fixed right-6 bottom-6 ${
        isShowingBackToTopButton ? "opacity-100" : "opacity-0"
      }`}
    >
      <img src={leftIcon} alt="back to top" />
    </div>
  );
};

export default BackToTop;
