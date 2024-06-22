import { useState } from "react"
import Inputfield from "./components/Inputfield"
import TodoList from "./components/TodoList"
import "./index.css"
import { Todo } from "./model"

const App : React.FC = () =>{

  const [todo , setTodo ] = useState<string>("")

  const [todos , setTodos] = useState<Todo[]>([])


  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault()
   
    if(todo){

      setTodos([...todos,{id:Date.now() , todo , isDone:false}])
      setTodo("")
    }
  }

  

  return (
    <div className="App">
      
      <span className="heading">TASKIFY</span>

      <Inputfield todo={todo} setTodo={setTodo} handleAdd={handleAdd}/> 
        <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
