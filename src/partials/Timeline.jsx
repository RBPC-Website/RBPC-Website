import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import timelineButton from '../images/timeline-button.png'

function Timeline() {
    const { t } = useTranslation(["timeline"]);

    return (
        <section className="relative bg-black-100 lg:px-20 md:px-20 px-7 pb-20">
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
            <div className='phase-1 relative px-16 py-12'>
                {/* Phase Title */}
                <h3 className='text-transparent bg-clip-text bg-gradient-to-t from-green-100 to-green-200 h3 pb-4 align-middle'>
                    {t("preliminaryWorkshop")}
                </h3>
                {/* Phase button */}
                <div className='absolute bg-black-100 top-11 left-0 flex content-center transform translate-x-[-50%] h-[60px] w-[40px]'>
                    <img className='w-full object-contain' src={timelineButton} alt='timeline point'></img>
                </div>
                {/* Phase Contents */}
                <h4 className='h4 text-white-100 pb-4'>{t("preliminaryWorkshopDate")}</h4>
                <p className='p pb-4'>{t("registrationAndSubmission")}</p>
                <h4 className='h4 text-white-100 pb-4'>{t("workshopQA")}</h4>
                <p className='p pb-4'>{t("workshopQADescription")}</p>
                <h4 className='h4 text-white-100 pb-4'>{t("preliminaryResultAnnouncement")}</h4>
                <p className='p pb-4'>{t("preliminaryResultAnnouncementDetail")}</p>
            </div>
            {/* Phase 2 */}
            <div className='relative xl:-mt-[1.6px] md:-mt-[1.8px] -mt-[1.6px] phase-2 text-right px-16 py-12'>
                {/* Phase Title */}
                <h3 className='text-transparent bg-clip-text bg-gradient-to-t from-green-100 to-green-200 h3 pb-4'>
                    {t("preliminarySemiFinal")}
                </h3>
                {/* Phase button */}
                <div className='absolute bg-black-100 top-11 right-0 flex content-center transform translate-x-[50%] h-[60px] w-[40px]'>
                    <img className='w-full object-contain' src={timelineButton} alt='timeline point'></img>
                </div>
                {/* Phase Contents */}
                <h4 className='h4 text-white-100 pb-4'>{t("preliminarySemiFinalDate")}</h4>
                <p className='p pb-4'>{t("semiFinalSubmission")}</p>
                <h4 className='h4 text-white-100 pb-4'>{t("finalistAnnouncement")}</h4>
                <p className='p pb-4'>{t("finalistAnnouncementDescription")}</p>
            </div>
            {/* Phase 3 */}
            <div className='relative xl:-mt-[1.6px] md:-mt-[1.8px] -mt-[1.6px] phase-3 px-16 py-12'>
                {/* Phase Title */}
                <h3 className='text-transparent bg-clip-text bg-gradient-to-t from-green-100 to-green-200 h3 pb-4'>
                    {t("preliminaryWorkshop")}
                </h3>
                {/* Phase button */}
                <div className='absolute bg-black-100 top-11 left-0 flex content-center transform translate-x-[-50%] h-[60px] w-[40px]'>
                    <img className='w-full object-contain' src={timelineButton} alt='timeline point'></img>
                </div>
                {/* Phase Contents */}
                <h4 className='h4 text-white-100 pb-4'>{t("preliminaryWorkshopDate")}</h4>
                <p className='p pb-4'>{t("registrationAndSubmission")}</p>
                <h4 className='h4 text-white-100 pb-4'>{t("workshopQA")}</h4>
                <p className='p pb-4'>{t("workshopQADescription")}</p>
                <h4 className='h4 text-white-100 pb-4'>{t("preliminaryResultAnnouncement")}</h4>
                <p className='p pb-4'>{t("preliminaryResultAnnouncementDetail")}</p>
            </div>
            {/* Phase 4 */}
            <div className='relative xl:-mt-[1.6px] md:-mt-[1.8px] -mt-[1.6px] phase-4 text-right px-16 py-12'>
                {/* Phase Title */}
                <h3 className='text-transparent bg-clip-text bg-gradient-to-t from-green-100 to-green-200 h3 pb-4'>
                    {t("preliminaryWorkshop")}
                </h3>
                {/* Phase button */}
                <div className='absolute bg-black-100 top-11 right-0 flex content-center transform translate-x-[50%] h-[60px] w-[40px]'>
                    <img className='w-full object-contain' src={timelineButton} alt='timeline point'></img>
                </div>
                {/* Phase Contents */}
                <h4 className='h4 text-white-100 pb-4'>{t("preliminaryWorkshopDate")}</h4>
                <p className='p pb-4'>{t("registrationAndSubmission")}</p>
                <h4 className='h4 text-white-100 pb-4'>{t("workshopQA")}</h4>
                <p className='p pb-4'>{t("workshopQADescription")}</p>
                <h4 className='h4 text-white-100 pb-4'>{t("preliminaryResultAnnouncement")}</h4>
                <p className='p pb-4'>{t("preliminaryResultAnnouncementDetail")}</p>
            </div>
        </section>
    )
}

export default Timeline;
