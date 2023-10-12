// import { useState } from "react";
// import { NavLinks } from "./NavLinks";
// import logo from "../img/X-img.png";
// export const NavLinksAfter = () => {
//   const changeNav=()=>{
//     let [click, setClick] = useState(true);
//     const navAfterLogo = document.querySelector(".afterLogo");
//     const backLogo = document.querySelector(".backLogo");
//     if(click){
//       setClick(false);
//       navAfterLogo.style.display = "flex";
//       backLogo.style.display = "none";
//     }else{
//       setClick(true);
//       navAfterLogo.style.display = "flex";

//     }
//   }
//   console.log("nav After");
//   return (
//     <div className="navAfter">
//       <div>
//         <div className="backLogo" onClick={()=> changeNav()}>
//           <img src={logo} alt="" />
//         </div>
//       </div>
//       <div className="navAfterChild">
//         <NavLinks />
//       </div>
//     </div>
//   );
// };

import { useState } from "react";
import { NavLinks } from "./NavLinks";
import logo from "../img/X-img.png";

export const NavLinksAfter = () => {
  // let [click, setClick] = useState(false);

  const changeNav = () => {
    const navLinksAfter = document.querySelector(".navLinksAfter");
    const navAfter = document.querySelector(".navAfter");
    navLinksAfter.style.display = "flex";
    navAfter.style.display = "none";
    console.log(navAfter);
  };

  return (
    <div className="navAfter">
      <div>
        <div className="backLogo" onClick={() => changeNav()}>
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="navAfterChild">
        <NavLinks />
      </div>
    </div>
  );
};
