import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import binanceLogo from "../images/Sponsorship/binance.png";

function Sponsorship() {
  const { t } = useTranslation(["sponsorship"]);

  return (
    <section className="content relative mb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Media Sponsor */}
          <div className="max-w-3xl mx-auto text-center pb-10">
            <h2 className="h2 text-green-100">{t("mediaSponsor")}</h2>
          </div>
          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto mb-16 grid gap-2 grid-cols-4 md:grid-cols-5">
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img className="max-w-full"  width="124" height="24" viewBox="0 0 124 24" src={binanceLogo} alt='logo' ></img>
            </div>
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img className="max-w-full"  width="124" height="24" viewBox="0 0 124 24" src={binanceLogo} alt='logo' ></img>
            </div>
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img className="max-w-full"  width="124" height="24" viewBox="0 0 124 24" src={binanceLogo} alt='logo' ></img>
            </div>
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img className="max-w-full"  width="124" height="24" viewBox="0 0 124 24" src={binanceLogo} alt='logo' ></img>
            </div>
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img className="max-w-full"  width="124" height="24" viewBox="0 0 124 24" src={binanceLogo} alt='logo' ></img>
            </div>
          </div>
          {/* In-kind Sponsor */}
          <div className="max-w-3xl mx-auto text-center pb-10">
            <h2 className="h2 text-green-100">{t("inKindSponsor")}</h2>
          </div>
          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto mb-20 grid gap-2 grid-cols-4 md:grid-cols-5">
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img className="max-w-full"  width="124" height="24" viewBox="0 0 124 24" src={binanceLogo} alt='logo' ></img>
            </div>
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img className="max-w-full"  width="124" height="24" viewBox="0 0 124 24" src={binanceLogo} alt='logo' ></img>
            </div>
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img className="max-w-full"  width="124" height="24" viewBox="0 0 124 24" src={binanceLogo} alt='logo' ></img>
            </div>
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img className="max-w-full"  width="124" height="24" viewBox="0 0 124 24" src={binanceLogo} alt='logo' ></img>
            </div>
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img className="max-w-full"  width="124" height="24" viewBox="0 0 124 24" src={binanceLogo} alt='logo' ></img>
            </div>        
          </div>
          {/* Exclusive Sponsor */}
          <div className="max-w-3xl mx-auto text-center pb-10">
            <h2 className="h2 text-green-100">{t("exclusiveSponsor")}</h2>
          </div>
          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-5">
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img className="max-w-full"  width="124" height="24" viewBox="0 0 124 24" src={binanceLogo} alt='logo' ></img>
            </div>
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img className="max-w-full"  width="124" height="24" viewBox="0 0 124 24" src={binanceLogo} alt='logo' ></img>
            </div>
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img className="max-w-full"  width="124" height="24" viewBox="0 0 124 24" src={binanceLogo} alt='logo' ></img>
            </div>
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img className="max-w-full"  width="124" height="24" viewBox="0 0 124 24" src={binanceLogo} alt='logo' ></img>
            </div>
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img className="max-w-full"  width="124" height="24" viewBox="0 0 124 24" src={binanceLogo} alt='logo' ></img>
            </div>      
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sponsorship;
