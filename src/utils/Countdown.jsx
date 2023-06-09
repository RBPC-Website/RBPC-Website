import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function getTimeLeft(currentTime) {
    // const { t } = translation;
    let deadline = {
        first : {date: "2023-08-01T00:00:00", value: "OpeningRegistration"},
        second : {date: "2023-09-17T00:00:00", value: "DeadlineRegistration"},
        three : {date: "2023-08-26T00:00:00", value: "Workshop"},
        four : {date: "2023-10-01T00:00:00", value: "PreliminaryRound"},
        five : {date: "2023-10-01T00:00:00", value: "VideoSubmission"},
        six : {date: "2023-10-11T00:00:00", value: "DeadlineVideoSubmission"},
        seven : {date: "2023-10-18T00:00:00", value: "Finalist"},
        eight : {date: "2023-10-19T00:00:00", value: "Mentoring"},
        nine : {date: "2023-10-22T00:00:00", value: "FinalWorkshop"},
        ten : {date: "2023-11-01T00:00:00", value: "FinalRound"},
    }
    let nearestTimeline = null;
    let event = null;

    Object.values(deadline).forEach(value => {
        if (Date.parse(new Date(value.date)) > currentTime && !nearestTimeline) {
            nearestTimeline = new Date(Date.parse(new Date(value.date)));
            event = value.value;
        }
    });

    if (!nearestTimeline && !event) {
        return {time: '00:00:00', event: 'The event has ended. See you next year!!!'};
    }
    
    return {time: (new Date(nearestTimeline - currentTime)), event: event};
}

export default function Countdown() {
    const { t } = useTranslation(["deadline"]);
    const [timeLeft, setTimeLeft] = useState(getTimeLeft(Date.now()).time);
    const [showBanner, setShowBanner] = useState(true);
    const timeFormat = (timeLeft.getMonth() > 0 ? (timeLeft.getMonth() + " " + (timeLeft.getMonth() > 1 ? t('months') : t('month'))) : '') + " " + (timeLeft.getDay() > 0 ? (timeLeft.getDay() + " " + (timeLeft.getDay() > 1 ? t('days') : t('day'))) : '') + " " + timeLeft.toLocaleTimeString('it-IT')
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeLeft(Date.now()).time);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        document.querySelector('header').style.top = showBanner ? document.querySelector('#sticky-banner').offsetHeight - 1 + 'px' : '0px';
    }, [showBanner]);

    return (
        <>
        {showBanner && (
            <div id="sticky-banner" tabIndex="-1" className="fixed top-0 left-0 z-50 flex justify-between w-full py-[0.5px]  border-b border-gray-200 bg-green-100 text-black-200">
                <div className="flex justify-between content">
                    <div className="flex items-center mx-auto">
                        <div className="flex items-center text-[11px] sm:text-[14px] text-black-200">
                            <span className="inline-flex mr-2">
                                <svg className="w-4 h-4 text-black-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                                </svg>
                            </span>
                            <p className="text-center"><span className="font-medium">{t(getTimeLeft(Date.now()).event)}</span> <span className="font-medium">{t("willStartIn")}</span> <span className="font-medium">{timeFormat}</span></p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button data-dismiss-target="#sticky-banner" type="button" onClick={() => {setShowBanner(false)}} className="flex-shrink-0 inline-flex justify-center items-center text-black-200 hover:bg-gray-100 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg aria-hidden="true" className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            CLOSE
                        </button>
                    </div>
                </div>
            </div>
        )}
        </>
    );
};