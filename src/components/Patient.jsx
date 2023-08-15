import React from 'react'
import Swal from 'sweetalert2'

const Patient = ({ paciente, setPaciente, eliminarPaciente }) => {
    const { nombre, propietario, email, fecha, sintomas, id } = paciente

    const handleEliminar = () => {
        Swal.fire({
            title: `Estas seguro de que deseas eliminar al paciente "${nombre}"?`,
            text: "No hay vuelta atras!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DC2626',
            cancelButtonColor: '#6E7881',
            confirmButtonText: 'Si, eliminado!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Eliminado!',
                    `El paciente "${nombre}" ha sido eliminado`,
                    'success'
                )
                eliminarPaciente(id)
            }
        })
    }

    return (
        <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl mt-0'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
                <span className='font-normal normal-case'>{nombre}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {''}
                <span className='font-normal normal-case'>{propietario}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
                <span className='font-normal normal-case'>{email}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Alta: {''}
                <span className='font-normal normal-case'>{fecha}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {''}
                <span className='font-normal normal-case'>{sintomas}</span>
            </p>

            <div className='flex flex-col sm:flex-row justify-between mt-10'>
                <button type='button' className='py-2 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase rounded-lg' onClick={() => setPaciente(paciente)}>Editar</button>
                <button type='button' className='py-2 px-6 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg mt-2 sm:mt-0' onClick={handleEliminar}>Eliminar</button>
            </div>
        </div>
    )
}

export default Patient