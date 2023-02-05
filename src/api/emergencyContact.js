import { GetAllAPI } from "."

//dev
const path = "/emergencyContact"


export const EmegencyContactSelAll = async () => {

        const response = await GetAllAPI(path)
        return response
        
}