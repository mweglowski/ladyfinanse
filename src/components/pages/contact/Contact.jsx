import React from "react";
import Title from "../../UI/Title";
import Section from "../../UI/Section";
import AddressIcon from "../../../icons/contact/address.svg";
import EmailIcon from "../../../icons/contact/email.svg";
import PhoneIcon from "../../../icons/contact/phone.svg";
import ScheduleIcon from "../../../icons/contact/schedule.svg";
import LocationIcon from "../../../icons/contact/location.svg";
import CompanyLogo from "../../../icons/logo.png";
import CardTitle from "./CardTitle";
import ContactCard from "./ContactCard";
import ContactDescription from "./ContactDescription";

const Contact = () => {
  return (
    <Section classNames={"p-4 bg-[#1a1a1a] text-[#e3ce78]"}>
      <div className="mb-[50px]">
        <img
          src={CompanyLogo}
          alt="Company Logo"
          className="mx-auto max-w-[360px] mt-[50px]"
        />
        <Title classNames="text-[#e3ce78] w-full italic-title mt-[-80px]">
          LadyFinanse
        </Title>
      </div>

      {/* SOCIAL ICONS AND CONTACT FORM LINK */}
      <div className="flex w-fit my-4 gap-8 mx-auto">
        <a
          className="font-bold mx-auto bg-black text-white rounded-lg px-[16px] text-[27px] flex items-center duration-300 hover:bg-white hover:text-black shadow-sm shadow-black border-2 border-black  cursor-poiner"
          href="https://www.facebook.com/profile.php?id=61560185744127"
          target="_blank"
        >
          f
        </a>
        <a
          className="button rounded-lg px-4 py-2 cursor-pointer hover:bg-white"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdLZNN0iXmXa1f7jYmj1f_s6nK2VQl_NkKrtxMM57RbSV8kCA/viewform"
          target="_blank"
        >
          Formularz kontaktowy
        </a>
      </div>

      <div className="flex justify-center flex-wrap items-center gap-3 animate-slide-down max-w-[800px] mx-auto">
        <ContactCard cardClasses="gap-[10px]">
          <div className="font-bold text-lg flex gap-4 items-center">
            <img src={AddressIcon} alt="Phone Icon" className="w-[30px]" />
            <CardTitle>Adres</CardTitle>
          </div>
          <ContactDescription classNames="text-right ml-auto text-[#e3ce78]">
            ul. gen. Henryka Dąbrowskiego 36, 84-230 Rumia
          </ContactDescription>
        </ContactCard>

        <ContactCard>
          <div className="font-bold text-lg flex gap-4">
            <img src={PhoneIcon} alt="Phone Icon" className="w-[25px]" />
            <CardTitle>Telefon</CardTitle>
          </div>
          <ContactDescription>+48 530 235 204</ContactDescription>
        </ContactCard>

        <ContactCard>
          <div className="font-bold text-lg flex gap-4">
            <img src={EmailIcon} alt="Phone Icon" className="w-[25px]" />
            <CardTitle>Email</CardTitle>
          </div>
          <ContactDescription>biuro@ladyfinanse.pl</ContactDescription>
        </ContactCard>

        <ContactCard classNames="flex-col">
          <div className="font-bold text-lg w-full mb-[10px] flex gap-4">
            <img src={ScheduleIcon} alt="Phone Icon" className="w-[25px]" />
            <CardTitle>Godziny Otwarcia</CardTitle>
          </div>

          <ContactDescription classNames="w-full">
            <ul>
              {Array.from([
                "Poniedziałek",
                "Wtorek",
                "Środa",
                "Czwartek",
                "Piątek",
              ]).map((day) => (
                <li key={day} className="flex gap-[40px] justify-between">
                  <div>{day}</div>
                  <div>
                    9:00 -{" "}
                    {day === "Środa" || day === "Czwartek" ? "18:00" : "17:00"}
                  </div>
                </li>
              ))}
              <li className="flex gap-[40px] justify-between">
                <div>Sobota</div>
                <div>Nieczynne</div>
              </li>
              <li className="flex gap-[40px] justify-between">
                <div>Niedziela</div>
                <div>Nieczynne</div>
              </li>
            </ul>
          </ContactDescription>
        </ContactCard>

        <div className="font-bold text-lg w-full mb-[10px] mt-[12px] px-8 py-5 flex gap-4">
          <img src={LocationIcon} alt="Location Icon" className="w-[28px]" />
          <CardTitle>Gdzie się znajdujemy?</CardTitle>
        </div>
      </div>

      <div className="flex flex-col mt-[12px] border-2 border-none shadow-md rounded-lg">
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
