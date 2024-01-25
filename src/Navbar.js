import React from "react";
function Navbar(){
    
    return(
        <>
         {/* Sidebar */}
    <div className="inline-flex h-screen fixed overflow-auto">
        <div className="flex h-full w-24  border border-gray-400 ">
            
            <div className="flex flex-col items-center  h-full">
                
            <div>
            <img className="w-24 h-24" src="/logo69.png" />
    </div>

                 {/* Sidebar Buttons */}
                <div className="mt-6 space-y-4">
                    <a href="#">
                        <svg className="size-6 mb-12 mt-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" height="14" width="14"><g id="home-3--home-house-roof-shelter"><path id="Subtract" fill="#000" fill-rule="evenodd" d="M0.318 6.045A1 1 0 0 0 0 6.776V12.5A1.5 1.5 0 0 0 1.5 14H6v-3a1 1 0 1 1 2 0v3h4.5a1.5 1.5 0 0 0 1.5 -1.5V6.776a1 1 0 0 0 -0.318 -0.731L7.325 0.12a0.5 0.5 0 0 0 -0.65 0L0.318 6.045Z" clip-rule="evenodd" stroke-width="1"></path></g></svg>
                    </a>
                    <a href="#">
                        <svg className="size-6 mb-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" height="14" width="14"><g id="blank-calendar--blank-calendar-date-day-month-empty"><path id="Union" fill="#000" fill-rule="evenodd" d="M4.5 1a1 1 0 0 0 -2 0v1h-1A1.5 1.5 0 0 0 0 3.5V5h14V3.5A1.5 1.5 0 0 0 12.5 2h-1V1a1 1 0 1 0 -2 0v1h-5V1ZM14 6.25H0v6.25A1.5 1.5 0 0 0 1.5 14h11a1.5 1.5 0 0 0 1.5 -1.5V6.25Z" clip-rule="evenodd" stroke-width="1"></path></g></svg>
                    </a>
                    <a href="#">
                        <svg className="size-6 mb-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" height="14" width="14"><g id="wallet--money-payment-finance-wallet"><path id="Union" fill="#000" fill-rule="evenodd" d="M0 4.355a3.5 3.5 0 0 1 3.5 -3.5H10a0.5 0.5 0 0 1 0.5 0.5v1.398l-7.145 0a0.625 0.625 0 1 0 0 1.25l7.585 0c0.02 0 0.039 -0.001 0.058 -0.003l0.214 0a1.5 1.5 0 0 1 1.5 1.5v0.916h-2.95c-0.824 0 -1.75 0.625 -1.75 1.695v1.778c0 1.07 0.926 1.695 1.75 1.695h2.95v0.916a1.5 1.5 0 0 1 -1.5 1.5L1.5 14A1.5 1.5 0 0 1 0 12.5V4.355Zm9.763 3.311h3.5c0.276 0 0.5 0.2 0.5 0.445v1.778c0 0.246 -0.224 0.445 -0.5 0.445h-3.5c-0.276 0 -0.5 -0.2 -0.5 -0.445V8.111c0 -0.246 0.224 -0.445 0.5 -0.445Z" clip-rule="evenodd" stroke-width="1"></path></g></svg>
                        </a>
                        <a href="#">
                            <svg className="size-6 mb-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" height="14" width="14"><g id="mail-send-envelope--envelope-email-message-unopened-sealed-close"><path id="Subtract" fill="#000" fill-rule="evenodd" d="M0 2.75a1.5 1.5 0 0 1 1.5 -1.5h11a1.5 1.5 0 0 1 1.5 1.5v0.342L7.383 7.504A0.72 0.72 0 0 1 7 7.607a0.72 0.72 0 0 1 -0.383 -0.103L0 3.092V2.75Zm0 1.844v6.656a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5 -1.5V4.594L8.073 8.546l-0.005 0.004A1.966 1.966 0 0 1 7 8.857c-0.375 0 -0.753 -0.102 -1.068 -0.307l-0.005 -0.004L0 4.594Z" clip-rule="evenodd" stroke-width="1"></path></g></svg>
                            </a>
                            <a href="#">
                                <svg className="mt-48 mb-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><g id="dashboard-3--app-application-dashboard-home-layout-vertical"><path id="Union" fill="#000" fill-rule="evenodd" d="M1 0a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1 -1V1a1 1 0 0 0 -1 -1H1Zm7 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v2.01a1 1 0 0 1 -1 1H9a1 1 0 0 1 -1 -1V1Zm0 6a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1H9a1 1 0 0 1 -1 -1V7Zm-8 3.99a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1V13a1 1 0 0 1 -1 1H1a1 1 0 0 1 -1 -1v-2.01Z" clip-rule="evenodd" stroke-width="1"></path></g></svg>
                                </a>
                                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><g id="logout-1--arrow-exit-frame-leave-logout-rectangle-right"><path id="Union" fill="#000" fill-rule="evenodd" d="M0 1.5A1.5 1.5 0 0 1 1.5 0h7A1.5 1.5 0 0 1 10 1.5v1.939a2 2 0 0 0 -0.734 1.311H5.75a2.25 2.25 0 1 0 0 4.5h3.516A2 2 0 0 0 10 10.561V12.5A1.5 1.5 0 0 1 8.5 14h-7A1.5 1.5 0 0 1 0 12.5v-11Zm10.963 2.807A0.75 0.75 0 0 0 10.5 5v1H5.75a1 1 0 0 0 0 2h4.75v1a0.75 0.75 0 0 0 1.28 0.53l2 -2a0.75 0.75 0 0 0 0 -1.06l-2 -2a0.75 0.75 0 0 0 -0.817 -0.163Z" clip-rule="evenodd" stroke-width="1"></path></g></svg>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Navbar;