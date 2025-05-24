import { Edit, Trash } from 'lucide-react'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { openUpdateForm } from '../../features/tasks/taskSlice';
import TaskUpdateForm from '../TaskUpdateForm';
import type { Task } from '../../interfaces/Task';

interface OptionsModalProp {
  task: Task;
  updateDropDownStatus: () => void;
}

const OptionsModal: React.FC<OptionsModalProp> = ({task, updateDropDownStatus}) => {

  const isUpdateFormOpen = useAppSelector(state => state.tasks.isUpdateFormOpen);
  const dispatch = useAppDispatch();



  return (
    <div className='flex flex-col rounded bg-white border border-gray-200 shadow-md text-gray-800'>
        <div className='flex gap-2 items-center justify-between p-2 cursor-pointer'
        onClick={() => dispatch(openUpdateForm(!isUpdateFormOpen))}
        >
          <h1 className='font-medium text-md text-gray-500'>Edit</h1>
          <Edit className='w-4 h-4 '/>
        </div>
        <div className='flex gap-4 items-center bg-red-200 p-2 cursor-pointer'>
          <h1 className='font-medium text-md text-red-400'>Delete</h1>
          <Trash className='w-4 h-4 '/>
        </div>
        {isUpdateFormOpen && 
        <TaskUpdateForm task={task} updateDropDownStatus={updateDropDownStatus}/>
        }
    </div>
  )
}

export default OptionsModal