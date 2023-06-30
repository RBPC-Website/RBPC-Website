import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import timelineButton from '../images/timeline-button.png'

function Timeline() {
    const { t } = useTranslation(["timeline"]);

    return (
        <section id="timeline" className="relative bg-black-100 -mt-10 sm:-mt-14 lg:-mt-20">
            {/*
                Use the page content here, you only need to copy {t("<the content>")}:

                {t("preliminaryWorkshop")}

                {t("preliminaryWorkshopDate")}
                - {t("registrationAndSubmission")}

                {t("workshopQA")}
                - {t("workshopQADescription")}

                {t("preliminaryResultAnnouncement")}

                {t("preliminarySemiFinal")}
                {t("preliminarySemiFinalDate")}
                - {t("semiFinalSubmission")}

                {t("finalistAnnouncement")}
                - {t("finalistAnnouncementDescription")}

                {t("mentoringWorkshops")}
                {t("mentoringWorkshopsDate")}
                - {t("topFinalistsMeeting")}

                {t("workshopForFinalists")}
                - {t("workshopForFinalistsDescription")}

                {t("grandFinale")}
                {t("grandFinaleDate")}
                - {t("grandFinalistsPitch")}
            */}
            {/* Phase 1  */}
            <div className='content'>
                <div className='phase-1 relative md:px-16 pl-12 py-12'>
                    {/* Phase Title */}
                    <h3 className='text-transparent bg-clip-text bg-gradient-to-b from-green-100 to-green-200 h3 pb-3 align-middle' data-aos="fade-right" data-aos-offset="400" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                        {t("preliminaryWorkshop")}
                    </h3>
                    {/* Phase button */}
                    <div className='absolute bg-black-100 top-11 left-0 flex content-center transform translate-x-[-50%] h-[60px] w-[40px]'>
                        <img className='w-full object-contain' src={timelineButton} alt='timeline point'></img>
                    </div>
                    {/* Phase Contents */}
                    <h5 className='h5 text-white-100 pb-3' data-aos="fade-right" data-aos-offset="400" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">{t("preliminaryWorkshopDate")}</h5>
                    <p className='p pb-3' data-aos="fade-right" data-aos-offset="400" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">{t("registrationAndSubmission")}</p>
                    <h5 className='h5 text-white-100 pb-3' data-aos="fade-right" data-aos-offset="400" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">{t("workshopQA")}</h5>
                    <p className='p pb-3' data-aos="fade-right" data-aos-offset="400" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">{t("workshopQADescription")}</p>
                    <h5 className='h5 text-white-100 pb-3' data-aos="fade-right" data-aos-offset="400" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">{t("preliminaryResultAnnouncement")}</h5>
                    <p className='p pb-3' data-aos="fade-right" data-aos-offset="400" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">{t("preliminaryResultAnnouncementDetail")}</p>
                </div>
                {/* Phase 2 */}
                <div className='relative xl:-mt-[1.6px] md:-mt-[1.8px] -mt-[1.6px] phase-2 text-right md:px-16 pr-12 py-12'>
                    {/* Phase Title */}
                    <h3 className='text-transparent bg-clip-text bg-gradient-to-b from-green-100 to-green-200 h3 pb-3' data-aos="fade-left" data-aos-offset="400" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                        {t("preliminarySemiFinal")}
                    </h3>
                    {/* Phase button */}
                    <div className='absolute bg-black-100 top-11 right-0 flex content-center transform translate-x-[50%] h-[60px] w-[40px]'>
                        <img className='w-full object-contain' src={timelineButton} alt='timeline point'></img>
                    </div>
                    {/* Phase Contents */}
                    <h5 className='h5 text-white-100 pb-3' data-aos="fade-left" data-aos-offset="400" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">{t("preliminarySemiFinalDate")}</h5>
                    <p className='p pb-3' data-aos="fade-left" data-aos-offset="400" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">{t("semiFinalSubmission")}</p>
                    <h5 className='h5 text-white-100 pb-3' data-aos="fade-left" data-aos-offset="400" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">{t("finalistAnnouncement")}</h5>
                    <p className='p pb-3' data-aos="fade-left" data-aos-offset="400" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">{t("finalistAnnouncementDescription")}</p>
                </div>
                {/* Phase 3 */}
                <div className='relative xl:-mt-[1.6px] md:-mt-[1.8px] -mt-[1.6px] phase-3 md:px-16 pl-12 py-12'>
                    {/* Phase Title */}
                    <h3 className='text-transparent bg-clip-text bg-gradient-to-b from-green-100 to-green-200 h3 pb-3' data-aos="fade-right" data-aos-offset="400" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                        {t("mentoringWorkshops")}
                    </h3>
                    {/* Phase button */}
                    <div className='absolute bg-black-100 top-11 left-0 flex content-center transform translate-x-[-50%] h-[60px] w-[40px]'>
                        <img className='w-full object-contain' src={timelineButton} alt='timeline point'></img>
                    </div>
                    {/* Phase Contents */}
                    <h5 className='h5 text-white-100 pb-3' data-aos="fade-right" data-aos-offset="400" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">{t("mentoringWorkshopsDate")}</h5>
                    <p className='p pb-3' data-aos="fade-right" data-aos-offset="400" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">{t("topFinalistsMeeting")}</p>
                    <h5 className='h5 text-white-100 pb-3' data-aos="fade-right" data-aos-offset="400" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">{t("workshopForFinalists")}</h5>
                    <p className='p pb-3' data-aos="fade-right" data-aos-offset="400" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">{t("workshopForFinalistsDescription")}</p>
                </div>
                {/* Phase 4 */}
                <div className='relative xl:-mt-[1.6px] md:-mt-[1.8px] -mt-[1.6px] phase-4 text-right md:px-16 pr-12 py-12'>
                    {/* Phase Title */}
                    <h3 className='text-transparent bg-clip-text bg-gradient-to-b from-green-100 to-green-200 h3 pb-3' data-aos="fade-left" data-aos-offset="400" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                        {t("grandFinale")}
                    </h3>
                    {/* Phase button */}
                    <div className='absolute bg-black-100 top-11 right-0 flex content-center transform translate-x-[50%] h-[60px] w-[40px]'>
                        <img className='w-full object-contain' src={timelineButton} alt='timeline point'></img>
                    </div>
                    {/* Phase Contents */}
                    <h5 className='h5 text-white-100 pb-3' data-aos="fade-left" data-aos-offset="400" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">{t("grandFinaleDate")}</h5>
                    <p className='p pb-3' data-aos="fade-left" data-aos-offset="400" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">{t("grandFinalistsPitch")}</p>
                </div>
            </div>
        </section>
    )
}

export default Timeline;
