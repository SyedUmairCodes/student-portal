import React,{useState} from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
const NavBar = () => {
  function showPrograms(){
    document.getElementById("programs").style.display="block";
  }
  function hidePrograms(){
      document.getElementById("programs").style.display="none";
  }
  function showAbout(){
    document.getElementById("about").style.display="block";
  }
  function hideAbout(){
    document.getElementById("about").style.display="none";
  }

  return (
    <>
      
      <div className="border-box h-16 w-100  bg-eden-500 text-white  ">
      <StaticImage
            className="object-cover w-20 h-28 float-left mt-5 ml-14"
            src="https://i.ibb.co/gMQCpm4/PIAIC-Logo-svg.png"
            alt="PIAIC"

          />
        <div className="  float-right mt-5 m-14 ">
          <Link to="#" className="p-3 m-3   hover:text-green-600">How it works</Link>
          <Link to="#" className="p-3 m-3  hover:text-green-600" >Apply</Link>
          <Link to="#" className="p-3 m-3  hover:text-green-600 " onMouseEnter={showPrograms} onMouseLeave={hidePrograms}>Available Programs
            <div class="w-7 overflow-hidden inline-block">
              <div class=" h-2.5 w-2.5 bg-white -rotate-45 transform origin-top-left"></div>
            </div>
          </Link>

          <Link to="#" className="p-3 m-3  hover:text-green-600" onMouseEnter={showAbout} onMouseLeave={hideAbout}>About
            <div class="w-16 overflow-hidden inline-block">
              <div class=" h-2.5 w-2.5 bg-white -rotate-45 transform origin-top-left"></div>
            </div>
          </Link>

          <Link to="#" className="p-3 m-3  hover:text-green-600">WIT</Link>
        </div>
      </div>
      <div className="w-screen  relative hidden" id="programs" onMouseEnter={showPrograms} onMouseLeave={hidePrograms}>
        <div className="w-52 h-32 -my-3 bg-gradient-to-r from-eden-400 to-eden-500 text-white absolute inset-y-0 right-72  "  >
          <Link className="block border-b border-green-700 hover:text-green-800" to="#">Artificial Intelligence</Link>
          <Link className="block border-b border-green-700 hover:text-green-800" to="#">Cloud Native and Mobile Web Computing</Link>
          <Link className="block border-b border-green-700 hover:text-green-800" to="#">Block Chain</Link>
          <Link className="block border-b border-green-700 hover:text-green-800" to="#">Internet of Things</Link>
        </div>

      </div>
      
      <div className="hidden w-screen  relative  " id="about" onMouseEnter={showAbout} onMouseLeave={hideAbout}>
        <div className="w-54 h-6 -my-3  bg-gradient-to-r from-eden-400 to-eden-500 text-white absolute inset-y-0 right-56 ">
          <Link className="block border-b border-green-700 hover:text-green-800" to="#">President</Link>
        </div>

      </div>
    </>
  );
};

export default NavBar;
