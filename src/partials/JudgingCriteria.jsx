import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import jcNetwork from "../images/jc-network.svg";

function JudgingCriteria() {
    const { t } = useTranslation(["judging-criteria"]);

    const textStyle = 'absolute font-bold text-xs sm:text-lg md:text-xl lg:text-2xl whitespace-pre-line'

    return (
        <section className="relative bg-black-100">
            {/*
                Use the page content here, you only need to copy {t("<the content>")}:
                
                - Problem-solving approach: {t("problemSolvingApproach")}
                - Innovation: {t("innovation")}
                - Originality: {t("originality")}
                - Feasibility and Viability: {t("feasibilityViability")}
                - Market potential: {t("marketPotential")}
                - Social and Environmental Impact: {t("socialEnvironmentalImpact")}
                - Teamwork: {t("teamwork")}
                - Overall Presentation: {t("overallPresentation")}
            */}

            {/* Container div */}
            <div className="w-full p-10 pb-24">

                {/* Use for maintaining the text's position */}
                <div className='relative w-[70%] left-[6%]'>
                    {/* Judging criteria network image */}
                    <img className='w-full' src={jcNetwork} alt="Judging criteria network image" />

                    {/* Header (This havent had translation yet) */}
                    <h1 className='absolute uppercase left-[4%] top-[32%] md:top-[35%] font-bold text-green-100 whitespace-pre-line leading-[110%] w-56 text-2xl sm:text-4xl md:text-5xl lg:text-[64px]' >Judging Criteria</h1>

                    {/* Contents */}
                    <p className={`${textStyle} left-[38%] -top-[3%]`}>{t("problemSolvingApproach")}</p>
                    <p className={`${textStyle} left-[80%] top-[11%]`}>{t("innovation")}</p>
                    <p className={`${textStyle} left-[100%] top-[38%]`}>{t("originality")}</p>
                    <p className={`${textStyle} left-[97%] top-[68%]`}>{t("feasibilityViability")}</p>
                    <p className={`${textStyle} left-[40%] top-[100%]`}>{t("marketPotential")}</p>
                    <p className={`${textStyle} left-[76%] top-[89%]`}>{t("socialEnvironmentalImpact")}</p>
                    <p className={`${textStyle} left-[0%] top-[9%]`}>{t("teamwork")}</p>
                    <p className={`${textStyle} left-[39%] top-[68%]`}>{t("overallPresentation")}</p>
                </div>
            </div>
        </section>
    )
}

export default JudgingCriteria;
