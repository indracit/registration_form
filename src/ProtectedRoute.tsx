import useAuth from "./hooks/useAuth"
import { useAuthType } from "./hooks/useAuth"
import { Outlet } from "react-router-dom"
const ProtectedRoute = () => {
    const {auth} = useAuth() as useAuthType

    return (
    <div>{auth.UserInfo.roles[0]=='Employee' ? <Outlet/> : 'Un Authorized' }</div>
    )
}

export default ProtectedRoute