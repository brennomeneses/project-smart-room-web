import axios from "axios";
import { DataInterface } from '../@types';

interface ModelData {
    data:Array<DataInterface>
}

const baseURL = "https://esp32smarthome.herokuapp.com/";
// const token = localStorage.getItem("jwttoken");
const token = localStorage.getItem("token");
async function getHumiTemp() {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const { data } = await axios.get(baseURL, config) as ModelData;
    return data;
}

export default getHumiTemp;