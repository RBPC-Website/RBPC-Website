import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import transitionImg from '../images/layered-waves-haikei-2.svg'

function WhoCanEnter() {
    const { t } = useTranslation(["who-can-enter"]);

    return (
        <section className="relative bg-black-100 lg:px-20 md:px-20 px-7 mt-20">
            {/*   
                Use the page content here, you only need to copy {t("<the content>")}:

                Who can enter: {t("whoCanEnter")}
                Description: {t("description")}
            */}
            {/* Card Section */}
            <div className='relative w-full bg-white pt-12 xl:px-[200px] md:px-[60px] px-[40px] rounded-t-[24px]'>
                {/* Who Can Enter Title */}
                <h1 className='h1 text-black-100 font-extrabold text-center'>{t("whoCanEnter")}?</h1>
                {/* Description */}
                <p className='p text-center mt-7'>{t("description")}</p>
            </div>
            {/* Wave transition */}
            <div className='w-full bg-white -mt-1 border-2 border-l-green-100 border-t-0 border-r-0 border-b-0'>
                    <img className='w-full object-cover' src={transitionImg} alt='layered wave transition'></img>
                </div>
        </section>
    )
}

export default WhoCanEnter;
