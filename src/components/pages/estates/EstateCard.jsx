import { deleteDoc, doc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../../firebaseConfig";
import { useModal } from "../../../context/modal-context";
import ControlButtons from "./ControlButtons";
import { useAuth } from "../../../context/auth-context";

const EstateCard = ({ imageSrc, title, link, estateId, onDelete }) => {
  const { toggleVisibility } = useModal();
  const { userDoc } = useAuth();
  const [isCheckButtonDisplayed, setCheckButtonDisplay] = useState(false);

  // MODAL DELETE CONTENT
  const confirmDelete = () => {
    toggleVisibility(
      <div>
        <p className="text-center mb-[40px]">
          Czy na pewno chcesz usunąć tą ofertę?
        </p>

        <div className="flex justify-between">
          <button
            onClick={toggleVisibility}
            className="button-transparent rounded-lg px-5 py-2"
          >
            Anuluj
          </button>
          <button
            onClick={() => handleDelete(estateId)}
            className="button rounded-lg px-5 py-2"
          >
            Tak
          </button>
        </div>
      </div>
    );
  };

  // HANDLING POST DELETION
  const handleDelete = async (estateId) => {
    try {
      await deleteDoc(doc(db, "estates", estateId));
      toggleVisibility();

      // DELETE ESTATE IN EstatesPage.jsx
      onDelete(estateId);
    } catch (error) {
      console.error("Error trying to delete estate: ", error);
    }
  };

  return (
    <div
      className="max-w-[300px] rounded-lg hover:opacity-80 duration-300 border-2 border-[#695b21] flex flex-col relative"
      onMouseOver={() => {
        setCheckButtonDisplay(true);
      }}
      onMouseLeave={() => {
        setCheckButtonDisplay(false);
      }}
    >
      {/* CONTROL BUTTONS */}
      <ControlButtons
        confirmDelete={confirmDelete}
        estateId={estateId}
        userDoc={userDoc}
      />

      {/* IMAGE */}
      <img src={imageSrc} alt="Real Estate Image" className="rounded-lg m-2" />

      {/* TITLE */}
      <div className="text-center mb-2">{title}</div>

      {/* CHECK ESTATE ON DESLUX BUTTON */}
      {isCheckButtonDisplayed && (
        <div className="flex justify-center items-center absolute h-full w-full">
          <a
            href={link}
            className="button px-3 py-1 rounded-lg"
            target="_blank"
          >
            Sprawdź
          </a>
        </div>
      )}
    </div>
  );
};

export default EstateCard;
