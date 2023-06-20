import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function AreaOfFocus() {
    const { t } = useTranslation(["area-of-focus"]);

    return (
        <section className="relative bg-black-100">
            {/*   
                Use the page content here, you only need to copy {t("<the content>")}:

                Digital Marketing:
                    Major: {t("digitalMarketing.major")}
                    Sub-Theme: {t("digitalMarketing.subTheme")}
                    Description: {t("digitalMarketing.description")}
                
                Tourism & Hospitality:
                    Major: {t("tourismHospitality.major")}
                    Sub-Theme: {t("tourismHospitality.subTheme")}
                    Description: {t("tourismHospitality.description")}
                
                FinTech:
                    Major: {t("economicsBlockchainFinance.major")}
                    Sub-Theme: {t("economicsBlockchainFinance.subTheme")}
                    Description: {t("economicsBlockchainFinance.description")}
                
                Business & Technology:
                    Major: {t("businessTechnology.major")}
                    Sub-Theme: {t("businessTechnology.subTheme")}
                    Description: {t("businessTechnology.description")}
                
                Management & Change:
                    Major: {t("managementChange.major")}
                    Sub-Theme: {t("managementChange.subTheme")}
                    Description: {t("managementChange.description")}
            */}

        </section>
    )
}

export default AreaOfFocus;
