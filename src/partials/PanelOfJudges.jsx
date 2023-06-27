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
  const dots = useMemo(() => new Array(calculateTotalPages(5, cardsPerView)).fill(0), [cardsPerView]);

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
    window.addEventListener('resize', handleResize)
  })

  return (
    <section className="relative bg-black-100 lg:px-20 md:px-20 -mt-1 px-7 pb-20">
      <h2 className="text-[68px] text-left font-extrabold text-[#00FFA8]">
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
            {/* <div className="keen-slider__slide number-slide1 rounded-[30px] overflow-hidden">
              <img alt="..." src={judge1} />
              <div className="h-full w-full absolute left-0 flex flex-col rounded-[30px] overflow-hidden justify-end bottom-0 top-0 right-0 bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.76)] px-[35px] pb-2.5 pt-7">
                <div className="h-[137px] w-[225px] leading-none">
                  <p className="inline text-2xl font-bold text-white">
                    Professor Robert McClelland
                    <br />
                  </p>
                  <p className="inline text-base font-normal mt-5 text-[#DEDEDE]">
                    Dean, School of Business and Management
                    <br />
                  </p>
                  <p className="inline text-base font-normal text-[#DEDEDE]">
                    RMIT Vietnam
                  </p>
                </div>
              </div>
            </div> */}
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
        </Swiper>
        <div className="w-full flex mt-9 items-center justify-center">
          {/* Left icon */}
          <div
            onClick={() => swiperRef?.current?.slidePrev?.()}
            className="cursor-pointer hover:opacity-80 transition-all mr-10 w-8 h-8 flex items-center justify-center bg-white rounded-full p-1"
          >
            <img src={leftIcon} className="w-full h-full object-contain select-none" />
          </div>

          {/* Dot pages */}
          <div className="flex flex-wrap -mx-2 gap-2">
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
            className="cursor-pointer hover:opacity-80  transition-all ml-10 w-8 h-8 flex items-center justify-center bg-white rounded-full p-1"
          >
            <img src={rightIcon} className="w-full h-full object-contain select-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PanelOfJudges;