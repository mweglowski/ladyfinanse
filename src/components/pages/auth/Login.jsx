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
    <Section classNames="bg-[#1a1a1a] h-screen text-white">
      <Title classNames="text-shadow-white sm:text-[70px] text-[50px] mt-[150px]">
        Zaloguj się
      </Title>

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
          className="button rounded-lg mx-auto px-5 py-2"
        >
          Zaloguj
        </button>
      </form>

      <div className="flex gap-[10px] mx-auto mt-[30px] mb-[140px]">
        <p>Nie posiadasz jeszcze konta?</p>
        <Link to="/signup" className="underline">
          Stwórz konto
        </Link>
      </div>
    </Section>
  );
}
