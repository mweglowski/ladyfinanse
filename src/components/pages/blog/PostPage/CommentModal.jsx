import React, { useRef } from "react";

const CommentModal = ({ onHideModal, onAddComment }) => {
  const textareaRef = useRef();

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (textareaRef.current.value === "") return;

    onAddComment(textareaRef.current.value);
  };

  return (
    // MODAL CONTAINER BOX
    <div className="absolute z-50 bottom-0 left-0 w-full p-4 bg-white">
      {/* MODAL CONTENT */}
      <form
        onSubmit={submitFormHandler}
        className="flex flex-col mx-auto max-w-[600px] comment-modal-shadow p-6 rounded-lg animate-slide-up"
      >
        {/* TITLE */}
        <div className="text-center text-xl font-bold mb-[10px]">
          Nowy komentarz
        </div>

        {/* COMMENT TEXT */}
        <textarea
          ref={textareaRef}
          className="input mx-auto w-full min-h-[100px] max-h-[200px]"
          placeholder="Skomentuj..."
        />

        {/* CONTROL BUTTONS */}
        <div className="flex justify-between mt-[30px] w-full mx-auto">
          <button
            className="button-transparent rounded-lg"
            onClick={onHideModal}
          >
            Anuluj
          </button>

          <button
            type="submit"
            className="button rounded-lg"
          >
            Skomentuj
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentModal;
