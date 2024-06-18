import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { addDoc, updateDoc, doc, getDoc, collection } from "firebase/firestore";
import Section from "../../UI/Section";
import Title from "../../UI/Title";
import RemoveIcon from "../../../icons/remove.svg";

const ManageEstatePage = ({ estateId }) => {
  const [estateTitle, setEstateTitle] = useState("");
  const [estateLink, setEstateLink] = useState("");
  const [estateImage, setEstateImage] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (estateId || id) {
      const fetchEstate = async () => {
        const estateDoc = await getDoc(doc(db, "estates", estateId || id));
        if (estateDoc.exists()) {
          const estateData = estateDoc.data();
          setEstateTitle(estateData.title);
          setEstateLink(estateData.link);
          setEstateImage(estateData.image);
        }
      };
      fetchEstate();
    }
  }, [estateId, id]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEstateImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const estateData = {
        title: estateTitle,
        link: estateLink,
        image: estateImage,
        createdAt: new Date(),
      };

      if (estateId || id) {
        await updateDoc(doc(db, "estates", estateId || id), estateData);
      } else {
        await addDoc(collection(db, "estates"), estateData);
      }

      navigate("/estates");
    } catch (error) {
      console.error("Error adding/updating document: ", error);
    }
  };

  return (
    <Section classNames="text-white bg-[#1a1a1a]">
      <Title classNames="text-shadow-white max-w-[500px] text-[42px] sm:text-[54px] mt-[150px]">
        {estateId || id ? "Edytuj Nieruchomość" : "Dodaj Nową Nieruchomość"}
      </Title>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mt-[70px] p-4 max-w-[700px] mx-auto w-full mb-[100px] relative gap-4"
      >
        <input
          type="text"
          value={estateTitle}
          onChange={(e) => setEstateTitle(e.target.value)}
          placeholder="Tytuł"
          className="input"
          required
        />
        <input
          type="text"
          value={estateLink}
          onChange={(e) => setEstateLink(e.target.value)}
          placeholder="Link"
          className="input"
          required
        />
        <input
          type="file"
          onChange={handleImageUpload}
          className="input mt-4"
          accept="image/*"
        />
        {estateImage && (
          <img
            src={estateImage}
            alt="Estate"
            className="max-w-full h-auto mt-4"
          />
        )}
        <div className="flex mt-[50px] justify-evenly">
          <Link to="/estates" className="button-transparent rounded-lg px-4 py-2">
            Powrót
          </Link>
          <button type="submit" className="button rounded-lg px-4 py-2">
            {estateId || id ? "Zaktualizuj Nieruchomość" : "Dodaj Nieruchomość"}
          </button>
        </div>
      </form>
    </Section>
  );
};

export default ManageEstatePage;
