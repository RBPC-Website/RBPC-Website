export default function Footer() {
    return (
        
    <footer className="w-full mx-auto bg-gray-100 text-sm text-center font-medium z-10">
        <div className="content">
            <hr className="border-gray-200" />
            <div className="bg-gray-100 flex flex-wrap items-center justify-between gap-4 py-6">
                <div className="flex flex-col items-start gap-2 w-[40%] min-w-[270px]">
                    <a className="text-gray-500 hover:text-black-100 hover:underline flex items-center justify-between gap-2">
                        <span className="flex justify-center items-center text-gray-500 hover:text-black-100 bg-gray-100 hover:bg-white-100 p-2 rounded-full shadow transition duration-150 ease-in-out">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                            </svg>
                        </span>
                        <p className="text-base">RBPC@rmit.edu.vn</p>
                    </a>
                    <a className="text-gray-500 hover:text-black-100 hover:underline flex items-center justify-between gap-2">
                        <span className="flex justify-center items-center text-gray-500 hover:text-black-100 bg-gray-100 hover:bg-white-100 p-2 rounded-full shadow transition duration-150 ease-in-out">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                                <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
                            </svg>
                        </span>
                        <div className="text-base text-left">
                            <p>Hotline: (84-28) 3776 1418 (TP. HCM) | (84-24) 3724 5923 (Hanoi) </p>
                        </div>

                    </a>
                </div>
                {/* Facebook */}   
                <div className="flex-1 min-w-[280px] max-w-[340px] flex justify-end">
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Frmit.rbpc&tabs&width=340&height=70&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" allowFullScreen={true} width={'100%'} height={'70px'} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
            </div>
        </div>
    </footer>

    )
}