import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import Badge from '../utils/Badge';
import transitionImg from '../images/layered-waves-haikei.svg';

function RulesAndRegulation() {
    const { t } = useTranslation(["rules-regulation"]);

    return (
        <section id="rules" className="relative bg-black-100 -mt-10 sm:-mt-14 lg:-mt-20"  data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom">
            {/*
                Use the page content here, you only need to copy {t("<the content>")}:
                {t("rulesAndRegulations")}
                {t("openToAll")}
                {t("teamMembersFromDifferentSchools")}
                {t("submissionDeadline")}
                {t("submittedEntriesProperty")}
                {t("photographsAndVideos")}
                {t("decisionsOfJudges")}
                {t("subjectToChange")}
            */}
            {/* Wave transition */}
            <div className='w-full'>
                <img className='w-full object-cover z-0 translate-y-2' src={transitionImg} alt="layered wave transition" />
            </div>
            {/* Rules and regulation */}
            <div className='bg-gray-100'>
                <div className='flex justify-center flex-col gap-10 content pb-10'>
                    <h1 className='h1 text-black-100 text-center'>{t("rulesAndRegulations")}</h1>
                    <Badge index={1}>{t("openToAll")}</Badge>
                    <Badge index={2}>{t("teamMembersFromDifferentSchools")}</Badge>
                    <Badge index={3}>{t("submissionDeadline")}</Badge>
                    <Badge index={4}>{t("submittedEntriesProperty")}</Badge>
                    <Badge index={5}>{t("photographsAndVideos")}</Badge>
                    <Badge index={6}>{t("decisionsOfJudges")}</Badge>
                    <Badge index={7}>{t("subjectToChange")}</Badge>
                </div>
            </div>
        </section>
    )
}

export default RulesAndRegulation;
