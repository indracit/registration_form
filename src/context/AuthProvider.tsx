import { createContext, useState } from "react";
import { resp } from "../Login";
const AuthContext = createContext({});

type props = {
    children : React.ReactNode
}


export const AuthProvider = ({ children } : props) => {
    const [auth, setAuth] = useState<resp | null>(null);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;