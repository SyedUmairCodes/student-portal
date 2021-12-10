import * as React from 'react';
import { Link } from 'gatsby';


const Footer = () => {
    return(
        <React.Fragment>
        <footer className="w-full box-border mx-auto bg-gray-800 text-gray-300">   
          
        <div className="container flex flex-column flex-1 flex-grow-0 flex-nowrap justify-evenly ">
 
        
             <div className="container content-evenly px-8 py-20">
                    <p className="footer-list-heads font-bold tracking-wide"> Navigation </p>
                    <br />
                    <ul className="footer-list-simple leading-loose text-sm">
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/"><li >Apply</li></Link>
                        <Link to="/"><li>How it works</li></Link>
                        <Link to="/"><li >Artificial Intelligence</li></Link>
                        <Link to="/"><li>Cloud Native and Mobile Web Computing</li></Link>
                        <Link to="/"><li>Blockchain</li></Link>
                        <Link to="/"><li>Internet of Things</li></Link>
                        <Link to="/"><li>About the President</li></Link>
                        <Link to="/"><li>Management Committee</li></Link>
                        <Link to="/"><li>Women Inclusion in Technology (WIT)</li></Link>
                    </ul>
            </div>
        
            <div className="container  content-evenly px-8 py-20">
                 <p className="font-bold tracking-wide"> Locations </p>
                 <br />
                
                 <div>
                     <p className="leading-loose text-sm"> PIAIC Headquarters</p>
                     <ul className="text-sm">
                         <li className="flex flex-column justify-left space-x-10 ">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="#51d98d">
                                 <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                               </svg>
                             <a href="https://goo.gl/maps/UPXtpSiJ5NH2" target="_blank" rel="noopener noreferrer">
                                 Plot 245/2 M,  Block 6 PECHS, Karachi, Sindh 75100, Pakistan
                             </a>
                         </li>
 
                         <li className="flex flex-column justify-left space-x-10">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#51d98d" viewBox="0 0 24 24" stroke="#51d98d">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                               </svg>
                             <a href="tel:+92-308-2220203"> +92-308-2220203 (WhatsApp as well)</a>
                         </li>
                     </ul>
                 </div>
                     <br />
                 <div>
                     <p className="leading-loose text-sm">PIAIC Helpline</p>
                     <ul className="leading-loose text-sm">
                         <li className="flex flex-column justify-left space-x-10">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#51d98d" viewBox="0 0 24 24" stroke="#51d98d">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                               </svg>
                             <a href="tel:+92-308-2220203">  +92-308-2220203 (WhatsApp as well)</a>
                         </li>
                     </ul>
                 </div>
                 <br />
                 <br />
                 <br />
                 <div>
                         <p className="leading-loose">Connect with us</p>
                     <div className="flex flex-column justify-left space-x-8">
                             <a target="_blank" href="https://www.facebook.com/groups/piaic/" rel="noopener noreferrer">
                             <svg className="w-6 h-6 text-blue-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                 <path
                                     d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                                 />
                             </svg>
                             </a>
                     
                         <a target="_blank" href="https://www.youtube.com/channel/UC2Makv_pLAtvrjHNgg-pBLg" rel="noopener noreferrer">
                            <svg className="youtube w-10 h-10" fill="red" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                            </svg>
                         </a>
                 </div>
                 </div>
             </div>
 
     
             <div className="container content-evenly px-8 py-20">
                 <div >
                     <div>
                        <div></div>
                         <p className="leading-loose text-sm">Karachi Field Office</p>
                         <ul className="leading-loose text-sm">   
                             <li className="flex flex-column justify-left space-x-10 ">
                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="#51d98d">
                                     <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                   </svg>
                                   <a href="https://goo.gl/maps/r9yNA488tN52" target="_blank"rel="noopener noreferrer">
                                     A-25, Bahadurabad Chowrangi, Karachi, Sindh 74800, Pakistan
                                 </a>
                             </li>
                             <li className="flex flex-column justify-left space-x-10 ">
                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#51d98d" viewBox="0 0 24 24" stroke="#51d98d">
                                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                   </svg>
                                 <a href="tel:+92-311-1729526">+92-311-1729526</a>
                             </li>
                         </ul>
                    </div>
                            
                     <div>
                         <p className="leading-loose text-sm">Rawalpindi Field Office</p>
                            
                         <ul className="leading-loose text-sm"> 
                             <li className="flex flex-column justify-left space-x-10 ">
                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="#51d98d">
                                     <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                   </svg>
                                
                                 <a href="https://maps.google.com/maps?q=33.6328413%2C73.0678255&amp;z=17&amp;hl=en" target="_blank" rel="noopener noreferrer">
                                 4th-B Rd, Satellite Town, Rawalpindi, Punjab 46300
                                 </a>
                             </li>
 
                             <li className="flex flex-column justify-left space-x-10 ">
                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#51d98d" viewBox="0 0 24 24" stroke="#51d98d">
                                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                   </svg>
                                 <a href="tel:051-4940669">051-4940669</a>
                             </li>
                         </ul>
                     </div>
                                
                     <div>
                         <p className="leading-loose text-sm">Islamabad Field Office</p>
                                
                         <ul className="leading-loose text-sm"> 
                             <li className="flex flex-column justify-left space-x-10 ">
                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="#51d98d">
                                     <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                   </svg>
                                 <a href="https://goo.gl/maps/1MdVXe9L2j3teDSq9" target="_blank" rel="noopener noreferrer">
                                 F-10 Markaz F 10/3 F-10, Islamabad, Islamabad Capital Territory
                                 </a>
                             </li>
                             <li className="flex flex-column justify-left space-x-10 ">
                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#51d98d" viewBox="0 0 24 24" stroke="#51d98d">
                                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                   </svg>
                                  <a href="tel:051-2223191">051-2223191</a>
                             </li>
                         </ul>
                     </div>
 
                     <div>
                         <p className="leading-loose text-sm">Faisalabad Field Office</p>
                                
                         <ul className="leading-loose text-sm"> 
                             <li className="flex flex-column justify-left space-x-10 ">
                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="#51d98d">
                                     <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                   </svg>
                                 <a href="https://goo.gl/maps/1MdVXe9L2j3teDSq9" target="_blank" rel="noopener noreferrer">
                                 F-10 Markaz F 10/3 F-10, Islamabad, Islamabad Capital Territory
                                 </a>
                             </li>
                             <li className="flex flex-column justify-left space-x-10 ">
                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#51d98d" viewBox="0 0 24 24" stroke="#51d98d">
                                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                   </svg>
                                  <a href="tel:051-2223191">051-2223191</a>
                             </li>
                         </ul>
                     </div>
                     </div>
             </div>
             </div>
         </footer>
     
 
     <div className="flex flex-column flex-1 flex-nowrap w-full h-24 bg-gray-900 justify-end items-center p-14">
                 <div className="subpixel-antialiased">
                         <b className="text-gray-300 leading-loose italic">Powered by</b>
                         <div className="bg-gradient-to-r from-gray-800">
                         <Link to="/"><p className="text-green-400"> Team PIAIC Students</p></Link>
                         </div>
                     </div>
     </div>
    </React.Fragment>
    )
};

export default Footer;