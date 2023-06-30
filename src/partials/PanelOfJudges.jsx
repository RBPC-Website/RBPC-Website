import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import React, { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import judge1 from "../images/Judges/judge1.png";
import judge2 from "../images/Judges/judge2.png";
import judge3 from "../images/Judges/judge3.png";
import judge4 from "../images/Judges/judge4.png";
import leftIcon from "../images/left-arrow.svg";
import rightIcon from "../images/right-arrow.svg";
import PoJCard from "../utils/PoJCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/additional-styles/judges.css";

function calculateTotalPages(totalItems, itemsPerPage) {
  return (totalItems - itemsPerPage) + 1;
}

function PanelOfJudges() {
  const { t } = useTranslation(["panel-of-judges"]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2)
  const swiperRef = React.useRef(null);
  // I dont know how to get number of children so change this 5 to the total amount of judge we have
  const dots = useMemo(() => new Array(calculateTotalPages(7, cardsPerView)).fill(0), [cardsPerView]);

  function handleResize() {
    if (window.innerWidth <= 640) { // sm
      setCardsPerView(1)
    } else if (window.innerWidth <= 768) { // md
      setCardsPerView(3)
    } else if (window.innerWidth <= 1024) { // lg
      setCardsPerView(3)
    } else setCardsPerView(4)
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);
  
  return (
    <section id="judges" className="relative bg-black-100 lg:px-20 md:px-20 -mt-1 px-7 pb-20"  data-aos="fade-up" data-aos-offset="400" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom">
      <h2 className="h1 text-left font-extrabold text-[#00FFA8]">
        Panel of Judges
      </h2>
      <div className="w-full h-3/4 judges-slides relative my-10">
        <Swiper
          modules={[Pagination]}
          onSlideChange={(swiper) => {
            setActiveSlide(swiper.activeIndex);
          }}
          autoplay
          onAfterInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={22}
          slidesPerView={cardsPerView}
        >
          <SwiperSlide>
            
            <PoJCard 
              cardImage={judge1} 
              name={'Professor Robert McClelland'} 
              description={'Dean, School of Business and Management'} 
              school={'RMIT Vietnam'}/>
          </SwiperSlide>
          <SwiperSlide>
            <PoJCard 
              cardImage={judge2} 
              name={'Professor Robert McClelland'} 
              description={'Dean, School of Business and Management'} 
              school={'RMIT Vietnam'}/>
          </SwiperSlide>
          <SwiperSlide>
            <PoJCard 
              cardImage={judge3} 
              name={'Professor Robert McClelland'} 
              description={'Dean, School of Business and Management'} 
              school={'RMIT Vietnam'}/>
          </SwiperSlide>
          <SwiperSlide>
            <PoJCard 
              cardImage={judge4} 
              name={'Professor Robert McClelland'} 
              description={'Dean, School of Business and Management'} 
              school={'RMIT Vietnam'}/>
          </SwiperSlide>
          <SwiperSlide>
            <PoJCard 
              cardImage={judge1}
              name={'Professor Robert McClelland'} 
              description={'Dean, School of Business and Management'} 
              school={'RMIT Vietnam'}/>
          </SwiperSlide>
          <SwiperSlide>
            <PoJCard 
              cardImage={judge1}
              name={'Professor Robert McClelland'} 
              description={'Dean, School of Business and Management'} 
              school={'RMIT Vietnam'}/>
          </SwiperSlide>
          <SwiperSlide>
            <PoJCard 
              cardImage={judge1}
              name={'Professor Robert McClelland'} 
              description={'Dean, School of Business and Management'} 
              school={'RMIT Vietnam'}/>
          </SwiperSlide>
        </Swiper>
        <div className="w-full flex mt-9 items-center md:justify-center justify-between">
          {/* Left icon */}
          <div
            onClick={() => swiperRef?.current?.slidePrev?.()}
            className="cursor-pointer hover:opacity-80 transition-all md:mr-10 mr-0 w-8 h-8 flex items-center justify-center bg-white rounded-full py-2 z-10"
          >
            <img src={leftIcon} className="w-full h-full object-contain select-none" />
          </div>

          {/* Dot pages */}
          <div className="flex flex-wrap -mx-2 gap-[2px] z-10">
            {dots?.map((dot, idx) => (
              <div key={idx} className="px-2">
                <div
                  onClick={() => {
                    swiperRef.current.slideTo(idx);
                  }}
                  className={`w-3 h-3 rounded-full bg-white cursor-pointer ${
                    activeSlide === idx ? "opacity-100" : "opacity-50"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Right icon */}
          <div
            onClick={() => swiperRef?.current?.slideNext?.()}
            className="cursor-pointer hover:opacity-80 transition-all md:ml-10 ml-0 w-8 h-8 flex items-center justify-center bg-white rounded-full py-2 z-10"
          >
            <img src={rightIcon} className="w-full h-full object-contain select-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PanelOfJudges;
