import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <main className='flex flex-col items-center justify-center h-screen'>
        
        <h2 className='text-3xl font-bold text-primary'>Página não encontrada</h2>
        <p className='font-medium text-large py-4'>Não encontramos a página solicitada em nossos servidores.</p>
        <p>Volte para a <Link href="/" className='underline text-primary-focus'>página inicial</Link></p>
    </main>
  )
}

export default NotFound