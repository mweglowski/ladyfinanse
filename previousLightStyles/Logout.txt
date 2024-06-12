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
    <Section classNames="animate-slide-down p-8">
      <div className="relative mx-auto">
        <img
          src={LogoutImage}
          alt="Blog Image"
          className="mt-[50px] max-w-[550px] w-full"
        />
        <Title classNames="absolute top-[60%] sm:left-[30%] text-shadow-white max-w-[350px] sm:text-[60px] text-[50px] md:top-[30%] md:left-[60%]">
          Czy na pewno chcesz się wylogować?
        </Title>
      </div>

      <form
        onSubmit={handleLogout}
        className="flex max-w-[400px] mx-auto w-full mb-[100px] justify-evenly"
      >
        <Link
          to="/"
          className="button-transparent rounded-lg px-4 py-2"
        >
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
