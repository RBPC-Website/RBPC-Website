// import React from 'react'

export default function PoJCard({ cardImage, name, description, school }) {
    return (
        <div className="keen-slider__slide number-slide1 rounded-[30px] overflow-hidden">
            <img className="w-full object-cover" alt={`Image of ${name}`} src={cardImage} />
            <div className="h-full w-full absolute left-0 flex flex-col rounded-[30px] overflow-hidden justify-end bottom-0 top-0 right-0 bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.76)] px-[35px] py-8">
                <div className="leading-none">
                    <p className=" text-[18px] xl:text-2xl font-bold text-white">
                        {name}
                    </p>
                    <p className=" text-sm xl:text-base font-normal mt-1 text-[#DEDEDE]">
                        {description}
                    </p>
                    <p className=" text-sm xl:text-base font-normal mt-2 text-[#DEDEDE]">
                        {school}
                    </p>
                </div>
            </div>
        </div>
    )
}
