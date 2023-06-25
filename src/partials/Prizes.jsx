import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import prize from '../images/prize1.svg';
import prize2 from '../images/prize2.svg';
import prize3 from '../images/prize3.svg';

function oddPrize(src, type, value, quantity) {
    return (
        <div className='w-full h-[24%]'> 
            <div className="h-full aspect-[19/6] float-left relative flex justify-start items-center mb-1">
                <div className='absolute inset-0'>
                    <img className='h-full w-full -z-10' src={src} alt="" />
                </div>
                <div className="prize flex flex-col pl-7 -mt-2">
                    <h4 className='h4 text-green-100'>{value} {quantity} <span className='p text-gray-100'>VND</span></h4>
                    <h5 className='h5'>{type}</h5>
                </div>
            </div>
        </div>
    )
}

function evenPrize(src, type, value, quantity) {
    return (
        <div className='w-full h-[24%]'>
            <div className="h-full aspect-[19/6] float-right relative flex justify-end items-center mb-1">
                <div className='absolute inset-0'>
                    <img className='h-full w-full -z-10' src={src} alt="" />
                </div>
                <div className="prize flex flex-col pr-7 text-right mt-2">
                    <h4 className='h4 text-green-100'>{value} {quantity} <span className='p text-gray-100'>VND</span></h4>
                    <h5 className='h5'>{type}</h5>
                </div>
            </div>
        </div>
    )
}

function Prizes() {
    const { t } = useTranslation(["prizes"]);

    return (
        <section className="relative bg-black-100 px-[4%] sm:px-[7.5%]">
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
            <h1 className='h2 text-green-100 mb-3'>PRIZE</h1>
            <div className='flex flex-col sm:flex-row items-center  justify-between gap-y-8'>
                <div className="h-[280px] sm:h-[340px] aspect-[8/10] lg:h-[450px] relative flex justify-center items-center">
                    <div className='absolute inset-0 h-full'>
                        <img className=' aspect-[8/10] h-full -z-10' src={prize} alt="" />
                    </div>
                    <div className="prize flex flex-col">
                        <h3 className='h3 text-green-100'>45 {t('quantity')}</h3>
                        <span className='h4 text-gray-100'>VND</span>
                        <h3 className='h3 mt-2'>{t("firstPrize")}</h3>
                        <p className='p text-gray-200'>{t('teamMembers')}</p>
                    </div>
                </div>
                <div className="w-full sm:w-[50%] h-[340px] lg:h-[450px] flex flex-col justify-between">
                    {oddPrize(prize2, t("secondPrize"), 30, t('quantity'))}
                    {evenPrize(prize3, t("thirdPrize"), 20, t('quantity'))}
                    {oddPrize(prize2, t("encouragementPrizes"), 11, t('quantity'))}
                    {evenPrize(prize3, t("peoplesChoicePrize"), 4, t('quantity'))}
                </div>
            </div>
        </section>
    )
}

export default Prizes;
