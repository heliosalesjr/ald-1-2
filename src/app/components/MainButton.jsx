import React from 'react'
import Link from 'next/link';

function MainButton() {
  return (
    <>
        <div className="flex items-center justify-center pt-8">
       
            <p className="p-6 text-center text-gray-700 text-lg">
            Vamos nos aprofundar sobre o planejamento do professor e o planejamento do estudante na próxima seção.</p>

            
        </div>
        <div className='flex items-center justify-center pb-8'>
            <Link href="/atividades">
            <button className='btn btn-primary text-white'>Atividades do projeto</button>
            </Link>
        </div>
    
    </>
  )
}

export default MainButton