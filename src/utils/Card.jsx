// import React from 'react'

export default function Card({ children, bg }) {
    return (
        // <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">hover:[&_div]:min-w-[150%]
        <div className="block relative overflow-hidden max-w-sm p-6 w-60 h-80 border border-gray-100 rounded-lg shadow duration-300 transition-all hover:-translate-y-1 hover:bg-black-200 group hover:rotate-1">
            <p className="font-medium relative z-50 h4 text-gray-100 pointer-events-none">{children}</p>
            {bg && 
            <div className="absolute z-20 text-gray-200 text-opacity-30 group-hover:text-black-100 pointer-events-none -right-[40%] -bottom-[15%] w-[120%]">
                {bg}
            </div>}
        </div>  
    )
}
