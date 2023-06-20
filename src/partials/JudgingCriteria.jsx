import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function JudgingCriteria() {
    const { t } = useTranslation(["judging-criteria"]);

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

        </section>
    )
}

export default JudgingCriteria;
