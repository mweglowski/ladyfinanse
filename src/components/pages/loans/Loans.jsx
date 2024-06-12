import React from "react";
import { Link } from "react-router-dom";

import MBankLogo from "../../../images/banks/mbank.png";
import SantanderLogo from "../../../images/banks/santander.jpg";
import IngLogo from "../../../images/banks/ing.jpg";
import PkoBpLogo from "../../../images/banks/pkobp.jpg";
import BnpParibasLogo from "../../../images/banks/bnpparibas.png";
import PekaoLogo from "../../../images/banks/pekao.jpg";
import AliorBankLogo from "../../../images/banks/alior.png";
import WschowaLogo from "../../../images/banks/wschowa.jpg";
import BosLogo from "../../../images/banks/bos.jpg";
import CitiLogo from "../../../images/banks/citi.png";
import MilleniumLogo from "../../../images/banks/millenium.png";
import SBRLogo from "../../../images/banks/sbr.png";
import VeloLogo from "../../../images/banks/velo.jpg";

import HouseIcon from "../../../icons/house.svg";
import TVIcon from "../../../icons/tv.svg";
import ConnectionIcon from "../../../icons/connection.svg";
import CarIcon from "../../../icons/car.svg";
import StudentIcon from "../../../icons/student.svg";
import CompanyIcon from "../../../icons/company.svg";

import ImageCard from "../../UI/ImageCard";
import Title from "../../UI/Title";
import Description from "../../UI/Description";
import Section from "../../UI/Section";

import BankImage from "../../../images/bank.png";
import RoadToBetterLoanImage from "../../../images/road-to-better-loan.png";
import Slider from "../../UI/Slider";
import CardList from "../../UI/CardList";

const Loans = () => {
  const loansData = [
    {
      id: 0,
      title: "Kredyt Hipoteczny",
      description:
        "Pozwala na sfinansowanie zakupu nieruchomości, takiej jak mieszkanie, dom lub działka budowlana. Oprocentowanie jest zazwyczaj niższe niż w przypadku innych kredytów, a okres spłaty może wynosić nawet kilkadziesiąt lat.",
      icon: HouseIcon,
    },
    {
      id: 1,
      title: "Kredyt konsumpcyjny",
      description:
        "To rozwiązanie dla osób potrzebujących dodatkowych środków na bieżące wydatki, takie jak zakup sprzętu AGD, remont mieszkania czy wakacje. Cechuje się prostymi procedurami uzyskania oraz krótszym okresem spłaty w porównaniu do kredytu hipotecznego.",
      icon: TVIcon,
    },
    {
      id: 2,
      title: "Kredyt konsolidacyjny",
      description:
        "Umożliwia połączenie kilku istniejących zobowiązań kredytowych w jedno, co pozwala na uproszczenie spłat oraz często obniżenie miesięcznych rat. Jest to rozwiązanie dla osób, które mają trudności z zarządzaniem wieloma kredytami jednocześnie. Konsolidacja może obejmować kredyty gotówkowe, karty kredytowe oraz kredyty samochodowe.",
      icon: ConnectionIcon,
    },
    {
      id: 3,
      title: "Kredyt samochodowy",
      description:
        "Jest przeznaczony na sfinansowanie zakupu nowego lub używanego pojazdu. Może obejmować zarówno samochody osobowe, jak i motocykle czy pojazdy dostawcze. Często charakteryzuje się atrakcyjnym oprocentowaniem oraz elastycznymi warunkami spłaty, dostosowanymi do możliwości finansowych kredytobiorcy.",
      icon: CarIcon,
    },
    {
      id: 4,
      title: "Kredyt studencki",
      description:
        "To specjalna forma finansowania skierowana do studentów, mająca na celu pokrycie kosztów związanych z nauką i codziennym życiem. Warunki kredytu są zazwyczaj bardziej korzystne, z niższym oprocentowaniem oraz możliwością odroczenia spłaty do momentu ukończenia studiów. Jest to wsparcie dla osób, które potrzebują dodatkowych środków na edukację.",
      icon: StudentIcon,
    },
    {
      id: 5,
      title: "Kredyt firmowy",
      description:
        "Wspiera rozwój działalności gospodarczej, oferując środki na inwestycje, zakup sprzętu, rozbudowę infrastruktury czy finansowanie bieżącej działalności. Może być dostosowany do specyficznych potrzeb przedsiębiorstwa, z elastycznymi warunkami spłaty oraz różnymi formami zabezpieczeń. Jest to narzędzie umożliwiające zwiększenie konkurencyjności i efektywności firmy.",
      icon: CompanyIcon,
    },
  ];

  const logos = [
    MBankLogo,
    PekaoLogo,
    BnpParibasLogo,
    PkoBpLogo,
    SantanderLogo,
    AliorBankLogo,
    WschowaLogo,
    BosLogo,
    CitiLogo,
    IngLogo,
    MilleniumLogo,
    VeloLogo,
    SBRLogo,
  ];

  return (
    <Section>
      <div className="bg-[#1a1a1a] text-white animate-none">
        <Title classNames="mt-[150px] sm:text-[60px] text-shadow-white">O jaki kredyt możesz się starać?</Title>
        <CardList
          data={loansData}
          listClasses={
            "flex flex-wrap justify-center items-center gap-[60px] mt-[70px] mx-auto p-8 pb-[200px] max-w-[1000px]"
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

      {/* <div className="relative mx-auto mt-[100px]">
        <img
          src={RoadToBetterLoanImage}
          alt="Blog Image"
          className="mt-[50px] max-w-[700px] w-full"
        />
        <Title classNames="absolute top-[50%] left-[30%] text-shadow-white max-w-[350px] sm:text-[60px]">
          Droga do lepszego kredytu
        </Title>
      </div> */}
      <div className="relative mx-auto mt-[150px]">
        <Title classNames="text-shadow-white max-w-[600px] sm:text-[60px]">
          Droga do lepszego kredytu
        </Title>
      </div>
      <Description classNames="mt-[50px] text-justify">
        LadyFinanse pomaga klientom w wyborze najlepszej oferty kredytowej
        odpowiadającej ich potrzebom. Nasze Ekspertki gwarantują wybór
        najtańszej formy finansowania w najkrótszym czasie.
      </Description>
      <Description classNames="mb-[150px] mt-[20px]">
        <Link
          to="/contact"
          className="underline hover:text-slate-500 duration-300"
        >
          Skontaktuj się
        </Link>{" "}
        z nami, aby dowiedzieć się więcej.
      </Description>

      {/* IMAGE WITH TITLE */}
      <div className="relative mx-auto">
        {/* <img
          src={BankImage}
          alt="Blog Image"
          className="mt-[100px] max-w-[800px] w-full"
        /> */}
        {/* <Title classNames="absolute top-[50%] left-[30%] text-shadow-white max-w-[350px] sm:text-[60px]">
          Współpraca z Bankami
        </Title> */}
        <Title classNames="text-shadow-white max-w-[700px] sm:text-[60px] mt-[100px]">
          Współpraca z Bankami
        </Title>
      </div>

      <Slider logos={logos} classNames="mb-[200px] max-w-[900px] mx-auto" />
    </Section>
  );
};

export default Loans;
