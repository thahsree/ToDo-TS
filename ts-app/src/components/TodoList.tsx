import { Todo } from '../model';
import SigleTodo from './SigleTodo';
import './style.css';
interface Props{

    todos:Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}


const TodoList : React.FC<Props> =({todos,setTodos}) =>{
    return (
        <div className='todos'>
            {todos.map((todo)=>(
                <SigleTodo 
                    key={todo.id}
                    todo={todo} 
                    setTodos={setTodos} 
                    todos={todos}/>
            ))}
        </div>
    );
}

export default TodoList;