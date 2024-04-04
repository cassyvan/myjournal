import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import axios from "axios";
import { JournalContext } from "@/context/entryContext";
import { useAuthContext } from "@/context/AuthContext";

const Modal = () => {
  const [checkButton, setCheckButton] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();
  const { user } = useAuthContext();
  const userId = user?.uid;

  const newContent = {
    title: "",
    body: "",
  };
  const [formData, setFormData] = useState(newContent);

  const { selectedEntry } = useContext(JournalContext);

  const entryBody = selectedEntry?.body;

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setCheckButton(!!value);
  };
  const onSubmit = async () => {
    const { body } = formData;
    const title = body.substring(0, 20);
    if (selectedEntry.id) {
      await axios.put(`/api/journal/${selectedEntry.id}`, {
        title,
        body,
        userId,
      });
    } else {
      await axios.post("/api/journal", {
        title,
        body,
        userId,
      });
    }
    closeModal();
  };

  console.log();

  const closeModal = () => {
    router.push(pathname);
  };

  return (
    <>
      {modal && (
        <dialog className="fixed left-0 top-0 w-full h-full bg-white bg-opacity-80 z-50 overflow-auto backdrop-blur flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg w-screen mx-56 relative sm:mx-8 md:mx-12">
            <button
              className="shadow-lg rounded-full text-gray-900 p-2 absolute right-0 mr-4 -m-4"
              onClick={closeModal}
            >
              <FontAwesomeIcon icon={faXmark} className="text-gray-500 px-2" />
            </button>
            <div className="flex flex-col items-center">
              <br />
              <textarea
                autoFocus
                rows={32}
                className="focus:outline-none placeholder:text-2xl !resize-none min-w-full bg-transparent"
                placeholder="What's on your mind today?"
                name="body"
                onChange={onChange}
                defaultValue={entryBody}
              ></textarea>
            </div>
            {checkButton && (
              <div className="flex justify-center">
                <button
                  onClick={onSubmit}
                  className="text-white bg-pink-400 py-3 px-4 rounded-full shadow-lg hover:bg-pink-100 hover:text-pink-300 text-center"
                >
                  <FontAwesomeIcon icon={faCheck} className="fa-2x" />
                </button>
              </div>
            )}
          </div>
        </dialog>
      )}
    </>
  );
};

export default Modal;
