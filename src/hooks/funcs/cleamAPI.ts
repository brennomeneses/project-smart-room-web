import axios from "axios";
import { DataInterface } from '../@types';

interface ModelData {
    data:Array<DataInterface>
}

const baseURL = "https://esp32smarthome.herokuapp.com/";
const token = localStorage.getItem("token");
async function cleamAPI() {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const { data } = await axios.delete(baseURL, config) as ModelData;
    return data;
}

export default cleamAPI;