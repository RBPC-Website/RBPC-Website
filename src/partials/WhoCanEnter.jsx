import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import transitionImg from '../images/layered-waves-haikei-2.svg'

function WhoCanEnter() {
    const { t } = useTranslation(["who-can-enter"]);

    return (
        <section className="relative bg-black-100 lg:px-20 md:px-20 px-7 my-20">
            {/*   
                Use the page content here, you only need to copy {t("<the content>")}:

                Who can enter: {t("whoCanEnter")}
                Description: {t("description")}
            */}
            <div className='relative w-full bg-white pt-12 2xl:pb-[300px] xl:pb-[190px] lg:pb-[180px] md:pb-[130px] pb-[40px] xl:px-[200px] md:px-[60px] px-[40px] rounded-t-[24px]'>
                <h1 className='text-black-100 text-3xl font-extrabold sm:text-4xl lg:text-[70px] md:text-[60px] text-[32px] font-bold text-center'>{t("whoCanEnter")}?</h1>
                <p className='text-gray-200 lg:text-[24px] md:text-[24px] text-[12px] text-center mt-7'>{t("description")}</p>
                <div className='w-full absolute bottom-n10 left-0'>
                    <img className='w-full object-cover' src={transitionImg} alt='layered wave transition'></img>
                </div>
            </div>
        </section>
    )
}

export default WhoCanEnter;
