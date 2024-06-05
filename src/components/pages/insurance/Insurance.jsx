import React from "react";
import Title from "../../UI/Title";
import Section from "../../UI/Section";
import Description from "../../UI/Description";
import InsuranceTypeCard from "./InsuranceTypeCard";

import Link4Logo from "../../../images/link4.png";
import GeneraliLogo from "../../../images/generali.png";
import PZULogo from "../../../images/pzu.png";
import ErgoHestiaLogo from "../../../images/ergohestia.png";
import WartaLogo from "../../../images/warta.png";
import ProamaLogo from "../../../images/proama.png";

import HouseIcon from "../../../icons/house-dark.svg";
import CarIcon from "../../../icons/car-dark.svg";
import CompanyIcon from "../../../icons/company-dark.svg";
import HeartIcon from "../../../icons/heart.svg";
import PlaneIcon from "../../../icons/plane.svg";
import SmileIcon from "../../../icons/smile.svg";
import ImageCard from "../../UI/ImageCard";

import InsuranceCompanies from "../../../images/insurance-companies.png";
import InsuranceTypes from "../../../images/insurance2.png";

const Insurance = () => {
  const insuranceTypesData = [
    {
      id: 0,
      title: "Auto",
      description:
        "Ubezpieczenie samochodu obejmuje ochronę od szkód komunikacyjnych, kradzieży oraz innych zdarzeń losowych. Obejmuje zarówno ubezpieczenie OC, jak i AC oraz dodatkowe pakiety, które możesz dostosować do swoich potrzeb.",
      icon: CarIcon,
    },
    {
      id: 1,
      title: "Życie",
      description:
        "Ubezpieczenie na życie zapewnia finansowe wsparcie dla Twoich bliskich na wypadek Twojej śmierci. Obejmuje również opcje zabezpieczenia na wypadek ciężkiej choroby czy trwałej niezdolności do pracy, zapewniając spokój ducha i stabilność finansową.",
      icon: SmileIcon,
    },
    {
      id: 2,
      title: "Dom",
      description:
        "Ubezpieczenie domu chroni Twoją nieruchomość przed skutkami zdarzeń losowych, takich jak pożar, zalanie, kradzież czy inne nieprzewidziane zdarzenia. Obejmuje zarówno budynek, jak i jego wyposażenie.",
      icon: HouseIcon,
    },
    {
      id: 3,
      title: "Podróż",
      description:
        "Ubezpieczenie podróżne zapewnia ochronę w trakcie wyjazdów krajowych i zagranicznych. Obejmuje koszty leczenia, utratę bagażu, opóźnienia lotów oraz inne nieprzewidziane sytuacje, które mogą wystąpić w trakcie podróży.",
      icon: PlaneIcon,
    },
    {
      id: 4,
      title: "Zdrowie",
      description:
        "Ubezpieczenie zdrowotne zapewnia dostęp do prywatnej opieki medycznej, pokrywa koszty leczenia, badań diagnostycznych oraz wizyt u specjalistów. Zapewnia szybki dostęp do usług medycznych na najwyższym poziomie.",
      icon: HeartIcon,
    },
    {
      id: 5,
      title: "Firma",
      description:
        "Ubezpieczenie dla firm obejmuje ochronę majątku firmy, odpowiedzialność cywilną, a także ubezpieczenie pracowników. Jest to kompleksowe wsparcie dla przedsiębiorców, które pomaga zabezpieczyć działalność przed nieprzewidzianymi zdarzeniami.",
      icon: CompanyIcon,
    },
  ];

  return (
    <Section classNames="pt-[50px]">
      <div className="relative mx-auto">
        <img
          src={InsuranceTypes}
          alt="Blog Image"
          className="mt-[50px] max-w-[550px] w-full"
        />
        <Title classNames="absolute top-[70%] left-[0%] text-shadow-white max-w-[350px] sm:text-[60px] sm:left-[10%] md:max-w-[450px] md:top-[75%]">
          Co możesz z nami ubezpieczyć?
        </Title>
      </div>
      <ul className="flex flex-wrap gap-[50px] p-[40px] justify-center items-center mt-[100px] pb-[150px]">
        {insuranceTypesData.map((insuranceItemData) => (
          <li
            key={insuranceItemData.id}
            className="md:px-[70px] md:max-w-[800px] lg:max-w-[400px] lg:px-0 xl:max-w-[500px]"
          >
            <InsuranceTypeCard {...insuranceItemData} />
          </li>
        ))}
      </ul>

      <div className="relative mx-auto">
        <img
          src={InsuranceCompanies}
          alt="Blog Image"
          className="mt-[50px] max-w-[550px] w-full mx-auto"
        />
        <Title classNames="absolute top-[65%] left-[5%] text-[45px] text-shadow-white max-w-[350px] sm:text-[60px] sm:max-w-[450px] sm:top-[70%]">
          Współpraca z Towarzystwami Ubezpieczeniowymi
        </Title>
      </div>

      <Description classNames="mt-[100px] mb-[70px]">
        Poniżej przedstawiamy listę Towarzystw Ubezpieczeniowych, z którymi
        współpracujemy.
      </Description>
      <ul className="flex flex-wrap p-[50px] gap-[80px] justify-center items-center max-w-[1250px] mx-auto animate-slide-down mb-[100px]">
        <li>
          <ImageCard logo={Link4Logo} />
        </li>
        <li>
          <ImageCard logo={GeneraliLogo} imgClasses="scale-[1.5]" />
        </li>
        <li>
          <ImageCard logo={PZULogo} imgClasses="w-[100px]" />
        </li>
        <li>
          <ImageCard logo={ErgoHestiaLogo} />
        </li>
        <li>
          <ImageCard logo={WartaLogo} />
        </li>
        <li>
          <ImageCard logo={ProamaLogo} />
        </li>
      </ul>
    </Section>
  );
};

export default Insurance;
