import {MdOutlineDoneOutline} from "react-icons/md"
import {FaRegEdit} from "react-icons/fa"
import {FaRegTrashAlt} from "react-icons/fa"

export type TaskProps = {
  id?: number;
  title: string;
  handleDelete?: ()=> void;
}

export function Task({ title, handleDelete}: TaskProps){
    return(
        <div className="tasks flex justify-center flex-col mt-5 text-lg">
        <div className="flex bg-gray-800 justify-between p-4 rounded-lg items-center">
          <div> {title} </div>
            <div className="acoes">
              <button className='bg-slate-700 mx-1 p-2 rounded hover:bg-green-500'>
                <FaRegEdit/>
              </button>
              <button onClick={handleDelete} className='bg-slate-700 mx-1 p-2 rounded hover:bg-red-500'>
                <FaRegTrashAlt/>
              </button>
              <button className='bg-slate-700 mx-1 p-2 rounded hover:bg-green-500'>
                <MdOutlineDoneOutline/>
        </button>
      </div>
    </div>
  </div>
)   
}