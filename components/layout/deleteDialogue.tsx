import { useState } from "react";
import RoundedPinkButton from "../ui/rounded-pink-button";

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
          <div className="bg-white p-8 rounded-lg w-96 mx-56 relative text-center shadow-md">
            <h3>Are you sure?</h3>
            <p className="py-6">This entry will be permanently deleted</p>
            <div className="flex justify-around">
              <RoundedPinkButton onClick={onConfirm} title="YES" />
              <RoundedPinkButton onClick={onClose} title="NO" />
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default DeleteDialogue;
