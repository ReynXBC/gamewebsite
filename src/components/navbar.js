import React, {useEffect, useState} from "react";
import "../css/navbar.css"

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
            <MenuButton />
         </div>
         <div className={'middleNavBarDiv'}>
            <title>
               Bizzoo
            </title>
         </div>
         <div className={'rightNavBarDiv'}>
            <AccountButton />
         </div>
      </div>
   );
}

export default NavBar;