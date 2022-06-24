import {  Navigate } from "react-router-dom";
import { MediaContextProvider } from "../../MediaContext";


export default function ProtectedRoute({ children }) {

return  localStorage.getItem("userToken")? <MediaContextProvider>{children}</MediaContextProvider> : <Navigate replace to='/login'/>;
}
