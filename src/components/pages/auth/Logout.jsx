import React, { useRef, useState } from "react";
import { useAuth } from "../../../context/auth-context";
import { Link, useNavigate } from "react-router-dom";
import Title from "../../UI/Title";
import Section from "../../UI/Section";
import LogoutImage from "../../../images/logout.png";

export default function Logout() {
  const { logout } = useAuth();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleLogout(e) {
    e.preventDefault();

    setLoading(true);
    await logout();
    navigate("/");

    setLoading(false);
  }

  return (
    <Section classNames="h-screen text-white bg-[#1a1a1a]">
      <Title classNames="text-shadow-white max-w-[650px] sm:text-[60px] text-[50px] mt-[150px]">
        Czy na pewno chcesz się wylogować?
      </Title>

      <form
        onSubmit={handleLogout}
        className="flex max-w-[400px] mx-auto w-full mb-[100px] justify-evenly mt-[70px]"
      >
        <Link to="/" className="button-transparent rounded-lg px-4 py-2">
          Powrót
        </Link>

        <button
          disabled={loading}
          type="submit"
          className="button rounded-lg px-7 py-2"
        >
          Tak
        </button>
      </form>
    </Section>
  );
}
