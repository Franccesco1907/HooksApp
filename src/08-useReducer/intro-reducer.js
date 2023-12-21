const initialState = [
  {
    id: 1,
    todo: 'Recolección de información',
    done: false,
  },
]

const todoReducer = (state = initialState, action = {}) => {
  if (action?.type === '[TODO] add todo') {
    return [...state, action.payload]
  }

  return state
}

// todos.push({
//   id: 2,
//   todo: 'Recolección de información 2',
//   done: false,
// })

// Hacer un push no es recomendable, pues 
// se modifica el estado inicial
// A su vez no se dispara el renderizado
// de la aplicación porque React no se da
// cuenta que el estado cambió
// Debemos evitar mutar arreglos, objetos, etc

let todos = todoReducer()

const newTodo = {
  id: 2,
  todo: 'Recolección de información 2',
  done: false,
}

todos = todoReducer(todos, {
  type: '[TODO] add todo',
  payload: newTodo,
})

console.log(todos)