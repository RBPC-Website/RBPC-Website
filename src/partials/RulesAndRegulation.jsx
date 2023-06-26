import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

// import { Button } from 'flowbite-react';
import Badge from '../utils/Badge';
import transitionImg from '../images/layered-waves-haikei.svg';

function RulesAndRegulation() {
    const { t } = useTranslation(["rules-regulation"]);

    return (
        <section className="relative bg-black-100">
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
                <img className='w-full object-cover' src={transitionImg} alt="layered wave transition" />
            </div>
            {/* Rules and regulation */}
            <div className='bg-gray-100'>
                <div className='py-12 flex justify-center flex-col gap-10 content'>
                    <h1 className='text-black-100 text-2xl sm:text-4xl md:text-[64px] font-bold text-center'>{t("rulesAndRegulations")}</h1>
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
