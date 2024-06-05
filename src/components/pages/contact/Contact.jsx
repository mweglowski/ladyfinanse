import React from "react";
import Title from "../../UI/Title";
import Section from "../../UI/Section";
import ContactImage from "../../../images/contact.png";

const Contact = () => {
  return (
    <Section classNames={"p-8"}>
      {/* IMAGE WITH TITLE */}
      <div className="relative mx-auto">
        <img
          src={ContactImage}
          alt="Blog Image"
          className="mt-[50px] max-w-[800px] w-full"
        />
        <Title classNames="absolute top-[50%] left-[35%] text-shadow-white max-w-[350px] sm:text-[60px]">
          Kontakt
        </Title>
      </div>

      <div className="flex justify-center flex-wrap items-center gap-3 animate-slide-down max-w-[800px] mx-auto">
        <div className="px-8 py-5 flex items-center justify-between shadow-md border-2 border-slate-200 w-full flex-wrap gap-[10px]  rounded-lg">
          <div className="font-bold text-lg">Adres</div>
          <div className="text-right ml-auto">
            ul. gen. Henryka Dąbrowskiego 36, 84-230 Rumia
          </div>
        </div>

        <div className="px-8 py-5 flex items-center justify-between shadow-md border-2 border-slate-200 w-full rounded-lg">
          <div className="font-bold text-lg">Telefon</div>
          <p>+48 568 589 685</p>
        </div>

        <div className="px-8 py-5 flex items-center justify-between shadow-md border-2 border-slate-200 w-full rounded-lg">
          <div className="font-bold text-lg">Email</div>
          <p>sample.email@gmail.com</p>
        </div>

        <div className="px-8 py-5 flex items-center shadow-md border-2 border-slate-200 w-full flex-col rounded-lg">
          <div className="font-bold text-lg w-full mb-[10px]">
            Godziny Otwarcia
          </div>
          <ul className="w-full">
            {Array.from([
              "Poniedziałek",
              "Wtorek",
              "Środa",
              "Czwartek",
              "Piątek",
              "Sobota",
            ]).map((day) => (
              <li key={day} className="flex gap-[40px] justify-between">
                <div>{day}</div>
                <div>8:00 - 18:00</div>
              </li>
            ))}
            <li className="flex gap-[40px] justify-between">
              <div>Niedziela</div>
              <div>Nieczynne</div>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col mt-[12px] border-2 border-slate-200 shadow-md rounded-lg">
        <div className="font-bold text-lg w-full mb-[10px] mt-[12px] px-8 py-5">
          Gdzie się znajdujemy?
        </div>

        <iframe
          title="Your location in the map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4626.2419836699955!2d18.39894475938625!3d54.566619275486694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda4fbef1bad39%3A0xb0288a9ab449b4d3!2sGenera%C5%82a%20Henryka%20D%C4%85browskiego%2036%2C%2084-230%20Rumia!5e0!3m2!1spl!2spl!4v1716716075748!5m2!1spl!2spl"
          loading="lazy"
          className="h-[400px] md:h-[560px] duration-500 rounded-lg w-full"
        />
      </div>
    </Section>
  );
};

export default Contact;
