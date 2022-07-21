import axios from "axios";

async function authenticateIntoAPI(passwd: string, username: string) {
    if(passwd === process.env.REACT_APP_PASSWD_ADMIN && username === process.env.REACT_APP_USERNAME_ADMIN){
        const baseURL = "https://esp32smarthome.herokuapp.com/";
        const { data } = await axios({
            method: "post",
            url: `${baseURL}login`,
            data: {
                user: username
            }
        });
        console.log(data);
        localStorage.setItem("token", data);
        return(true);
    }else{
        return(false);
    }
    
}

export default authenticateIntoAPI;