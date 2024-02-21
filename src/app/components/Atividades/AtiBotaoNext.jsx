
import React from 'react'
import Link from 'next/link';
import Divider from '../Divider'

function AtiBotaoNext() {
  return (
    <>
        
        <div className="flex justify-center pt-8">
        
            <div className="p-4 ">
                <p className='text-gray-700 p-2 text-lg'>Vamos conhecer os conteúdos de Matemática a serem trabalhados nesta etapa?</p>
                <div className="flex justify-center py-4">
                  <Link href="/matematica">
                  <button className="btn btn-primary text-white">Matemática e Educação Financeira</button>
                  </Link>
                
                </div>
            </div>
        </div>
    </>
  )
}

export default AtiBotaoNext