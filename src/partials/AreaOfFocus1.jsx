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

function getArea(area) {
    const {t} = useTranslation(["area-of-focus"]);
    return (
        <div>
            <h3 className='h3 mb-4 text-gray-100'>{t(area + ".subTheme")}</h3>
            <p className='text-gray-200 p'>{t(area + ".description")}</p>
        </div>
    )

}

export default function AreaOfFocus() {
    const {t} = useTranslation(["area-of-focus"]);
    const [area, setArea] = useState("tourismHospitality");
    const active = "border-green-100 bg-green-100 text-black-100";
    const inactive = "border-gray-200 text-gray-100";

    const areas = {
        "tourismHospitality": {active: Active_Tourism_HospitalitySVG, inactive: Tourism_HospitalitySVG},
        "digitalMarketing": {active: Active_Digital_MarketingSVG, inactive: Digital_MarketingSVG},
        "businessTechnology": {active: Active_Business_TechnologygSVG, inactive: Business_TechnologygSVG},
        "managementChange": {active: Active_Management_ChangeSVG, inactive: Management_ChangeSVG},
        "economicsBlockchainFinance": {active: Active_economicsBlockchainFinanceSVG, inactive: economicsBlockchainFinanceSVG}
    }

    useEffect(() => {

    }, [area])

    return (
        <section className='relative bg-black-100 mb-20'>
            <div className='content'>
                <div className='flex justify-between mb-12 flex-wrap'>
                    {
                        Object.keys(areas).map((a, index) => {
                            return (
                                <div key={a} onClick={() => setArea(a)} className={`area w-[19.3%] aspect-[84/110] pb-2 border rounded-2xl lg:rounded-3xl hover:border-green-100 duration-300 ${a==area ? active : inactive}`}>
                                    <img className='mx-auto w-[70%] aspect-square text-black-100' src={a==area ? areas[a].active : areas[a].inactive} alt={t(a + ".major")} />
                                    <div className='text-center px-2 font-medium'>
                                        <p className='text-xs lg:text-base font-semibold'>{t(a + ".major")}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {getArea(area)}
            </div>
        </section>
    )
}