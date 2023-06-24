import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import Tourism_HospitalitySVG from "../images/tourism_hospitality.svg";
import Digital_MarketingSVG from "../images/digital_marketing.svg";
import Business_TechnologygSVG from "../images/business_technology.svg";
import Management_ChangeSVG from "../images/management_change.svg";
import economicsBlockchainFinanceSVG from "../images/economics_blockchain.svg";

const AreaCard = ({ major }) => {
    const { t } = useTranslation(["area-of-focus"])
    let svgComponent

    switch (major) {
        case "tourismHospitality":
            svgComponent = <img src={Tourism_HospitalitySVG} alt={t(major + ".major")} />
            break
        case "digitalMarketing":
            svgComponent = <img src={Digital_MarketingSVG} alt={t(major + ".major")} />
            break
        case "businessTechnology":
            svgComponent = <img src={Business_TechnologygSVG} alt={t(major + ".major")} />
            break
        case "managementChange":
            svgComponent = <img src={Management_ChangeSVG} alt={t(major + ".major")} />
            break
        case "economicsBlockchainFinance":
            svgComponent = <img src={economicsBlockchainFinanceSVG} alt={t(major + ".major")} />
            break
    }
    return (
        <div className='bg-[#000000] text-center rounded-2xl border border-solid border-white w-48'>
            {svgComponent}
            <p className='text-white text-md my-3 mx-4'>{t(major + ".major")}</p>
        </div>
    )
}

function AreaOfFocus() {
    const { t } = useTranslation(["area-of-focus"]);

    return (
        <section className="relative bg-black-100 flex flex-col justify-start items-center">
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
            <div className="w-11/12">
                <h1 className='mt-24 mb-20 text-4xl font-extrabold leading-none tracking-tight text-green-100 lg:text-6xl'>Area Of Focus</h1>
            </div>
            <div className="w-11/12 flex flex-wrap justify-evenly gap-11">
                <AreaCard major="tourismHospitality" />
                <AreaCard major="digitalMarketing" />
                <AreaCard major="businessTechnology" />
                <AreaCard major="managementChange" />
                <AreaCard major="economicsBlockchainFinance" />
            </div>
            <div className="w-11/12">
                <h1 className='mt-24 mb-8 text-4xl font-extrabold leading-none tracking-tight text-white'>{t("tourismHospitality.subTheme")}</h1>
                <p className="text-xl text-white">{t("tourismHospitality.description")}</p>
            </div>
            <p className="mb-6 text-lg font-normal text-white lg:text-xl"></p>
        </section>
    )
}

export default AreaOfFocus;
