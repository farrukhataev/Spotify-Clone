import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage.tsx";
import AuthCallbackPage from "./pages/auth-callback/AuthCallbackPage";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";

export default function App() {
   //token =>

  return (
   <>
     <Routes>
      <Route path='/sso-callback' 
          element={<AuthenticateWithRedirectCallback signUpForceRedirectUrl={"/auth-callback"}/>} />
       <Route path='/auth-callback' element={<AuthCallbackPage />} />
       <Route path='/' element={<HomePage />} />
     </Routes>
   </>
  )
}