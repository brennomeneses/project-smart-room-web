import { Navigate } from "react-router-dom";

function isAuthenticated() {
    const token = localStorage.getItem("token");
    console.log(token);
    if(token === null){
        return(false);
    }
    return(true);
}

const PrivateRoute = ({children}: any) => {
    return(isAuthenticated() ? children : <Navigate to="/" />);
}

export default PrivateRoute;