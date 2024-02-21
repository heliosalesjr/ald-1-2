'use client'

import { Divider } from '@nextui-org/react'
import MatButton from '../components/Matematica/MatButton'

import MatHero from '../components/Matematica/MatHero'
import MatVideoPorcentagem from '../components/Matematica/MatVideoPorcentagem'
import MatVideos from '../components/Matematica/MatVideos'
import MatVideosPizza from '../components/Matematica/MatVideosPizza'
import MatPolinomios from '../components/Matematica/MatPolinomios'




function Matematica() {
  return (
    <>
        
        <MatHero />
        <MatVideos />
        <Divider className='max-w-5xl mx-auto'/>
        <MatVideoPorcentagem  />
        <MatVideosPizza />
        <MatPolinomios />
        <Divider className='max-w-5xl mx-auto'/>
        <MatButton />
        
    
    </>
    
  )
}

export default Matematica