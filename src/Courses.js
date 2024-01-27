import React from "react";
import Navbar from './Navbar';

function Courses(){

    return(
        <>
        <div className='flex'>
        <Navbar/> 
        
        <div className="flex-1 flex flex-col overflow-hidden margin-left-from-navbar">
        
        <div className='p-4   flex items-center '>
        <div className="rounded-full bg-gray-300 p-2"><i class="fa-solid fa-arrows-rotate text-gray-600"></i></div>
      <div class="search-bar-element-of-courses-page ml-10">
        <svg class="search-icon-in-courses-page" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
        <input placeholder="Search Courses" type="search" class="search-bar-input-of-courses-page"/>
        </div>
        <button class="unlock-premiuim-button-on-course">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
                <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
            </svg>
            Unlock Pro
        </button>
        
        </div>
        <div className='p-4  courses-navbar flex items-center'>
            <ul className="flex justify-center space-x-24">
                <li className="cursor-pointer courses-page-below-searchbar-button"><i class="fa-solid fa-graduation-cap explore-courses-button "></i>Courses</li>
                <li className="cursor-pointer courses-page-below-searchbar-button"><i class="fa-solid fa-bolt trending-icon"></i>Trending</li>
                <li className="cursor-pointer courses-page-below-searchbar-button"><i class="fa-solid fa-crown premium-courses-button-on-courses-page"></i>Premium Courses</li>
            </ul>
        </div>
        <div className="mb-10 mt-10 flex">
            <div className="course-cards-common ml-auto" ><i class="fa-solid fa-palette"></i><p className="mt-3">Graphics & Design</p></div>
            <div className="course-cards-common ml-8" ><i class="fa-solid fa-robot"></i><p className="mt-3"></p>Prompt Engineering</div>
            <div className="course-cards-common ml-8" ><i class="fa-solid fa-film"></i><p className="mt-3">Video Editing</p></div>
            <div className="course-cards-common ml-8" ><i class="fa-solid fa-images"></i><p className="mt-3">Photo Editing</p></div>
            <div className="course-cards-common ml-8" ><i class="fa-solid fa-network-wired"></i><p className="mt-3">Programming and Tech</p></div>
            <div className="course-cards-common ml-8" ><i class="fa-solid fa-wave-square"></i><p className="mt-3">Audio Editing</p></div>
            <div className="course-cards-common ml-8" ><i class="fa-solid fa-briefcase"></i><p className="mt-3">Business Studies</p></div>
            <div className="course-cards-common ml-8 mr-auto" ><i class="fa-solid fa-book"></i><p className="mt-3">Commerce Subjects</p></div>
            
        </div>
        <div className="ml-auto mr-auto">
        <div className=" flex space-x-10" >
        <div className="each-course-card-image-and-desc max-w-72">
            <img src='/course_image.jpeg' className="min-h-52 rounded-2xl"  width={280} />
            <p className="font-semibold mt-2">Complete Design Thinking  Masterclass</p>
            <div class="courses-sold-and-the-teacher-of-the-course-below-the-desc-of-course "><i class="fa-solid fa-dollar-sign"></i>523k Sales <span class="dot ml-4"> <span className="ml-2">Laura Pickel</span></span></div>
            
        </div>
        <div className="each-course-card-image-and-desc max-w-72">
            <img src='/course_image.jpeg' className="min-h-52 rounded-2xl"  width={280} />
            <p className="font-semibold mt-2">Complete Design Thinking  Masterclass</p>
            <div class="courses-sold-and-the-teacher-of-the-course-below-the-desc-of-course "><i class="fa-solid fa-dollar-sign"></i>523k Sales <span class="dot ml-4"> <span className="ml-2">Laura Pickel</span></span></div>
            
        </div>
        <div className="each-course-card-image-and-desc max-w-72">
            <img src='/course_image.jpeg' className="min-h-52 rounded-2xl"  width={280} />
            <p className="font-semibold mt-2">Complete Design Thinking  Masterclass</p>
            <div class="courses-sold-and-the-teacher-of-the-course-below-the-desc-of-course "><i class="fa-solid fa-dollar-sign"></i>523k Sales <span class="dot ml-4"> <span className="ml-2">Laura Pickel</span></span></div>
            
        </div>
        <div className="each-course-card-image-and-desc max-w-72">
            <img src='/course_image.jpeg' className="min-h-52 rounded-2xl"  width={280} />
            <p className="font-semibold mt-2">Complete Design Thinking  Masterclass</p>
            <div class="courses-sold-and-the-teacher-of-the-course-below-the-desc-of-course "><i class="fa-solid fa-dollar-sign"></i>523k Sales <span class="dot ml-4"> <span className="ml-2">Laura Pickel</span></span></div>
            
        </div>
        </div>
        <div className="mt-10 flex space-x-10" >
        <div className="each-course-card-image-and-desc max-w-72">
            <img src='/course_image.jpeg' className="min-h-52 rounded-2xl"  width={280} />
            <p className="font-semibold mt-2">Complete Design Thinking  Masterclass</p>
            <div class="courses-sold-and-the-teacher-of-the-course-below-the-desc-of-course "><i class="fa-solid fa-dollar-sign"></i>523k Sales <span class="dot ml-4"> <span className="ml-2">Laura Pickel</span></span></div>
            
        </div>
        <div className="each-course-card-image-and-desc max-w-72">
            <img src='/course_image.jpeg' className="min-h-52 rounded-2xl"  width={280} />
            <p className="font-semibold mt-2">Complete Design Thinking  Masterclass</p>
            <div class="courses-sold-and-the-teacher-of-the-course-below-the-desc-of-course "><i class="fa-solid fa-dollar-sign"></i>523k Sales <span class="dot ml-4"> <span className="ml-2">Laura Pickel</span></span></div>
            
        </div>
        <div className="each-course-card-image-and-desc max-w-72">
            <img src='/course_image.jpeg' className="min-h-52 rounded-2xl"  width={280} />
            <p className="font-semibold mt-2">Complete Design Thinking  Masterclass</p>
            <div class="courses-sold-and-the-teacher-of-the-course-below-the-desc-of-course "><i class="fa-solid fa-dollar-sign"></i>523k Sales <span class="dot ml-4"> <span className="ml-2">Laura Pickel</span></span></div>
            
        </div>
        <div className="each-course-card-image-and-desc max-w-72">
            <img src='/course_image.jpeg' className="min-h-52 rounded-2xl"  width={280} />
            <p className="font-semibold mt-2">Complete Design Thinking  Masterclass</p>
            <div class="courses-sold-and-the-teacher-of-the-course-below-the-desc-of-course "><i class="fa-solid fa-dollar-sign"></i>523k Sales <span class="dot ml-4"> <span className="ml-2">Laura Pickel</span></span></div>
            
        </div>
        </div>
        <div className="mt-10 flex space-x-10" >
        <div className="each-course-card-image-and-desc max-w-72">
            <img src='/course_image.jpeg' className="min-h-52 rounded-2xl"  width={280} />
            <p className="font-semibold mt-2">Complete Design Thinking  Masterclass</p>
            <div class="courses-sold-and-the-teacher-of-the-course-below-the-desc-of-course "><i class="fa-solid fa-dollar-sign"></i>523k Sales <span class="dot ml-4"> <span className="ml-2">Laura Pickel</span></span></div>
            
        </div>
        <div className="each-course-card-image-and-desc max-w-72">
            <img src='/course_image.jpeg' className="min-h-52 rounded-2xl"  width={280} />
            <p className="font-semibold mt-2">Complete Design Thinking  Masterclass</p>
            <div class="courses-sold-and-the-teacher-of-the-course-below-the-desc-of-course "><i class="fa-solid fa-dollar-sign"></i>523k Sales <span class="dot ml-4"> <span className="ml-2">Laura Pickel</span></span></div>
            
        </div>
        <div className="each-course-card-image-and-desc max-w-72">
            <img src='/course_image.jpeg' className="min-h-52 rounded-2xl"  width={280} />
            <p className="font-semibold mt-2">Complete Design Thinking  Masterclass</p>
            <div class="courses-sold-and-the-teacher-of-the-course-below-the-desc-of-course "><i class="fa-solid fa-dollar-sign"></i>523k Sales <span class="dot ml-4"> <span className="ml-2">Laura Pickel</span></span></div>
            
        </div>
        <div className="each-course-card-image-and-desc max-w-72">
            <img src='/course_image.jpeg' className="min-h-52 rounded-2xl"  width={280} />
            <p className="font-semibold mt-2">Complete Design Thinking  Masterclass</p>
            <div class="courses-sold-and-the-teacher-of-the-course-below-the-desc-of-course "><i class="fa-solid fa-dollar-sign"></i>523k Sales <span class="dot ml-4"> <span className="ml-2">Laura Pickel</span></span></div>
            
        </div>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Courses;