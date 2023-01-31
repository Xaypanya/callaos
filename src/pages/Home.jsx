import { useState } from "react"
import { useQuery } from "react-query"
import { EmegencyContactSelAll } from "../api/emergencyContact"
import ErrorMessage from "../components/ErrorMessage"
import LoadingSpinner from "../components/LoadingSpinner"

function Home() {

  const {isLoading, data: emergencyContacts, isError, error} = useQuery("emergency-contact",()=> EmegencyContactSelAll())
  

  return (
    <div className='bg-gray-900 p-10 min-h-screen'>
        <div className="grid grid-cols-2 gap-5">
            {!isLoading &&
              emergencyContacts?.data?.map((contact, index)=>(
                <div key={index} className="flex rounded-lg bg-gray-800 overflow-hidden shadow ">
                      <div className="flex justify-center items-center bg-gradient-to-br  from-purp-600 to-purp-900 w-20">
                        <h2 className="text-2xl font-bold text-white">{index+1}</h2>
                      </div>
                      <div className="flex flex-col p-5">
                          <h2 className="text-white text-lg border-b mb-5">{contact?.name}</h2>
                          <h3 className="text-white">{contact?.phoneNumber}</h3>
                      </div>
                </div>
              ))
            }
        </div>
        {
            isLoading && <LoadingSpinner/>
        }
        {
            isError && <ErrorMessage error={error}/>
        }
    </div>
  )
}

export default Home