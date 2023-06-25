export default function Footer() {
    return (
        
    <footer className="w-full mx-auto bg-white text-sm text-center font-bold">
        <hr className="border-gray-200" />
        <div className="px-6 py-6 bg-gray-100 flex flex-wrap items-center justify-between sm:justify-center gap-5">
            <a href="#" className="text-gray-500 hover:text-black-100 hover:underline flex items-center justify-between gap-2">
                <span className="flex justify-center items-center text-gray-500 hover:text-black-100 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
                </span>
                <p>RBPC</p>
            </a>
            <a className="text-gray-500 hover:text-black-100 hover:underline flex items-center justify-between gap-2">
                <span className="flex justify-center items-center text-gray-500 hover:text-black-100 bg-white hover:bg-white-100 p-2 rounded-full shadow transition duration-150 ease-in-out">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                    </svg>
                </span>
                <p>RBPC@rmit.edu.vn</p>
            </a>
            <a className="text-gray-500 hover:text-black-100 hover:underline flex flex-wrap items-center justify-between gap-2">
                <span className="flex justify-center items-center text-gray-500 hover:text-black-100 bg-white hover:bg-white-100 p-2 rounded-full shadow transition duration-150 ease-in-out">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                        <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
                    </svg>
                </span>
                <p>Hotline: (84-28) 3776 1418 (TP. HCM) | (84-24) 3724 5923 (Hanoi)</p>
            </a>
            
        </div>
    </footer>

    )
}