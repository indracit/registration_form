import useAuth from "./hooks/useAuth"
import { useAuthType } from "./hooks/useAuth"
const Home = () => {

    const {auth}  = useAuth() as useAuthType

    const check= () =>{
        console.log(auth);
        
    }
    return (
    <><div onClick={()=> check()}>Home</div></>
    )
}

export default Home