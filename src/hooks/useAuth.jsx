import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const useAuth = () => {
    const authUtil = useContext(AuthContext)
    return authUtil
};

export default useAuth;