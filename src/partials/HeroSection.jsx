import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function HeroSection() {
    const { t } = useTranslation(["hero"]);

    {/* Split the theme Description to make the theme bold */}
    let themeDescriptionArr = t("themeDescription").split("<b>") 

    return (
        <section id="hero" className="relative bg-black-100 flex flex-col justify-center items-center">

            {/*   
                Use the page content here, you only need to copy {t("<the content>")}:
                Title: {t("title")}
                Subtitle: {t("subtitle")}
                Description: {t("description")}
                Be Next Theme Title: {t("beNext")}
                Be Next Theme Description: {t("themeDescription")}
                Competition's Origin: {t("origin")}
            */}
            <div className='bg-hero bg-cover bg-center h-screen flex justify-center items-center w-full text-center'>
                <div className='content'>
                    <h1
                        className=" h1 mb-10 text-green-100"
                        data-aos="fade-up" data-aos-offset="200" data-aos-delay="2300" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom"
                    >
                        {t("title")}
                    </h1>
                    <p className="p" data-aos="fade-up" data-aos-offset="200" data-aos-delay="2300" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom">{t("description")}</p>
                </div>
            </div>
            <div className='content flex justify-center items-center flex-col text-center mb-20'>
                <h1 className='text-green-100 h1 my-10'  data-aos="zoom-out" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                    {t("beNext")}
                </h1>
                <p className="mb-6 p text-gray-200 " data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom">
                    {themeDescriptionArr.map((item, index) => {
                        return (
                            <span key={index}>
                                {index==1 ? <span className='font-semibold'>{item}</span> : item}
                            </span>
                        )
                    })
                    }
                </p>
                <p className="mb-6 p text-gray-200 " data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom">{t("origin")}</p>
            </div>
        </section>
    )
}

export default HeroSection;
