import { useState } from "react"
import { useQuery } from "react-query"
import { RiPhoneFill, RiBuildingFill } from 'react-icons/ri'
import { FcPhone, FcPhoneAndroid, FcHome } from 'react-icons/fc'
import { EmegencyContactSelAll } from "../api/emergencyContact"
import ErrorMessage from "../components/ErrorMessage"
import LoadingSpinner from "../components/LoadingSpinner"

function HotlineContact() {

  const {isLoading, data: emergencyContacts, isError, error} = useQuery("emergency-contact",()=> EmegencyContactSelAll())
  

  return (
    <div className='bg-gray-900 p-10 min-h-screen'>
        <div className="grid md:grid-cols-2 gap-5  container mx-auto">
            {!isLoading &&
              emergencyContacts?.data?.map((contact, index)=>(
                <div key={index} className="flex justify-between rounded-lg bg-gray-800 overflow-hidden shadow ">
                      <div className="flex">
                        <div className="hidden md:flex justify-center items-center bg-gradient-to-br  from-purp-600 to-purp-900 w-20">
                          <h2 className="text-xl font-bold text-white">{index+1}</h2>
                        </div>
                        <div className="flex flex-col p-3">
                            <h2 className="text-white text-sm  mb-3 flex justify-start items-start gap-2"><FcHome className="text-lg"/> {contact?.name}</h2>
                            <h3 className="text-white text-sm flex justify-start items-center gap-2"><FcPhoneAndroid className="text-lg"/> {contact?.phoneNumber}</h3>
                        </div>
                      </div>
                      <a href={`tel:${contact?.phoneNumber}`} className="flex items-center justify-center px-5 bg-gray-700 hover:opacity-80 active:opacity-50 cursor-pointer">
                          <FcPhone className="text-xl"/>
                      </a>
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

export default HotlineContact