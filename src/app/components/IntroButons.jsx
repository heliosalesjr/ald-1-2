import React from 'react'
import { CgWebsite } from "react-icons/cg";
function IntroButons() {
  return (
    <>
        <h1 className="text-3xl font-bold p-12 text-center text-slate-700">Acesso aos sites</h1>
        <div className="flex justify-center space-x-16 pb-8">
            {[1, 2, 3].map((siteNumber) => (
                <button
                key={siteNumber}
                className="flex items-center justify-center btn btn-primary text-white"
                >
                <CgWebsite size={24} className="mr-2" />
                Site {siteNumber}
                </button>
            ))}
        </div>


    </>
  )
}

export default IntroButons