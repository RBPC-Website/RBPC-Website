import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import judge1 from "../images/Judges/judge1.png";
import judge2 from "../images/Judges/judge2.png";
import judge3 from "../images/Judges/judge3.png";
import judge4 from "../images/Judges/judge4.png";
import style from "../css/additional-styles/judges.css";

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function PanelOfJudges() {
  const { t } = useTranslation(["panel-of-judges"]);

  return (
    <section className="relative bg-black-100 px-[4%] sm:px-[7.5%]">
      {}
      <div className="flex h-full w-full flex-col items-center justify-between gap-[9px]">
        <h2 className="h-[150px] w-[1450px] text-[68px] font-extrabold text-[#00FFA8]">
          Panel of Judges 
        </h2>
      </div>
      <div className="w-full h-full relative my-10">
        <Swiper
          modules={[Navigation, Pagination]}
          loop={true}
          autoplay={true}
          navigation={{ clickable: true }}
          pagination={{ clickable: true }}
          spaceBetween={84}
          slidesPerView={4}
          style={{"--swiper-navigation-color": "#FFF", "--swiper-pagination-color": "#FFF"}}
          
        >
          <SwiperSlide>
            <div className="keen-slider__slide number-slide1 rounded-[30px] overflow-hidden">
              <img
                alt="..."
                src= {judge1}
              />
              <div className="h-full w-full absolute left-0 flex flex-col rounded-[30px] overflow-hidden justify-end bottom-0 top-0 right-0 bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.76)] px-[35px] pb-2.5 pt-7">
                <div className="h-[137px] w-[225px] leading-none">
                  <p className="inline text-2xl font-bold text-white">
                    Professor Robert McClelland
                    <br />
                  </p>
                  <p className="inline text-base font-normal text-[#DEDEDE]">
                    Dean, School of Business and Management
                    <br />
                  </p>
                  <p className="inline text-base font-normal text-[#DEDEDE]">
                    RMIT Vietnam
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="keen-slider__slide number-slide1 rounded-[30px] overflow-hidden">
              <img
                alt="..."
                src={judge2}
              />
              <div className="h-full w-full absolute left-0 flex flex-col rounded-[30px] overflow-hidden justify-end bottom-0 top-0 right-0 bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.76)] px-[35px] pb-2.5 pt-7">
                <div className="h-[137px] w-[225px] leading-none">
                  <p className="inline text-2xl font-bold text-white">
                    Professor Robert McClelland
                    <br />
                  </p>
                  <p className="inline text-base font-normal text-[#DEDEDE]">
                    Dean, School of Business and Management
                    <br />
                  </p>
                  <p className="inline text-base font-normal text-[#DEDEDE]">
                    RMIT Vietnam
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="keen-slider__slide number-slide1 rounded-[30px] overflow-hidden">
              <img
                alt="..."
                src={judge3}
              />
              <div className="h-full w-full absolute left-0 flex flex-col rounded-[30px] overflow-hidden justify-end bottom-0 top-0 right-0 bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.76)] px-[35px] pb-2.5 pt-7">
                <div className="h-[137px] w-[225px] leading-none">
                  <p className="inline text-2xl font-bold text-white">
                    Professor Robert McClelland
                    <br />
                  </p>
                  <p className="inline text-base font-normal text-[#DEDEDE]">
                    Dean, School of Business and Management
                    <br />
                  </p>
                  <p className="inline text-base font-normal text-[#DEDEDE]">
                    RMIT Vietnam
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="keen-slider__slide number-slide1 rounded-[30px] overflow-hidden">
              <img
                alt="..."
                src={judge4}
              />
              <div className="h-full w-full absolute left-0 flex flex-col rounded-[30px] overflow-hidden justify-end bottom-0 top-0 right-0 bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.76)] px-[35px] pb-2.5 pt-7">
                <div className="h-[137px] w-[225px] leading-none">
                  <p className="inline text-2xl font-bold text-white">
                    Professor Robert McClelland
                    <br />
                  </p>
                  <p className="inline text-base font-normal text-[#DEDEDE]">
                    Dean, School of Business and Management
                    <br />
                  </p>
                  <p className="inline text-base font-normal text-[#DEDEDE]">
                    RMIT Vietnam
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="keen-slider__slide number-slide1 rounded-[30px] overflow-hidden">
              <img
                alt="..."
                src={judge1}
              />
              <div className="h-full w-full absolute left-0 flex flex-col rounded-[30px] overflow-hidden justify-end bottom-0 top-0 right-0 bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.76)] px-[35px] pb-2.5 pt-7">
                <div className="h-[137px] w-[225px] leading-none">
                  <p className="inline text-2xl font-bold text-white">
                    Professor Robert McClelland
                    <br />
                  </p>
                  <p className="inline text-base font-normal text-[#DEDEDE]">
                    Dean, School of Business and Management
                    <br />
                  </p>
                  <p className="inline text-base font-normal text-[#DEDEDE]">
                    RMIT Vietnam
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default PanelOfJudges;
