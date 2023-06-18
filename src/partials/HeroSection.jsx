import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function HeroSection() {
    const { t } = useTranslation(["hero"]);

    return (
        <section className="relative bg-black-100">
            
            {/*   
                Use the page content here, you only need to copy {t("<the content>"")}:
                Title: {t("title")}
                Subtitle: {t("subtitle")}
                Description: {t("description")}
                Be Next Theme Title: {t("beNext")}
                Be Next Theme Description: {t("themeDescription")}
                Competition's Origin: {t("origin")}
            */}
        </section>
    )
}