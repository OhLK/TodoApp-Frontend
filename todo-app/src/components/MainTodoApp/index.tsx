import { useEffect,useState } from "react";
import { Task, TaskProps } from '../task'
import { createTask, deleteTask, getTasks } from "../task/taskService/task.service";

 
export function MainTodoApp(){
    const [tasks, setTasks] = useState<TaskProps[]>([]);
    const [newTask, setNewTask] = useState<string>('');
    useEffect(() => {
       getTasks().then((resposta: any) =>{
        setTasks(resposta.data);
        });
    }, []);

    async function createNewTask(){
        await createTask(newTask);
        getTasks().then((resposta: any) =>{
            setTasks(resposta.data);
        });
        setNewTask("");
    }

    const removeTask = async (id:number) => {
        await deleteTask( id );
        getTasks().then((resposta: any) =>{
            setTasks(resposta.data);
        });
    }

    return(
        <div className="flex h-screen bg-gray-800 justify-center items-center">
            <div className="bg-slate-900 p-20 md:w-8/12 lg:w-6/12 w-10/12 rounded-xl text-neutral-50">
                <div className="font-display text-4xl font-bold text-center">
                    TodoApp
                    </div>
                        <div className="flex max-h-96 overflow-y-auto justify-center flex-col text-lg">
                        { tasks.length > 0 && 
                        tasks.map((task,key) => {
                            return (
                            <Task 
                            key={key} 
                            title = {task.title}
                            handleDelete = {() => {
                            removeTask(Number(task.id));
                            }} 
                            />
                            );
                        })}
                    </div>
                    <div className="w-full text-center">
                        <input 
                            value={newTask} 
                            className="p-3 mx-2 border-2 border-slate-400 rounded-lg text-black" 
                            onChange={evento => setNewTask(evento.target.value)}>
                        </input>
                            <button onClick={createNewTask} 
                            className="bg-slate-700 hover:bg-slate-200 hover:text-slate900 mt-5 w-56 p-3 rounded-lg">Criar Task</button>
                    </div>
                </div>
            <div> 
        </div>
    </div>
)}

