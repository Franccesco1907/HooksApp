import { useEffect, useState } from "react"

export const Message = () => {

  const [coords, setCoords] = useState({x: 0, y: 0})

  useEffect(() => {
    const onMouseMove = ({x, y}) => {
      const coords = {x, y}
      console.log(coords)
      setCoords({x, y})
    }
    // console.log('Componente montado')
    // window.addEventListener('mousemove', (e) => {
    //   // console.log(e);
    //   console.log(':)') // Si esto fuera una solicitud http, se llamaría a cada rato y consumiría memoria de la app
    //   // Por eso tenemos que limpiar el listener
    // })

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      // console.log('Componente desmontado')
      // Cuando pasa esto, el componente se destruye del html
      // En este caso no importa si lo colocamos o no
      // Porque no hay un estado que se actualice o un listener
      // window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <>
      <h3>Usuario ya existe</h3>
      {/* <p>
        x: {coords.x} y: {coords.y}
      </p> */}
    </>
  )
}
