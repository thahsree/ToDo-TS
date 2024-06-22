import { useEffect, useRef, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../model";
import './style.css';

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const SigleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {

    const [edit, setEdit] = useState<Boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)


    const handleIsDone = (id: Number) => {

        setTodos(todos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
    }

    const handleDelete = (id: Number) => {

        setTodos(todos.filter(todo => todo.id != id))
    }

    const handleEdit = (e : React.FormEvent,id:Number) => {

        e.preventDefault()
        setTodos(todos.map(todo => todo.id === id ? {...todo , todo:editTodo} : todo))
        setEdit(false)
    }

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(()=>{
        inputRef.current?.focus()
    },[edit])
    return (
        <form className="todos_single" onSubmit={(e)=> handleEdit(e,todo.id)}>
            {
                edit ? (
                    <input
                        ref={inputRef} 
                        value={editTodo}
                        onChange={(e)=> setEditTodo(e.target.value)}
                        className="todos_singleInput"
                    />
                ) : (

                    todo.isDone ? (
                        <s className="todos_singleText">
                            {todo.todo}
                        </s>
                    ) : (
                        <span className="todos_singleText">
                            {todo.todo}
                        </span>
                    )
                )
            }

            <div>

                <span className="icon" onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit)
                    }
                }
                }><AiFillEdit /></span>
                <span className="icon"><AiFillDelete onClick={() => handleDelete(todo.id)} /></span>
                <span className="icon" onClick={() => handleIsDone(todo.id)}><MdDone /></span>
            </div>
        </form>
    );
}

export default SigleTodo;