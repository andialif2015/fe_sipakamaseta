import axios from "axios";

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

export const getAPI = async(endpoint: string, params: any) => {
  try {
    
    let api = get_base_url() + endpoint;

    if(params){
      const querystring = Object.keys(params).map((key) => { `${key}=${params[key]}` }).join('&');
      api += `?${querystring}`;
    }

    const resp = await axios.get(api);
    return resp;
  } catch (error) {
    throw error
  }
}