import React from 'react'

const Patient = () => {
    return (
        <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl mt-0'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
                <span className='font-normal normal-case'>Hook</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {''}
                <span className='font-normal normal-case'>Gabriel</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
                <span className='font-normal normal-case'>correo@gmail.com</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Alta: {''}
                <span className='font-normal normal-case'>10 de Diciembre de 2023</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {''}
                <span className='font-normal normal-case'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, perspiciatis mollitia? Mollitia consequuntur numquam commodi dicta recusandae quas sequi facilis ut dolorem neque laboriosam excepturi delectus alias nisi, culpa pariatur!</span>
            </p>
        </div>
    )
}

export default Patient