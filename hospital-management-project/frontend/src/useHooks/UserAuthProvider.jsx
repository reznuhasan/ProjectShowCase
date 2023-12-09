import { createContext, useState } from "react";

export const authProvider=createContext();

const UserAuthProvider=({children})=>{
    const [userAuth,setUserAuth]=useState("");
    return <authProvider.Provider value={{userAuth,setUserAuth}}>
        {children}
    </authProvider.Provider>
}

export default UserAuthProvider;