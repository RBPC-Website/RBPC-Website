import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function Prizes() {
    const { t } = useTranslation(["prizes"]);

    return (
        <section className="relative bg-black-100">
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

        </section>
    )
}

export default Prizes;
