import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import Tourism_HospitalitySVG from "../images/tourism_hospitality.svg";
import Active_Tourism_HospitalitySVG from "../images/active_tourism_hospitality.svg";
import Digital_MarketingSVG from "../images/digital_marketing.svg";
import Active_Digital_MarketingSVG from "../images/active_digital_marketing.svg";
import Business_TechnologygSVG from "../images/business_technology.svg";
import Active_Business_TechnologygSVG from "../images/active_business_technology.svg";
import Management_ChangeSVG from "../images/management_change.svg";
import Active_Management_ChangeSVG from "../images/active_management_change.svg";
import economicsBlockchainFinanceSVG from "../images/economics_blockchain.svg";
import Active_economicsBlockchainFinanceSVG from "../images/active_economics_blockchain.svg";

const AreaCard = ({ major, onClick, className, textStyle, isActive }) => {
    const { t } = useTranslation(["area-of-focus"])
    let svgComponent

    switch (major) {
        case "tourismHospitality":
            svgComponent = isActive ? (
                <img src={Active_Tourism_HospitalitySVG} alt={t(major + ".major")} />
            ) : (
                <img src={Tourism_HospitalitySVG} alt={t(major + ".major")} />
            ) 
            break
        case "digitalMarketing":
            svgComponent = isActive ? (
                <img src={Active_Digital_MarketingSVG} alt={t(major + ".major")} />
            ) : (
                <img src={Digital_MarketingSVG} alt={t(major + ".major")} />
            ) 
            break
        case "businessTechnology":
            svgComponent = isActive ? (
                <img src={Active_Business_TechnologygSVG} alt={t(major + ".major")} />
            ) : (
                <img src={Business_TechnologygSVG} alt={t(major + ".major")} />
            )
            break
        case "managementChange":
            svgComponent = isActive ? (
                <img src={Active_Management_ChangeSVG} alt={t(major + ".major")} />
            ) : (
                <img src={Management_ChangeSVG} alt={t(major + ".major")} />
            ) 
            break
        case "economicsBlockchainFinance":
            svgComponent = isActive ? (
                <img src={Active_economicsBlockchainFinanceSVG} alt={t(major + ".major")} />
            ) : (
                <img src={economicsBlockchainFinanceSVG} alt={t(major + ".major")} />
            ) 
            break
        default:
            svgComponent = null
            break
    }
    return (
        <div 
            className={`bg-[#000000] text-center rounded-2xl border border-solid border-white w-48 flex flex-col item-center cursor-pointer hover:scale-110 ${className}`}
            onClick={() => onClick(major)}
        >
            {svgComponent}
            <p className='text-md my-3 mx-4' style={textStyle}>{t(major + ".major")}</p>
        </div>
    )
}

const AreaOfFocusComponent = () => {
    const { t } = useTranslation(["area-of-focus"])
    const [activeCard, setActiveCard] = useState(null);

    const handleCardClick = (card) => {
        setActiveCard(card);
    };

    const renderAreaCard = (major) => {
        const isActive = activeCard === major;
        const cardStyle = isActive ? "bg-[#00FFA8]" : "";
        
        const textStyle = {
            color: isActive ? "black" : "white",
        };

        const activeSVG = {
            tourismHospitality: Active_Tourism_HospitalitySVG,
            digitalMarketing: Active_Digital_MarketingSVG,
            businessTechnology: Active_Business_TechnologygSVG,
            managementChange: Active_Management_ChangeSVG,
            economicsBlockchainFinance: Active_economicsBlockchainFinanceSVG,
        }

        return (
            <AreaCard
                key={major}
                major={major}
                onClick={handleCardClick}
                className={cardStyle}
                textStyle={textStyle}
                isActive={isActive}
            />


        );
    };

    const renderContent = () => {
        switch (activeCard) {
            case "tourismHospitality":
                return (
                    <div className="w-11/12 mb-10">
                        <h1 className='mt-10 text-4xl font-extrabold leading-none tracking-tight text-white'>{t("tourismHospitality.subTheme")}</h1>
                        <p className="my-10 text-xl text-white">{t("tourismHospitality.description")}</p>
                    </div>
                );
            case "digitalMarketing":
                return (
                    <div className="w-11/12 mb-10">
                        <h1 className='mt-10 text-4xl font-extrabold leading-none tracking-tight text-white'>{t("digitalMarketing.subTheme")}</h1>
                        <p className="my-10 text-xl text-white">{t("digitalMarketing.description")}</p>
                    </div>
                );
            case "businessTechnology":
                return (
                    <div className="w-11/12 mb-10">
                        <h1 className='mt-10 text-4xl font-extrabold leading-none tracking-tight text-white'>{t("businessTechnology.subTheme")}</h1>
                        <p className="my-10 text-xl text-white">{t("businessTechnology.description")}</p>
                    </div>
                );
            case "managementChange":
                return (
                    <div className="w-11/12 mb-10">
                        <h1 className='mt-10 text-4xl font-extrabold leading-none tracking-tight text-white'>{t("managementChange.subTheme")}</h1>
                        <p className="my-10 text-xl text-white">{t("managementChange.description")}</p>
                    </div>
                );
            case "economicsBlockchainFinance":
                return (
                    <div className="w-11/12 mb-10">
                        <h1 className='mt-10 text-4xl font-extrabold leading-none tracking-tight text-white'>{t("economicsBlockchainFinance.subTheme")}</h1>
                        <p className="my-10 text-xl text-white">{t("economicsBlockchainFinance.description")}</p>
                    </div>
                );
            default:
                return (
                    <div className="w-11/12 mb-10">
                        <h4 className='h4 mt-10 font-bold leading-none tracking-tight text-white'>Please select an area of focus</h4>
                    </div>
                );
        }
    };

    return (
        <div className='relative small:hidden z-10'>
            <div className='ml-10'>
                {renderContent()}
            </div>
            <div className="grid grid-cols-5 gap-4 medium:grid-cols-3 medium:gap-11 justify-items-center">
                {renderAreaCard("tourismHospitality")}
                {renderAreaCard("digitalMarketing")}
                {renderAreaCard("businessTechnology")}
                {renderAreaCard("managementChange")}
                {renderAreaCard("economicsBlockchainFinance")}
            </div>
        </div>
    )
}


function AreaOfFocus() {
    const { t } = useTranslation(["area-of-focus"]);

    return (
        <section className="relative bg-black-100 mb-20">
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
                <h1 className='ml-10 mt-24 mb-20 text-4xl font-extrabold leading-none tracking-tight text-green-100 lg:text-6xl'>{t("areaOfFocus")}</h1>
            </div>
            <AreaOfFocusComponent />
        </section>
    )
}

export default AreaOfFocus;
