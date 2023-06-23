// import React from 'react'

export default function Card({ children, bg }) {
    return (
        // <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="block relative overflow-hidden max-w-sm p-6 w-60 h-80 bg-gray-800 border border-gray-700 rounded-lg shadow duration-300 transition-all hover:-translate-y-1 hover:bg-gray-700">
            <p className="font-medium relative z-50 text-2xl text-white">{children}</p>
            {bg && 
            <div className="absolute z-20 text-gray-700 -right-[40%] -bottom-[15%] min-w-[140%]">
                {bg}
            </div>}
        </div>  
    )
}
