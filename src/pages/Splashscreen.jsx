import React from 'react'
import bussinesMan from '../assets/bussines man.svg'
import { Link } from 'react-router-dom'

const Splashscreen = () => {
  return (
    <div
    className='bg-black p-2 min-h-screen'
    >
      <header>
        <h1 className='text-white text-left'>
          JobLink
          <span
          className='text-sm'
          >AI</span>
        </h1>
      </header>
      <section
      className='w-screen h-screen flex flex-col justify-center items-center gap-4'
      >
        <h1
        className='text-white text-4xl justify-center '
        >
          Conectanto Talentos 
        </h1>
        <img
          className='mt-4'
          src={bussinesMan} alt="tall man " />
        <button
          to="#"
        className='bg-blue-500 p-4 m-4 rounded-md hover:bg-blue-600'
        >
          <h2
          className='text-white text-xl'
          >
            empezar la aventura
          </h2>
        </button>

        <h2 className='text-white text-xl font-thin p-2 '>
          Conectando con empleos mediante IA
        </h2>
      </section>
    </div>
  )
}

export default Splashscreen