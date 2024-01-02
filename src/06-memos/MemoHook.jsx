import { useMemo, useState } from "react"
import { useCounter } from "../hooks"

const heavyProcess = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('Here we go...')
  }

  return `${iterationNumber} iterations done`
}

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000)
  const [show, setShow] = useState(true)

  const memorizedValue = useMemo(() => {
    return heavyProcess(counter)
  }, [counter])

  return (
    <>
      <h1>Counter: <small>{counter}</small> </h1>
      <hr />

      {/* <h4>{heavyProcess(5000)}</h4> */}
      {/* <h4>{heavyProcess(counter)}</h4> */}
      <h4>{memorizedValue}</h4>

      <button
        onClick={() => increment(1)}
        className="btn btn-primary"
      >
        +1
      </button>

      <button
        className="btn btn-outline-primary ms-3"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  )
}
