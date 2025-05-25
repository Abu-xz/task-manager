import { Edit, Trash } from "lucide-react";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { openUpdateForm, removeTask } from "../../features/tasks/taskSlice";
import TaskUpdateForm from "../TaskUpdateForm";
import type { Task } from "../../interfaces/Task";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import axios from "axios";
import { toast } from "react-toastify";

interface OptionsModalProp {
  task: Task;
  updateDropDownStatus: () => void;
}

const OptionsModal: React.FC<OptionsModalProp> = ({
  task,
  updateDropDownStatus,
}) => {
  const isUpdateFormOpen = useAppSelector(
    (state) => state.tasks.isUpdateFormOpen
  );
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirmModal = () => setIsOpen(!isOpen);

  const confirmDelete = async () => {
    try {
      const res = await axios.delete(`/api/task/${task._id}`);
      console.log(res.data)
      dispatch(removeTask(task._id));
      toast.success(res.data?.message || 'Task removed successfully!');
    } catch (error) {
      console.log(error)
    }finally{
      handleConfirmModal();
    }
  };

  return (
    <div className="flex flex-col rounded bg-white border border-gray-200 shadow-md text-gray-800">
      <div
        className="flex gap-2 items-center justify-between p-2 cursor-pointer"
        onClick={() => dispatch(openUpdateForm(!isUpdateFormOpen))}
      >
        <h1 className="font-medium text-md text-gray-500">Edit</h1>
        <Edit className="w-4 h-4 " />
      </div>
      <div
        className="flex gap-4 items-center bg-red-200 p-2 cursor-pointer"
        onClick={handleConfirmModal}
      >
        <h1 className="font-medium text-md text-red-400">Delete</h1>
        <Trash className="w-4 h-4 " />
      </div>

      <ConfirmDeleteModal
        isOpen={isOpen}
        handleCloseModal={handleConfirmModal}
        onConfirm={confirmDelete}
        taskName={task.title}
      />

      {isUpdateFormOpen && (
        <TaskUpdateForm
          task={task}
          updateDropDownStatus={updateDropDownStatus}
        />
      )}
    </div>
  );
};

export default OptionsModal;
