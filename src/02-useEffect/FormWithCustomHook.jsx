import { useEffect, useState } from "react"
import { Message } from "./Message"
import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {
  // const [formState, setFormState] = useState({
  //   username: 'Example',
  //   email: 'example@gmail.com',
  //   password: '',
  // })

  // const { username, email, password } = formState
  // const onInputChange = ({ target }) => {
  //   // console.log(target)
  //   const { name, value } = target
  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   })
  // }

  const { formState, onInputChange, onResetForm, username, email, password } = useForm({
    username: '',
    email: '',
    password: '',
  })

  // const { username, email, password } = formState

  // useEffect(() => {
  //   console.log('Hey!')
  // }, [])

  // useEffect(() => {
  //   console.log('formState!')
  // }, [formState])

  // useEffect(() => {
  //   console.log('email!')
  // }, [email])

  return (
    <>
      <h1>Formulario Con Custom Hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="example@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      {(username === 'strider2') && <Message />}

      <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>
    </>
  )
}
