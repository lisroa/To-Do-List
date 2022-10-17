import { useState } from 'react';
import './App.css';
import ToDoStructure from './ToDoLogic.js';
import Task from './componentes/Tarea'


const date = new Date();
const todayText = date.toLocaleString('en', {weekday: 'long'});



function App() {

const [listOfTask, setListOfTask] = useState([]);


const newTask = (task) => {
  if (task.text.trim()) {
    task.text = task.text.trim();
    const tareasActualizadas = [task, ...listOfTask];
    setListOfTask(tareasActualizadas);
    console.log(tareasActualizadas)
}}

const deleteTask = (id) => {
  const updatedList = listOfTask.filter(task => task.id !== id); 
  setListOfTask(updatedList);
}

const completedTask = (id) => {
  const updatedList = listOfTask.map(task => { 
      if (task.id == id) {
        task.completed = !task.completed
          
      }
      return task;

  });

  setListOfTask(updatedList);
}

  return (
    <div className="App">
      <h2 className='tittle'>My tasks for today</h2>
      <h3> {todayText} </h3>
    <ToDoStructure
    newTask={newTask} />
    <div>
      {listOfTask.map((task) => {
        return ( <Task
        key={task.id}
        text= {task.text}
        id= {task.id}
        deleteTask={deleteTask}
        completedTask = {completedTask}
        completed= {task.completed}
        /> 

        )
      })}
    </div>
    </div>
  );
}

export default App;

