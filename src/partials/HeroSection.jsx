import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const TypewriterTitle = () => {
    const { t } = useTranslation(["hero"])
    const titleRef = useRef(null);
    const titleText = t("title");

    useEffect(() => {
        const titleElement = titleRef.current;
        let currentCharIndex = 0;
        let interval = null;

        const startTypewriterEffect = () => {
            interval = setInterval(() => {
                const displayedText = titleText.substring(0, currentCharIndex);

                titleElement.innerText = displayedText;
                currentCharIndex++;

                if (currentCharIndex > titleText.length) {
                    clearInterval(interval);
                }
            }, 70); // Typing speed: 70 milliseconds per character
        };

        startTypewriterEffect();

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <h1
            ref={titleRef}
            className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-green-100 lg:text-6xl"
        ></h1>
    );
};


const HackedTitle = () => {
    const { t } = useTranslation(["hero"]);
    useEffect(() => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let interval = null;

        const onMouseOverHandler = (event) => {
            let iteration = 0;

            clearInterval(interval);

            interval = setInterval(() => {
                event.target.innerText = event.target.innerText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return event.target.dataset.value[index];
                        }

                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("");

                if (iteration >= event.target.dataset.value.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }, 15);
        };

        const titleElement = document.getElementById("title");
        if (titleElement) {
            titleElement.addEventListener("mouseover", onMouseOverHandler);

            return () => {
                titleElement.removeEventListener("mouseover", onMouseOverHandler);
                clearInterval(interval);
            };
        }
    }, []);

    return (
        <h1 data-value={t("title")} id="title" className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-green-100 md:text-5xl lg:text-5xl hover:bg-green-600 hover:text-white rounded">
            {t("title")}
        </h1>
    );
};

function HeroSection() {
    const { t } = useTranslation(["hero"]);

    {/* Split the theme Description to make the theme bold */}
    let themeDescriptionArr = t("themeDescription").split("<b>") 

    return (
        <section className="relative bg-black-100 flex flex-col justify-center items-center">

            {/*   
                Use the page content here, you only need to copy {t("<the content>")}:
                Title: {t("title")}
                Subtitle: {t("subtitle")}
                Description: {t("description")}
                Be Next Theme Title: {t("beNext")}
                Be Next Theme Description: {t("themeDescription")}
                Competition's Origin: {t("origin")}
            */}
            <div className='bg-hero bg-cover bg-center h-screen flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center text-center w-2/3'>
                    <TypewriterTitle />
                    <p className="mb-6 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48">{t("description")}</p>
                </div>
            </div>
            <div className='flex justify-center items-center flex-col w-3/4 text-center'>
                <h1 className='mt-24 mb-20 text-4xl font-extrabold leading-none tracking-tight text-green-100 lg:text-6xl'>{t("beNext")}</h1>
                <p className="mb-6 text-lg font-normal text-white lg:text-xl">
                    {themeDescriptionArr.map((part, index) => {
                        if (index == 1) {
                            // Apply bold styling to the theme
                            return <b>{part}</b>;
                        } else {
                            return part;
                        }
                    })}
                </p>
                <p className="mb-6 text-lg font-normal text-white lg:text-xl">{t("origin")}</p>
            </div>
        </section>
    )
}

export default HeroSection;
