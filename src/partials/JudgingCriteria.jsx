import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import jcNetwork from "../images/jc-network.svg";
import Card from '../utils/Card';

function JudgingCriteria() {
    const { t } = useTranslation(["judging-criteria"]);

    const textStyle = 'absolute font-medium text-xs sm:text-lg md:text-xl lg:text-2xl whitespace-pre-line w-2/5';

    const strokeWidth = 1;

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

                {/* For devices with width >= 768px */}
                {/* Use for maintaining the text's position */}
                <div className='relative hidden md:block w-[70%] left-[6%]'>
                    {/* Judging criteria network image */}
                    <img className='w-full' src={jcNetwork} alt="Judging criteria network image" />

                    {/* Header (This havent had translation yet) */}
                    <h1 className='absolute uppercase left-[4%] top-[33%] lg:top-[36%] font-bold text-green-100 whitespace-pre-line leading-[110%] w-56 md:text-5xl lg:text-[64px]'>{t("judgingCriteria")}</h1>

                    {/* Contents */}
                    <p className={`${textStyle} left-[38%] -top-[3%]`} data-aos="fade-up" data-aos-offset="400" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">{t("problemSolvingApproach")}</p>
                    <p className={`${textStyle} left-[80%] top-[11%]`} data-aos="fade-up" data-aos-offset="400" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">{t("innovation")}</p>
                    <p className={`${textStyle} left-[100%] top-[38%]`} data-aos="fade-up" data-aos-offset="400" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">{t("originality")}</p>
                    <p className={`${textStyle} left-[98%] top-[66%]`} data-aos="fade-up" data-aos-offset="400" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">{t("feasibilityViability")}</p>
                    <p className={`${textStyle} left-[40%] top-[100%]`} data-aos="fade-up" data-aos-offset="400" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">{t("marketPotential")}</p>
                    <p className={`${textStyle} left-[76%] top-[89%]`} data-aos="fade-up" data-aos-offset="400" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">{t("socialEnvironmentalImpact")}</p>
                    <p className={`${textStyle} left-[0%] top-[9%]`} data-aos="fade-up" data-aos-offset="400" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">{t("teamwork")}</p>
                    <p className={`${textStyle} left-[39%] top-[68%]`} data-aos="fade-up" data-aos-offset="400" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">{t("overallPresentation")}</p>
                </div>

                {/* For devices with width <= 768px */}
                <div className='md:hidden'>
                    {/* Header */}
                    <h1 className='capitalize text-center font-bold text-green-100 whitespace-pre-line leading-[120%] text-[48px]'>Judging Criteria</h1>

                    {/* Contents */}
                    <div className='flex justify-center mt-8 gap-6 p-6 flex-wrap '>
                        <Card bg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
                        </svg>
                        }>{t("problemSolvingApproach")}</Card>
                        <Card bg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                        </svg>
                        }>{t("innovation")}</Card>
                        <Card bg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                        </svg>
                        } >{t("originality")}</Card>
                        <Card bg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        }>{t("feasibilityViability")}</Card>
                        <Card bg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                        </svg>
                        }>{t("marketPotential")}</Card>
                        <Card bg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                        </svg>
                        } >{t("socialEnvironmentalImpact")}</Card>
                        <Card bg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>
                        }>{t("teamwork")}</Card>
                        <Card bg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                        </svg>
                        }>{t("overallPresentation")}</Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JudgingCriteria;
