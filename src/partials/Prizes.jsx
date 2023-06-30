import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import prize from '../images/prize1.svg';
import prize2 from '../images/prize2.svg';
import prize3 from '../images/prize3.svg';
import VanillaTilt from 'vanilla-tilt';

function oddPrize(src, type, value, quantity) {
    return (
        <div className='w-full h-[24%]' data-aos="flip-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom"> 
            <div className="h-full aspect-[19/6] float-left relative flex justify-start items-center mb-1">
                <div className='absolute inset-0'>
                    <img className='h-full w-full' src={src} alt="" />
                </div>
                <div className="flex flex-col pl-7 -mt-2 z-10">
                    <h4 className='h4 text-green-100'>{value} {quantity} <span className='p text-gray-100'>VND</span></h4>
                    <h5 className='h5'>{type}</h5>
                </div>
            </div>
        </div>
    )
}

function evenPrize(src, type, value, quantity) {
    return (
        <div className='w-full h-[24%]' data-aos="flip-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-anchor-placement="top">
            <div className="h-full aspect-[19/6] float-right relative flex justify-end items-center mb-1">
                <div className='absolute inset-0'>
                    <img className='h-full w-full' src={src} alt="" />
                </div>
                <div className="flex flex-col pr-7 text-right mt-2 z-10">
                    <h4 className='h4 text-green-100'>{value} {quantity} <span className='p text-gray-100'>VND</span></h4>
                    <h5 className='h5'>{type}</h5>
                </div>
            </div>
        </div>
    )
}

function Prizes() {
    const { t } = useTranslation(["prizes"]);
    useEffect(() => {
        VanillaTilt.init(document.querySelector(".prize"), {
            max: 20,
            speed: 300,
            scale: 1.07,
        });    
    });
	

    return (
        <section id="prizes" className="relative bg-black-100 mb-20"  data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom">
            {/*
                Use the page content here, you only need to copy {t("<the content>")}:

                {t("prizes")}:
                    01 {t("firstPrize")}:
                        {t("prizeValue", { "value": "45,000,000 VNĐ" })} {t("teamMembers")}
                    01 {t("secondPrize")}:
                        {t("prizeValue", { "value": "30,000,000 VNĐ" })} {t("teamMembers")}
                    01 {t("thirdPrize")}:
                        {t("prizeValue", { "value": "20,000,000 VNĐ" })} {t("teamMembers")}
                    02 {t("encouragementPrizes")}:
                        {t("prizeValue", { "value": "11,000,000 VNĐ" })} {t("teamMembers")}
                    01 {t("peoplesChoicePrize")}:
                        {t("prizeValue", { "value": "4,000,000 VNĐ" })} {t("teamMembers")}
            */}
            <div className='content'>
                <h1 className='h1 text-green-100 mb-10'>{t("prizes")}</h1>
                <div className='flex flex-col sm:flex-row items-center  justify-between gap-y-8 data-tilt'>
                    <div className="prize h-[280px] sm:h-[340px] aspect-[8/10] lg:h-[500px] relative flex justify-center items-center z-10">
                        <div className='absolute inset-0 h-full' data-aos="flip-right" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom">
                            <img className=' aspect-[8/10] h-full' src={prize} alt="" />
                        </div>
                        <div className="flex flex-col z-10" data-aos="flip-right" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom">
                            <h3 className='h2 test text-green-100 text-transparent bg-clip-text bg-gradient-to-b from-green-100 to-green-200'>45 {t('quantity')}</h3>
                            <span className='h4 text-gray-100'>VND</span>
                            <h3 className='h3 mt-2'>{t("firstPrize")}</h3>
                            <p className='p text-gray-200'>{t('teamMembers')}</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-[50%] sm:max-w-[530px] h-[340px] lg:h-[500px] flex flex-col justify-between">
                        {oddPrize(prize2, t("secondPrize"), 30, t('quantity'))}
                        {evenPrize(prize3, t("thirdPrize"), 20, t('quantity'))}
                        {oddPrize(prize2, t("encouragementPrizes"), 11, t('quantity'))}
                        {evenPrize(prize3, t("peoplesChoicePrize"), 4, t('quantity'))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Prizes;
