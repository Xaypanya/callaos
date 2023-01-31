import { GetAllAPI } from "."

const path = "/emergencyContact1"

export const EmegencyContactSelAll = async () => {

        const response = await GetAllAPI(path)
        return response
        
}