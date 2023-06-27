// import React from 'react'

export default function Badge( { children, index = 1 } ) {
    return (
        <div className="relative inline-flex items-center p-3 p font-medium text-center bg-gray-100 rounded-lg shadow-md shadow-gray-200/40 justify-center">
            {/* <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg> */}
            <p className="text-center w-4/5">{children}</p>
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-8 h-8 text-base bg-green-100 border-gray-100 rounded-full -top-3 -left-3">{index}</div>
        </div>
    )
}
