import '../styles/toDo.css';
import { AiFillDelete} from "react-icons/ai";

function Task ({id,text,deleteTask, completed, completedTask}) { 
    return ( 
        <div className='container'>
        <div className= {completed ? 'task done' : 'task'} onClick={() => {completedTask(id)}}>
        <div className='task.value' >
           {text}
          
          </div>
         
        </div>
        <button className='buttonDelete' onClick={() => { deleteTask(id); }}> 
        <AiFillDelete />
     </button>
    </div> 
    
    );
}
       

  
 


export default Task;