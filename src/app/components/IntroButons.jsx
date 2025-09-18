import React from 'react'
import { CgWebsite } from "react-icons/cg";

function IntroButons() {
  const sites = [
    { id: 1, url: "https://ald-1-1.vercel.app" },
    { id: 3, url: "https://ald-1-3.vercel.app" },
    { id: 4, url: "https://ald-1-4.vercel.app" },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold p-8 text-center">Acesso aos sites</h1>
      <div className="flex justify-center space-x-16 pb-8">
        {sites.map((site) => (
          <a
            key={site.id}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center btn btn-primary text-white px-4 py-2 rounded-lg"
          >
            <CgWebsite size={24} className="mr-2" />
            Site {site.id}
          </a>
        ))}
      </div>
    </>
  )
}

export default IntroButons
