import { MARCA, PLAN, YEARS } from '../constants/index'
import { Fragment, useEffect } from 'react'
import { useCotizador } from '../hooks/useCotizador'
import Error from './Error'
import Cotizado from './Cotizado'

export default function Formulario() {
    const {
        datos, 
        handleChangeDatos, 
        setError, 
        error, 
        cotizarSeguro, 
        listo, 
        setListo
    } = useCotizador()
    
    function handleSubmit(e){
        e.preventDefault();

       if (Object.values(datos).includes('')) {
            setError('Todos los campos son obligatorios')

            setTimeout(() => {
                setError('')
            }, 3000);
            return
       }

       cotizarSeguro()
       setListo(true)
    }

  return (
    <>
        {error && <Error message={error}/>}
        <form onSubmit={handleSubmit}>
            <div className='my-5 text-center' >
                <label htmlFor="marca" className='block mb-3 font-bold text-gray-400 uppercase' >MARCA</label>
                <select name="marca" id="marca" onChange={ e => handleChangeDatos(e) } value={datos.marca}
                className='text-center w-full p-3 bg-white border border-gray-100 rounded-lg' >
                    <option value="">--SELECCIONA--</option>
                    {MARCA.map( marca => (
                        <option key={marca.id} value={marca.nombre}>{marca.nombre}</option>
                    ))}
                </select>
            </div>

            <div className='my-5 text-center' >
                <label htmlFor="year" className='block mb-3 font-bold text-gray-400 uppercase' >Año</label>
                <select name="year" id="year" onChange={ e => handleChangeDatos(e) } value={datos.year}
                className='text-center w-full p-3 bg-white border border-gray-100 rounded-lg'>
                    <option value="">--SELECCIONA--</option> 
                    {YEARS.map( year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
            </div>

            <div className='my-5 text-center'>
                    <label className='block mb-3 font-bold text-gray-400 uppercase'>ELige un plan</label>
                <div className='flex justify-between mx-36'>
                    {PLAN.map( plan => (
                        <div onChange={ e => handleChangeDatos(e) } key={plan.id}>
                            <label className='p-3'>{plan.nombre}</label>
                            <input type="radio" name='plan' value={plan.id}/>
                        </div>
                    ))}
                </div>
            </div>

            <input type="submit" value="Cotizar" className='w-full bg-cyan-500
            hover:bg-cyan-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold' />
        </form>

        {listo && <Cotizado/> }
    </>
  )
}