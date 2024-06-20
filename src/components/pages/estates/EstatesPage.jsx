import React, { useEffect, useState } from "react";
import Section from "../../UI/Section";
import Title from "../../UI/Title";
import EstateCard from "./EstateCard";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { useAuth } from "../../../context/auth-context";
import { Link } from "react-router-dom";
import EstateCardList from "./EstateCardList";
import { useModal } from "../../../context/modal-context";

const EstatesPage = () => {
  const { userDoc } = useAuth();
  const [estates, setEstates] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCHING ESTATES FROM FIREBASE
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "estates"));

        const estatesData = querySnapshot.docs.map((estate) => ({
          id: estate.id,
          ...estate.data(),
        }));

        setEstates(estatesData);
        setLoading(false);
        console.log(estatesData);
      } catch (error) {
        console.error("Error fetching estates: ", error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteEstate = (esateId) => {
    setEstates(estates.filter((estate) => estate.id !== esateId));
  };

  return (
    <Section classNames="bg-[#1a1a1a] text-white p-4">
      {/* TITLE */}
      <div className="relative mx-auto">
        <Title classNames="text-shadow-white sm:text-[60px] mt-[100px]">
          Nieruchomości
        </Title>
      </div>

      {/* CREATE NEW ESTATE BUTTON */}
      {userDoc && userDoc.role === "admin" && (
        <Link
          to="/estates/new"
          className="button w-fit mx-auto px-5 py-2 rounded-lg mb-[50px]"
        >
          Dodaj Ogłoszenie
        </Link>
      )}

      {/* ESTATES */}
      {loading ? (
        <div className="animate-pulse text-xl text-center mx-auto">
          Jeszcze chwilę...
        </div>
      ) : estates.length === 0 ? (
        <div className="animate-pulse text-xl text-center mx-auto">
          Na tą chwilę mamy brak ogłoszeń.
        </div>
      ) : (
        <EstateCardList estates={estates} onDelete={handleDeleteEstate} />
      )}
    </Section>
  );
};

export default EstatesPage;
