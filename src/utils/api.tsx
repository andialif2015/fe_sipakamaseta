import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

function get_base_url(){
    if (process.env.NODE_ENV == 'production') {
      return process.env.API_URL_PROD;
    } else {
      return process.env.API_URL;
    }
}

export const postAPI = async (endpoint: string, data: any) => {
    try {
        let api = get_base_url() + endpoint;
        const resp = await axios.post(api, data);
        return resp;
    } catch (error) {
        throw error
    }
}