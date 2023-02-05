import axios from "axios"

//dev
const server = "http://127.0.0.1:4000"
//production
// const server = "http://192.168.100.9:4000"

export const GetOneAPI = async (path, uuid) => {

   const response = await axios.get(`${server}${path}/${uuid}`)
   return response
}

export const GetAllAPI = async (path) => {

        const response = await axios.get(`${server}${path}`)
        return response

 }