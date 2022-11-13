import { useContext } from "react"
import Formulario from "./Formulario"
import CotizadorContext from '../context/CotizadorProvider'

export default function AppSeguro() {
  return (
    <>
        <header className="my-10">
            <h1 className="text-white text-center text-4xl font-black">
                Cotizador de Seguro de Autos
            </h1>
        </header>

        <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
            <Formulario/>
        </main>
    </>
  )
}
