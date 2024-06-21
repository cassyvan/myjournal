import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { useJournalContext } from "@/context/entryContext";
import { useAuthContext } from "@/context/AuthContext";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";
import { useEntriesContext } from "@/context/entriesContext";
import { Entry } from "@/utils/types/entrytype";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  { ssr: false }
);

const Modal = () => {
  const { selectedEntry, updateEntry } = useJournalContext();

  const entryBody = selectedEntry.content;

  const [checkButton, setCheckButton] = useState(false);
  const [editorState, setEditorState] = useState(() => {
    if (entryBody) {
      return EditorState.createWithContent(
        convertFromRaw(JSON.parse(entryBody))
      );
    }
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();
  const { user } = useAuthContext();
  const { entriesData, updateEntriesData } = useEntriesContext();
  const userId = user?.uid;

  const onEditorStateChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
    setCheckButton(!!newEditorState);
  };

  useEffect(() => {
    if (entryBody) {
      setEditorState(
        EditorState.createWithContent(convertFromRaw(JSON.parse(entryBody)))
      );
    } else {
      setEditorState(EditorState.createEmpty());
    }
  }, [selectedEntry]);

  const onSubmit = async () => {
    const editorContent = editorState?.getCurrentContent();
    const content = editorContent
      ? JSON.stringify(convertToRaw(editorContent))
      : "";

    const body = editorContent?.getPlainText();
    const updatedEntry: Entry = {
      body: body,
      content: content,
      created: selectedEntry.created,
      id: selectedEntry.id,
    };
    try {
      if (selectedEntry.id) {
        await axios.put(`/api/journal/${selectedEntry.id}`, {
          body,
          content,
          userId,
        });
        updateEntry(updatedEntry);
      } else {
        await axios
          .post("/api/journal", {
            body,
            content,
            userId,
          })
          .then((response) => {
            const data = response.config.data;
            const newEntry = {
              body,
              content: content,
              created: new Date().toISOString(),
              id: data.id,
            };
            updateEntriesData([...entriesData, newEntry]);
          });
      }
      closeModal();
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

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
            <Editor
              editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={onEditorStateChange}
              editorStyle={{
                height: 700,
                padding: 2,
              }}
            />
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
