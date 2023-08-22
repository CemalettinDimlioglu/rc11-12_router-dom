import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Login from "./Login";

console.log(Login);

const PrivateRouter = () => {
  const isSigned = false;

//   return (
//   <div>
//   {isSigned ? <Outlet /> : <Login />}


//   </div>
//   )
  

return ( <div> {isSigned ? <Outlet/> : <Navigate to= "/login"/>}  </div>)
};

export default PrivateRouter;
