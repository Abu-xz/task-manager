// components/modals/ConfirmDeleteModal.tsx
import { Trash } from "lucide-react";
import React from "react";

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  handleCloseModal: () => void;
  taskName: string;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  handleCloseModal,
  isOpen,
  onConfirm,
  taskName,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <div className=" flex gap-2 text-center mb-4 items-center">
          <h2 className="text-lg font-semibold">Confirm Deletion</h2>
          <Trash className="w-5 h-5 " />
        </div>
        <p className="mb-6">
          Are you sure you want to delete the task:{" "}
          <span className="font-bold text-black">{taskName}</span>?
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={handleCloseModal}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded bg-red-400 text-white hover:bg-red-500 cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
