// // import { useState } from "react"

import { useState } from "react";
import Header from "./components/header/Header";

// import { useState } from "react";

// const App = () => {
//   const [show, setShow] = useState(false);

//   function handleClick() {
//     setShow(!show);
//   }

//   return (
//     <>
//       <div className="app_component h-screen flex justify-center items-center">
//         <button
//           className="bg-red-500 px-3 py-2 text-xl font-bold rounded-xl"
//           onClick={handleClick}
//         >
//           Show
//         </button>
//         {show && (
//           <h1 className="bg-gray-500 px-3 py-2 text-xl font-bold rounded-xl">
//             Hello
//           </h1>
//         )}
//       </div>
//     </>
//   );
// };

// export default App;

const App = () => {

  const [userRole, setUserRole] = useState("admin")

  return ( 
    <Header userRole={ userRole} setUserRole={setUserRole} />
   );
}
 
export default App;