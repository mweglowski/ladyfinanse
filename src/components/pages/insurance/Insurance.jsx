import React from "react";
import Title from "../../UI/Title";
import Section from "../../UI/Section";
import Description from "../../UI/Description";
import InsuranceTypeCard from "./InsuranceTypeCard";
import Slider from "../../UI/Slider";
import CardList from "../../UI/CardList";

import Link4Logo from "../../../images/insurance/link4.png";
import GeneraliLogo from "../../../images/insurance/generali.png";
import PZULogo from "../../../images/insurance/pzu.png";
import ErgoHestiaLogo from "../../../images/insurance/ergohestia.png";
import WartaLogo from "../../../images/insurance/warta.png";
import ProamaLogo from "../../../images/insurance/proama.png";
import ConcordiaLogo from "../../../images/insurance/concordia.png";
import NationaleLogo from "../../../images/insurance/nationale.png";
import ViennaLogo from "../../../images/insurance/vienna.png";
import PrudentialLogo from "../../../images/insurance/prudential.png";
import UniquaLogo from "../../../images/insurance/uniqua.png";
import InterRiskLogo from "../../../images/insurance/interrisk.png";
import WienerLogo from "../../../images/insurance/wiener.png";

import HouseIcon from "../../../icons/house.svg";
import CarIcon from "../../../icons/car.svg";
import CompanyIcon from "../../../icons/company.svg";
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

  const logos = [
    Link4Logo,
    GeneraliLogo,
    PZULogo,
    ErgoHestiaLogo,
    WartaLogo,
    ProamaLogo,
    ConcordiaLogo,
    NationaleLogo,
    ViennaLogo,
    PrudentialLogo,
    UniquaLogo,
    WienerLogo,
    InterRiskLogo,
  ];

  return (
    <Section>
      {/* <div className="relative mx-auto">
        <img
          src={InsuranceTypes}
          alt="Blog Image"
          className="mt-[50px] max-w-[550px] w-full"
        />
        <Title classNames="absolute top-[70%] left-[0%] text-shadow-white max-w-[350px] sm:text-[60px] sm:left-[10%] md:max-w-[450px] md:top-[75%]">
          Co możesz z nami ubezpieczyć?
        </Title>
      </div> */}
      <div className="bg-[#1a1a1a] text-white animate-none">
        <Title classNames="mt-[150px] sm:text-[60px]">
          Co możesz z nami ubezpieczyć?
        </Title>
        <CardList
          data={insuranceTypesData}
          listClasses={
            "flex flex-wrap justify-center items-center gap-[60px] mt-[70px] mx-auto p-8 pb-[200px]"
          }
          titleClasses={"text-lg"}
          descriptionClasses={"text-gray-300 text-justify"}
          iconClasses={
            "w-[40px] absolute top-[-25px] left-[-20px] bg-[#1a1a1a] p-1 border-2 border-[#695b21] rounded-lg"
          }
          cardClasses={
            "w-full max-w-[700px] md:max-w-[400px] border-2 border-[#695b21] p-4 relative rounded-lg"
          }
        />
      </div>

      {/* <div className="relative mx-auto">
        <img
          src={InsuranceCompanies}
          alt="Blog Image"
          className="mt-[50px] max-w-[550px] w-full mx-auto"
        />
        <Title classNames="absolute top-[65%] left-[5%] text-[45px] text-shadow-white max-w-[350px] sm:text-[60px] sm:max-w-[450px] sm:top-[70%]">
          Współpraca z Towarzystwami Ubezpieczeniowymi
        </Title>
      </div> */}
      <div className="relative mx-auto mt-[200px]">
        <Title classNames="text-[35px] text-shadow-white sm:text-[60px]">
          Współpraca z Towarzystwami Ubezpieczeniowymi
        </Title>
      </div>

      {/* <Description classNames="mt-[100px] mb-[70px]">
        Poniżej przedstawiamy listę Towarzystw Ubezpieczeniowych, z którymi
        współpracujemy.
      </Description> */}
      {/* <ul className="flex flex-wrap p-[50px] gap-[80px] justify-center items-center max-w-[1250px] mx-auto animate-slide-down mb-[100px]">
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
      </ul> */}
      <Slider logos={logos} classNames={"max-w-[900px] mx-auto"} />
    </Section>
  );
};

export default Insurance;
