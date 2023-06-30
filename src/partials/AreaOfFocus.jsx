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

    useEffect(() => {
        const accordionContent = document.querySelectorAll(".accordion-content");

        accordionContent.forEach((item, index) => {
            let header = item.querySelector("header");
            header.addEventListener("click", () =>{
                item.classList.toggle("open");

                let description = item.querySelector(".description");
                if(item.classList.contains("open")){
                    description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
                    item.querySelector("i").classList.replace("fa-plus", "fa-minus");
                }else{
                    description.style.height = "0px";
                    item.querySelector("i").classList.replace("fa-minus", "fa-plus");
                }
                removeOpen(index); //calling the funtion and also passing the index number of the clicked header
            })
        })

        function removeOpen(index1){
            accordionContent.forEach((item2, index2) => {
                if(index1 != index2){
                    item2.classList.remove("open");

                    let des = item2.querySelector(".description");
                    des.style.height = "0px";
                    item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
                }
            })
        }
    })

    return (
        <section id="areaOfFocus" className='relative bg-black-100 mb-20'  data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom">
            <div className='content md:block hidden'>
                <div className="w-11/12">
                    <h1 className=' mt-24 mb-10 text-4xl font-extrabold leading-none tracking-tight text-green-100 lg:text-6xl'>{t("areaOfFocus")}</h1>
                </div>
                <div className='flex justify-between mb-12 flex-wrap'>
                    {
                        Object.keys(areas).map((a, index) => {
                            return (
                                <div key={a} onClick={() => setArea(a)} className={`relative z-10 area w-[19.3%] aspect-[84/105] pb-2 border rounded-2xl lg:rounded-3xl hover:border-green-100 duration-300 ${a==area ? active : inactive}`}>
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
            <div className="content accordion md:hidden block mb-10">
                <h1 className=' mt-24 text-4xl font-extrabold leading-none tracking-tight text-green-100 lg:text-6xl'>{t("areaOfFocus")}</h1>
            </div>
            <div className="accordion md:hidden block relative z-10">
                <div className="accordion-content">
                    <header className='px-[15px] pb-[15px]'>
                        <span className="title h3 ">{t("tourismHospitality.major")}</span>
                        <i className="fa-solid fa-plus"></i>
                    </header>

                    <div className="description">
                        <h4 className='h4'>{t("tourismHospitality.subTheme")}</h4>
                        <p className='p mt-[10px]'>{t("tourismHospitality.description")}</p>
                    </div>
                </div>
                <div className="accordion-content">
                    <header className='px-[15px] pb-[15px]'>
                        <span className="title h3">{t("digitalMarketing.major")}</span>
                        <i className="fa-solid fa-plus"></i>
                    </header>

                    <div className="description">
                        <h4 className='h4'>{t("digitalMarketing.subTheme")}</h4>
                        <p className='p mt-[10px]'>{t("digitalMarketing.description")}</p>
                    </div>
                </div>
                <div className="accordion-content">
                    <header className='px-[15px] pb-[15px]'>
                        <span className="title h3">{t("businessTechnology.major")}</span>
                        <i className="fa-solid fa-plus"></i>
                    </header>

                    <div className="description">
                        <h4 className='h4'>{t("businessTechnology.subTheme")}</h4>
                        <p className='p mt-[10px]'>{t("businessTechnology.description")}</p>
                    </div>
                </div>
                <div className="accordion-content">
                    <header className='px-[15px] pb-[15px]'>
                        <span className="title h3">{t("managementChange.major")}</span>
                        <i className="fa-solid fa-plus"></i>
                    </header>

                    <div className="description">
                        <h4 className='h4'>{t("managementChange.subTheme")}</h4>
                        <p className='p mt-[10px]'>{t("managementChange.description")}</p>
                    </div>
                </div>
                <div className="accordion-content">
                    <header className='px-[15px] pb-[15px]'>
                        <span className="title h3 max-w-[90%]">{t("economicsBlockchainFinance.major")}</span>
                        <i className="fa-solid fa-plus"></i>
                    </header>

                    <div className="description">
                        <h4 className='h4'>{t("economicsBlockchainFinance.subTheme")}</h4>
                        <p className='p mt-[10px]'>{t("economicsBlockchainFinance.description")}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}