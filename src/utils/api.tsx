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
      
      // Check if there is a 'file' property in the data object
      if ("file" in data && data.file instanceof File) {
        // Use multipart/form-data if there is a file
        const formData = new FormData();
        for (const key in data) {
          formData.append(key, data[key]);
        }

        const resp = await axios.post(api, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        return resp;
      } else {
        // Use application/x-www-form-urlencoded by default
        const urlEncodedData = new URLSearchParams();

        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            urlEncodedData.append(key, data[key]);
          }
        }

        const resp = await axios.post(api, urlEncodedData, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        return resp;
      }
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