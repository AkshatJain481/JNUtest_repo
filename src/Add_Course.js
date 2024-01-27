import { useState } from "react";
import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
function Add_Course(){
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [imageLinks, setImageLinks] = useState('');
    const [duration, setDuration] = useState('');
    const [price, setPrice] = useState('');
    const [name, setName] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users', {
             Title: title,
             Description: description,
             VideoURL: videoUrl,
             ImageLinks: imageLinks,
             Duration: duration,
             Price: price,
             Name: name
            });
        
            console.log(response.data); // Success message
          } catch (error) {
            console.error('Error creating user:', error);
          }
            setTitle('');
            setDescription('');
            setVideoUrl('');
            setImageLinks('');
            setDuration('');
            setPrice('');
       
        setIsOpen(!isOpen);
      };
    const togglePopup = () => {
        setIsOpen(!isOpen);
      };
    return(
        <>
            <div className="flex">
                <Navbar/>
                
                <div className=" ml-[94.4px] ">
                
                <div className="flex items-center  ml-[15px] mt-6 min-w-[1441px]">
                    
                <div class="teacher-courses-page-searchBox ml-[500px]">

                    <input class="teacher-courses-page-searchInput" type="text" name="" placeholder="Search something"/>
                    <button class="teacher-courses-page-searchButton" href="#">
                        
                        

                      <svg xmlns="http://www.w3.org/2000/svg" className="m-auto" width="29" height="29" viewBox="0 0 29 29" fill="none">
                    <g clip-path="url(#clip0_2_17)">
                    <g filter="url(#filter0_d_2_17)">
                    <path d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"></path>
                    </g>
                    </g>
                    <defs>
                    <filter id="filter0_d_2_17" x="-0.418549" y="3.70435" width="29.7139" height="29.7139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                    <feOffset dy="4"></feOffset>
                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_17"></feBlend>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_17" result="shape"></feBlend>
                    </filter>
                    <clipPath id="clip0_2_17">
                    <rect width="28.0702" height="28.0702" fill="white" transform="translate(0.403503 0.526367)"></rect>
                    </clipPath>
                    </defs>
                    </svg>
                            

                    </button>
                </div>



                <button class="button-for-adding-courses ml-[500px]" onClick={togglePopup}>
                    <span class= "inner-span-element-in-button-for-adding-courses">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg> Create
                    </span>
                </button>
                </div>
                <div className="flex space-x-10 ml-6 mt-6">
                <div  >
                    <i class="fa-solid fa-border-all mr-1"></i> All Courses
                    </div>
                    <div>
                    <i class="fa-solid fa-dollar-sign mr-1"></i> Paid Courses
                    </div>
                    <div>
                    <i class="fa-solid fa-bolt bolt-for-free-courses mr-1"></i>Free Courses
                    </div>
                    </div>
                </div>
               
            </div>
            {isOpen && ( <><div className="ml-[500px]"> 
            <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="videoUrl">Video URL:</label>
        <input
          type="text"
          id="videoUrl"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="imageLinks">Image Links:</label>
        <input
          type="text"
          id="imageLinks"
          value={imageLinks}
          onChange={(e) => setImageLinks(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="duration">Duration:</label>
        <input
          type="text"
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="currency"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form></div></>)}
        </>
    )
}

export default Add_Course;