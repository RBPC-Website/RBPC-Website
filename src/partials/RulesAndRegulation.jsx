import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function RulesAndRegulation() {
    const { t } = useTranslation(["rules-regulation"]);

    return (
        <section className="relative bg-black-100">
            {/*
                Use the page content here, you only need to copy {t("<the content>")}:

                {t("openToAll")}
                {t("teamMembersFromDifferentSchools")}
                {t("submissionDeadline")}
                {t("submittedEntriesProperty")}
                {t("photographsAndVideos")}
                {t("decisionsOfJudges")}
                {t("subjectToChange")}
            */}
        </section>
    )
}

export default RulesAndRegulation;
