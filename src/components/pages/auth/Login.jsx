import React, { useRef, useState } from "react";
import { useAuth } from "../../../context/auth-context";
import { Link, useNavigate } from "react-router-dom";
import Title from "../../UI/Title";
import Section from "../../UI/Section";
import AuthImage from "../../../images/auth.png";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Nie udało się zalogować. Sprawdź email i hasło jeszcze raz.");
    }

    setLoading(false);
  }

  return (
    <Section classNames="animate-slide-down p-8">
      <div className="relative mx-auto">
        <img
          src={AuthImage}
          alt="Blog Image"
          className="mt-[50px] max-w-[700px] w-full"
        />
        <Title classNames="absolute top-[50%] left-[30%] text-shadow-white max-w-[350px] sm:text-[70px] text-[50px]">
          Zaloguj się
        </Title>
      </div>

      {/* ERROR BOX */}
      <div className="mx-auto text-red-400 h-[30px]">
        {error && <p>{error}</p>}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[400px] mx-auto w-full mt-[70px] gap-[20px]"
      >
        <input
          type="email"
          ref={emailRef}
          required
          placeholder="Email"
          className="input"
        />
        <input
          type="password"
          ref={passwordRef}
          required
          placeholder="Hasło"
          className="input"
        />
        <button
          disabled={loading}
          type="submit"
          className="button w-fit rounded-lg mx-auto"
        >
          Zaloguj
        </button>
      </form>

      <div className="flex gap-[10px] mx-auto mt-[30px] mb-[140px]">
        <p>Nie posiadasz jeszcze konta?</p>
        <Link to="/signup" className="text-slate-800 underline">
          Stwórz konto
        </Link>
      </div>
    </Section>
  );
}
