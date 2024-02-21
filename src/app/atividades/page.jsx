'use client'

import AtiBotaoNext from '../components/Atividades/AtiBotaoNext'
import AtiEtapas from '../components/Atividades/AtiEtapas'


import AtivHero from '../components/Atividades/AtivHero'

import AtiSugestao from '../components/Atividades/AtiSugestao'
import { Divider } from '@nextui-org/react'

import Teste from '../components/Atividades/Teste'
import AtiPlanoPDA from '../components/Atividades/AtiPlanoPDA'
import AtiPDAAcordion from '../components/Atividades/AtiPDAAcordion'
import AtiProjColetivo from '../components/Atividades/AtiProjColetivo'
import AtiProximos from '../components/Atividades/AtiProximos'
import AtiVejaProfs from '../components/Atividades/AtiVejaProfs'
function Atividades() {
  return (
    <>
        
        <AtivHero />
        <AtiEtapas />
        <Teste />
        <AtiPlanoPDA />
        <AtiPDAAcordion />
        <Divider className='max-w-5xl mx-auto'/>
        <AtiProjColetivo />
        <AtiSugestao />
        <AtiProximos />
        <AtiVejaProfs />
        <AtiBotaoNext />
        
        
    </>
    
  )
}

export default Atividades