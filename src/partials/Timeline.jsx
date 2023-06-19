import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function Timeline() {
    const { t } = useTranslation(["timeline"]);

    return (
        <section className="relative bg-black-100">
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
        </section>
    )
}

export default Timeline;
