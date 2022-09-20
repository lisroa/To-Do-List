
import './styles/toDo.css';
import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';


function ToDoStructure (props) {

const [input, setInput] = useState('');


const handleShipping = (event) => {
    setInput(event.target.value);
}

const handleSubmit = (event) => {
    event.preventDefault();
    
    const addTask = {
        id: uuidv4(),
        text: input,
        completed: false
      }
      props.newTask(addTask);
     setInput('');
}

return ( 
       <>
        <form onSubmit={handleSubmit}>
            <input 
            id = 'taskValue'
            className='inputTask'
             type='text'
             placeholder='Add a new task'
             onChange={handleShipping}
            />
            <button className='buttonAdd'>Add</button>
           
        </form>
       
        </>
    );
}

export default ToDoStructure;