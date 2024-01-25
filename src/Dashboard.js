import React from "react";
import Navbar from "./Navbar";
import Calendar from './Calendar';
import StudentsCardList from './StudentsCardList';


function Dashboard() {
    return (
        <>
            <div className="flex bg-color1">
                <Navbar />
                <div className="flex-1 flex flex-col overflow-hidden">

                    <div className="p-4 border border-gray-400 flex items-center">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" height="24" width="30">
                            <g id="magnifying-glass--glass-search-magnifying">
                                <path id="Union" fill="#000" fillRule="evenodd" d="M2 6a4 4 0 1 1 8 0 4 4 0 0 1 -8 0Zm4 -6a6 6 0 1 0 3.476 10.89l2.817 2.817a1 1 0 0 0 1.414 -1.414l-2.816 -2.816A6 6 0 0 0 6 0Z" clipRule="evenodd" strokeWidth="1"></path>
                            </g>
                        </svg>

                        <input
                            type="text"
                            className="w-full py-2 px-4 text-gray-500 outline-none text-xl bg-color1"
                            placeholder="Search for classes or students"
                        />
                        
                        <div className="p-4 flex items-center justify-between space-x-14">
                                    <a >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" height="20" width="20"><g id="cog--work-loading-cog-gear-settings-machine"><path id="Subtract" fill="#000" fill-rule="evenodd" d="m5.557 0.69 -0.463 1.195 -1.594 0.904 -1.27 -0.194a1.077 1.077 0 0 0 -1.078 0.528l-0.43 0.754a1.077 1.077 0 0 0 0.086 1.217l0.807 1.001v1.81L0.83 8.906a1.077 1.077 0 0 0 -0.086 1.217l0.43 0.754a1.077 1.077 0 0 0 1.078 0.528l1.27 -0.194 1.573 0.904 0.463 1.196a1.076 1.076 0 0 0 1 0.689h0.905a1.076 1.076 0 0 0 1.002 -0.69l0.463 -1.195 1.572 -0.904 1.27 0.194a1.077 1.077 0 0 0 1.078 -0.528l0.43 -0.754a1.077 1.077 0 0 0 -0.086 -1.217l-0.807 -1.001v-1.81l0.786 -1.001a1.077 1.077 0 0 0 0.086 -1.217l-0.43 -0.754a1.076 1.076 0 0 0 -1.078 -0.528l-1.27 0.194 -1.573 -0.904L8.443 0.689A1.077 1.077 0 0 0 7.442 0h-0.884a1.077 1.077 0 0 0 -1.001 0.69ZM7 9.25a2.25 2.25 0 1 0 0 -4.5 2.25 2.25 0 0 0 0 4.5Z" clip-rule="evenodd" stroke-width="1"></path></g></svg>
                        </a>
                        <a>
                        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" height="20" width="20"><g id="bell-notification--alert-bell-ring-notification-alarm"><path id="Union" fill="#000000" fill-rule="evenodd" d="M3.909 1.53a4.372 4.372 0 0 1 7.462 3.092c0 0.543 0.09 1.062 0.23 1.613 0.037 0.112 0.076 0.217 0.118 0.316 0.057 0.133 0.172 0.248 0.392 0.39 0.086 0.054 0.174 0.105 0.274 0.162l0.093 0.054c0.133 0.077 0.283 0.167 0.426 0.273 0.518 0.383 0.708 0.973 0.682 1.505 -0.025 0.517 -0.257 1.057 -0.69 1.383a0.764 0.764 0 0 1 -0.087 0.06 2.07 2.07 0 0 1 -0.226 0.125 5.003 5.003 0 0 1 -0.928 0.318c-0.87 0.22 -2.311 0.429 -4.655 0.429 -2.344 0 -3.785 -0.209 -4.655 -0.429a5.005 5.005 0 0 1 -0.928 -0.318 2.07 2.07 0 0 1 -0.293 -0.17 0.76 0.76 0 0 1 -0.02 -0.015C0.671 9.992 0.44 9.452 0.414 8.935c-0.026 -0.532 0.164 -1.122 0.682 -1.505l0.297 0.401 -0.297 -0.401a4.5 4.5 0 0 1 0.426 -0.273l0.093 -0.054c0.1 -0.057 0.188 -0.108 0.274 -0.163 0.22 -0.14 0.335 -0.256 0.391 -0.389 0.203 -0.476 0.348 -1.104 0.348 -1.93 0 -1.159 0.461 -2.27 1.28 -3.09Zm1.93 10.455a0.5 0.5 0 0 0 -0.602 0.71 2 2 0 0 0 3.526 0 0.5 0.5 0 0 0 -0.601 -0.71c-0.254 0.086 -0.628 0.152 -1.162 0.152 -0.534 0 -0.908 -0.066 -1.162 -0.152Z" clip-rule="evenodd" stroke-width="1"></path></g></svg>
                        </a>
                        <a>
                        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" height="20" width="20"><g id="user-profile-focus--close-geometric-human-person-profile-focus-user"><path id="Vector" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5v2c0 0.2652 -0.1054 0.5196 -0.2929 0.7071s-0.4419 0.2929 -0.7071 0.2929h-2" stroke-width="1"></path><path id="Vector_2" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M10.5 0.5h2c0.2652 0 0.5196 0.105357 0.7071 0.292893 0.1875 0.187537 0.2929 0.441887 0.2929 0.707107v2" stroke-width="1"></path><path id="Vector_3" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M0.5 3.5v-2c0 -0.26522 0.105357 -0.51957 0.292893 -0.707107C0.98043 0.605357 1.23478 0.5 1.5 0.5h2" stroke-width="1"></path><path id="Vector_4" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M3.5 13.5h-2c-0.26522 0 -0.51957 -0.1054 -0.707107 -0.2929C0.605357 13.0196 0.5 12.7652 0.5 12.5v-2" stroke-width="1"></path><path id="Vector_5" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M6.99975 6.49998c1.10456 0 1.99999 -0.89543 1.99999 -1.99999S8.10431 2.5 6.99975 2.5c-1.10457 0 -1.99999 0.89543 -1.99999 1.99999s0.89542 1.99999 1.99999 1.99999Z" stroke-width="1"></path><path id="Vector_6" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M10.8034 11.0001c-0.2584 -0.8057 -0.7659 -1.50842 -1.44938 -2.00701 -0.68349 -0.4986 -1.50767 -0.76726 -2.3537 -0.76726 -0.84603 0 -1.6702 0.26866 -2.3537 0.76726 -0.6835 0.49859 -1.191 1.20131 -1.44935 2.00701h7.60613Z" stroke-width="1"></path></g></svg>
                        </a>
                        </div>
                    </div>

                    {/* Content section below the search bar */}
                    <div className="p-3 flex flex-row">
  <div className="flex-none">
    <Calendar />
  </div>
  <div className="ml-4 mt-3 flex-none">
    <StudentsCardList />
  </div>
  <div>
  <div className="w-max bg-white rounded-2xl shadow-md ml-8 shadow-gray-400 p-5 ">
    <h2 className="text-2xl font-semibold mb-6 ml-5 inline">Documents</h2>
    <h2 className="text-xl  mt-0 text-blue-700 float-end">view all</h2>
    <div className="flex items-center justify-center ">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="red" d="M224 152a8 8 0 0 1-8 8h-24v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0v-56a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8M92 172a28 28 0 0 1-28 28h-8v8a8 8 0 0 1-16 0v-56a8 8 0 0 1 8-8h16a28 28 0 0 1 28 28m-16 0a12 12 0 0 0-12-12h-8v24h8a12 12 0 0 0 12-12m88 8a36 36 0 0 1-36 36h-16a8 8 0 0 1-8-8v-56a8 8 0 0 1 8-8h16a36 36 0 0 1 36 36m-16 0a20 20 0 0 0-20-20h-8v40h8a20 20 0 0 0 20-20M40 112V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88v24a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0m120-32h28.69L160 51.31Z"/></svg>
    <h2 className="text-xl font-normal mr-5 inline">Class 1 notes.pdf</h2>
    <svg className="mt-2"xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="blue" d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"/><path fill="blue" d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06z"/></svg>
    </div>
    <div className="flex items-center justify-center ">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="red" d="M224 152a8 8 0 0 1-8 8h-24v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0v-56a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8M92 172a28 28 0 0 1-28 28h-8v8a8 8 0 0 1-16 0v-56a8 8 0 0 1 8-8h16a28 28 0 0 1 28 28m-16 0a12 12 0 0 0-12-12h-8v24h8a12 12 0 0 0 12-12m88 8a36 36 0 0 1-36 36h-16a8 8 0 0 1-8-8v-56a8 8 0 0 1 8-8h16a36 36 0 0 1 36 36m-16 0a20 20 0 0 0-20-20h-8v40h8a20 20 0 0 0 20-20M40 112V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88v24a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0m120-32h28.69L160 51.31Z"/></svg>
    <h2 className="text-xl font-normal mr-5 inline">Class 1 notes.pdf</h2>
    <svg className="mt-2"xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="blue" d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"/><path fill="blue" d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06z"/></svg>
    </div>
    </div>
  </div>
</div>

                </div>
            </div>
        </>
    );
}

export default Dashboard;

