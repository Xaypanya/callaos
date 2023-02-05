import { useState } from "react"
import { useQuery } from "react-query"
import {FaPhoneAlt} from 'react-icons/fa'
import { EmegencyContactSelAll } from "../api/emergencyContact"
import ErrorMessage from "../components/ErrorMessage"
import LoadingSpinner from "../components/LoadingSpinner"

function Home() {

  const {isLoading, data: emergencyContacts, isError, error} = useQuery("emergency-contact",()=> EmegencyContactSelAll())
  

  return (
    <div className='bg-gray-900 p-10 min-h-screen'>
        
        Home
    </div>
  )
}

export default Home