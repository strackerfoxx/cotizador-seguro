import { useCotizador } from "../hooks/useCotizador"

export default function Cotizado() {
    const { total, datos } = useCotizador()

  return (
    <div className="text-center text-xl p-5 mt-3">
        <h1>Resumen</h1>
        <p><span className="font- text" >marca: </span>{datos.marca}</p>
        <p><span className="font-bold text" >año: </span>{datos.year}</p>
        <p><span className="font-bold text" >plan: </span>{datos.plan}</p>
        <p><span className="font-bold" >Total de la cotizacion: </span>{total}</p>
    </div>
  )
}
