import axios from "axios"

export const GetOneAPI = async (path, uuid) => {

   const response = await axios.get(`http://localhost:4000${path}/${uuid}`)
   return response
}

export const GetAllAPI = async (path) => {

        const response = await axios.get(`http://localhost:4000${path}`)
        return response

 }