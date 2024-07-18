import React, {useEffect, useState} from "react";
import "../../css/navbar.css"
import Nav from "./nav"

function MyButton() {
   return (
      <button>
         I'm a Button
      </button>
   );
}

function MenuButton() {
   return (
      <button>
         Menu
      </button>
   );
}

function AccountButton() {
   return (
      <button>
         Account
      </button>
   );
}

function NavBar() {
   return (
      <div className={'NavBarDiv'}>
         <div className={'leftNavBarDiv'}>
            <Nav />
         </div>
         <div className={'middleNavBarDiv'}>
            <p id={'title'}>
               Bizzoo
            </p>
         </div>
         <div className={'rightNavBarDiv'}>
            <AccountButton />
         </div>
      </div>
   );
}

export default NavBar;