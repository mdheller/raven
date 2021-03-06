import React from 'react';
//import logo from './logo.svg';
import './index.css';
import PostView from './components/PostView';
import Tweet from './components/Tweet';
import TextField from './components/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee, faHome, faBook, faBookmark, faInbox, faBoxOpen, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Quotes from './components/Qoutes';
import user from './icons/user.png';




function App() {
  return (
    <body class="bg-white font-sans">
    
      <div class="">
        <div class="container mx-auto flex items-center py-10 px-15">
        
         <nav class="w-2/5">
           <a href="#" class="top-nav"><FontAwesomeIcon icon={faHome}/> Home</a> 
           <div class="group inline-block relative">
            <a href="#" class="top-nav"><FontAwesomeIcon icon={faBook}/> arXiv </a> 
           <div class="absolute inline-flex mx-auto hidden group-hover:block border-teal-500 group-hover:visible my-3 text-xs bg-gray-100  text-teal-500 border-t-4 border-gray py-3 px-4">
            <p class="font-bold"><FontAwesomeIcon icon={faInfoCircle}/>Info</p>
             <p>Find latest research and papers</p>
           </div>
           </div>
           <a href="#" class="top-nav"><FontAwesomeIcon icon={faBookmark}/> Notes </a> 
           <a href="#" class="top-nav"><FontAwesomeIcon icon={faBoxOpen}/> Jobs </a> 
         </nav>

         <div class="w-3/5 flex justify-center">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gray" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter">
           <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 4 2z"></path>
         </svg>
         </div>
        <div class="w-3/5 flex justify-end">
          <div class="mr-4">
             <input class="focus:outline-none bg-gray-200 h-8 px-4 py-4 text-xs w-40 rounded-full" placeholder="Search Raven"></input>
        </div>
        <div class="mr-4">
          <img src="https://i0.wp.com/seedsrevolution.com/wp-content/uploads/2019/10/7_avatar-512.png?w=512&ssl=1" alt="avatar" class="h-10 w-10 rounded-full"/>
          
         </div>
          <button class="font-small bg-blue-500 hover:text-gray-100 focus:outline-none hover:bg-blue-600 hover:rounded-full text-white font-bold py-1 px-4  rounded-full">
            Tweet
       </button>
       </div>
          
        </div>

       <header class="bg-purple-100 m-6 p-6 rounded shadow-lg">
          <h1 class="text-teal-500 text-2xl">Welcome to Raven</h1>
       </header>

 
 


</div> 

      
        
        <div class="flex-inline">
        <TextField/>
        
        <PostView/>
        </div>


        <Tweet/>
        <Quotes/>
        
      
    </body>
  );
}

export default App;
