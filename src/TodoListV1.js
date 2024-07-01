import React, {useState} from 'react';
import './TodoListV1.css';

const TodoListV1 = () => {
    // const tasks = [
    //     {name: "Breakfast", id : "1"}, 
    //     {name: "Lunch", id : "2"},
    //     {name: "Dinner", id : "3"},
    //     {name: "Yoga", id : "4"},
    //     {name: "Exercise", id : "5"}
    //     ];

    const [editing, setEditing] = useState(false);
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([
        {name: "Breakfast", id : "1"}, 
        {name: "Lunch", id : "2"},
        {name: "Dinner", id : "3"},
        {name: "Yoga", id : "4"},
        {name: "Exercise", id : "5"}
        ]);
    const [currentTask, setCurrentTask] = useState({});

    const handleAddTask = () => {
        if(newTask.trim() !== ""){
            setTasks([...tasks,{name : newTask, id: tasks.length + 1}]);
            setNewTask('');
        }
    }

    const handleEdit = (task) => {
        setEditing(true);
        setCurrentTask(task);
        setNewTask(task.name);
    }

    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
        setEditing(false);
    }

    const handleUpdateTask = () => {
        setTasks(tasks.map((task) => task.id === currentTask.id ? {...task, name: newTask} : task));
        setEditing(false);
        setNewTask('');
    }

    return (
        <div className='todo-container'>
            To Do List
            <div className='input-container'> 
                <input 
                    type = "text"
                    value = {newTask}
                    placeholder='Enter the todo value'
                    onChange = {(e) => setNewTask(e.target.value)}
                />
                {editing ? 
                    <button onClick = {() => handleUpdateTask()}>Update task</button> :
                    <button onClick = {() => handleAddTask()}>Add task</button>}
            </div>
            <div>
            <ul className="task-list">
                {tasks.map ((task) => (
                    <li key = {task.id}>
                        {task.name}
                        <div className="task-buttons">
                            <button onClick = {() => handleEdit(task)}>Edit</button>
                            <button onClick = {() => handleDelete(task.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
            </div>
        </div>
       
    )
}

export default TodoListV1;