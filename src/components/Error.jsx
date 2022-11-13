
export default function Error({message}) {
  return (
    <div className='text-center bg-red-500 p-2 rounded-lg text-white font-bold'>
        <h1>{message}</h1>
    </div>
  )
}
