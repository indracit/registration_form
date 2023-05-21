import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { resp } from "../Login";

export type useAuthType = {
    auth : resp,
    setAuth : React.Dispatch<React.SetStateAction<resp | null>>
}
const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;