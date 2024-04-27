import React,{useState} from 'react'
function ToDoList(){
    const [tasks, setTasks] = useState(["Brush","Read","Breakfast"]);
    const [newTask, setNewTask] = useState("");

    const taskChangeHandler = (event) =>{
        setNewTask(event.target.value);
    }

    const AddTask = () =>{
        if(newTask.trim() !== ""){
        setTasks((t)=>[...t,newTask]);
        setNewTask("");
        }
    }

    const removeTask = (index) =>{
        const updatedList = tasks.filter((_,i)=> i !== index)
        setTasks(updatedList);
    }

    const taskMoveUp = (index) =>{
        const updatedList = [...tasks];
        if(index>0){
        [updatedList[index],updatedList[index-1]]=[updatedList[index-1],updatedList[index]];
        setTasks(updatedList);
        }
    }

    const taskMoveDown = (index) =>{
        const updatedList = [...tasks];
        if(index < tasks.length-1){
        [updatedList[index],updatedList[index+1]]=[updatedList[index+1],updatedList[index]];
        setTasks(updatedList);
        }
    }
    return(
        <div className='to-do-list'>
            <h2>To Do List</h2>
        <input type="text" placeholder='Enter a task' value={newTask} onChange={(e)=>taskChangeHandler(e)}/>
        <button className='add-button' onClick={AddTask}>Add</button>
            <ol>
                {tasks.map((element,index)=><li key={index}>
                    
                    <span className='text'>{element}</span>
                    <button className='delete-button' onClick={()=>removeTask(index)}>Delete</button>
                    <button className='move-button' onClick={()=>taskMoveUp(index)}>⬆️</button>
                    <button className='move-button' onClick={()=>taskMoveDown(index)}>⬇️</button>
                    </li>)}
                </ol>
        </div>
    );
}
export default ToDoList