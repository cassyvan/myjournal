import { useState } from "react";

interface props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteDialogue = ({ isOpen, onClose, onConfirm }: props) => {
  return (
    <>
      {isOpen && (
        <dialog className="fixed left-0 top-0 w-full h-full bg-white bg-opacity-40 z-50 overflow-auto backdrop-blur flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg w-screen mx-56 relative">
            <h2>DELETE?</h2>
            <button
              className="shadow-lg rounded-full text-gray-900 p-2 absolute right-0 mr-4 -m-4"
              onClick={onClose}
            >
              NO
            </button>
            <button onClick={onConfirm}>YES</button>
          </div>
        </dialog>
      )}
    </>
  );
};

export default DeleteDialogue;
