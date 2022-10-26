import { TaskProps } from "..";
import { api } from "../../services/ApiConfig";

//GET
export async function getTasks(): Promise<TaskProps[]>{ 
    return api.get("/tasks");
}

//Post
export async function createTask(title: string){
    return api.post("/tasks",{
        title,
    });
}

//Delete
export async function deleteTask(id:number){
    return api.delete(`/tasks/${id}`);
}

//Update