import Hamburger from "./hamburger"
import { useState } from 'react'

export default function Nav() {

   const [hamburgerOpen, setHamburgerOpen] = useState(false);

   const toggleHamburger = () =>{
      setHamburgerOpen(!hamburgerOpen)
   }

   return(
      <div>
         <div className="navigation">
            <ul>
               <li>Home</li>
               <li>About</li>
               <li>Contact Us</li>
            </ul>
            <div className="hamburger" onClick={toggleHamburger}>
               <Hamburger isOpen={hamburgerOpen}/>
            </div>
         </div>

         <style jsx>{`
            

               .navigation{
                  width: 10vw;
                  height: 50px;
                  background-color: #282c34;
               }

               .navigation ul{
                  display: flex;
                  flex-wrap: wrap;
                  float: right;
                  margin: 20 0px;
                  padding: 0 25px;
               }

               .navigation ul li{
                  list-style-type: none;
                  padding-right: 10px;
               }

               @media (min-width: 1px){

                  .hamburger{
                     display: fixed;
                     padding-top: 10px;
                     margin-left: 10px;
                     z-index: 10;
                  }

                  .navigation ul{
                     display: ${hamburgerOpen ? 'inline' : 'none'};
                     background-color: #282c34;
                     height: 100vh;
                     width: 50vw;
                     margin-top: 50px;
                     position: fixed;
               }
                  
         `}
         </style>
      </div>
   )
}