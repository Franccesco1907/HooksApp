import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter(100)
  // Podemos configurar el valor inicial del contador,
  // el incremento y decremento del contador
  return (
    <>
      <div>Counter with Hook: {counter}</div>
      <hr />

      <button onClick={() => increment(2)} className="btn btn-primary">+2</button>
      <button onClick={reset} className="btn btn-primary">Reset</button>
      <button onClick={() => decrement(2)} className="btn btn-primary">-2</button>
    </>
  )
}
