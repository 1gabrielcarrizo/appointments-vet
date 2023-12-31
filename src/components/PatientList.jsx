import React from 'react'
import Patient from './Patient'

const PatientList = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className='md:w-1/2 lg:w-3/5'>
      {pacientes && pacientes.length ? (
        <>
          <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            Administra tus {''}
            <span className='text-blue-600 font-bold'>Pacientes y Citas</span>
          </p>
          <div className='md:h-screen overflow-y-scroll'>
            {pacientes.map((paciente) => (
              <Patient key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            Comienza agregando paciente {''}
            <span className='text-blue-600 font-bold'>y apareceran en este lugar</span>
          </p>
        </>
      )}

    </div>
  )
}

export default PatientList