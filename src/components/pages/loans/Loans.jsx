import React from "react";
import { Link } from "react-router-dom";

import MBankLogo from "../../../images/mbank.jpg";
import SantanderLogo from "../../../images/santander.jpg";
import IngLogo from "../../../images/ing.jpg";
import PkoBpLogo from "../../../images/pkobp.jpg";
import BnpParibasLogo from "../../../images/bnpparibas.png";
import PekaoLogo from "../../../images/pekao.jpg";

import HouseIcon from "../../../icons/house.svg";
import TVIcon from "../../../icons/tv.svg";
import ConnectionIcon from "../../../icons/connection.svg";
import CarIcon from "../../../icons/car.svg";
import StudentIcon from "../../../icons/student.svg";
import CompanyIcon from "../../../icons/company.svg";

import ImageCard from "../../UI/ImageCard";
import LoanCard from "./LoanCard";
import Title from "../../UI/Title";
import Description from "../../UI/Description";
import Section from "../../UI/Section";

import BankImage from "../../../images/bank.png";
import RoadToBetterLoanImage from "../../../images/road-to-better-loan.png";

const Loans = () => {
  const loansData = [
    {
      id: 0,
      title: "Kredyt Hipoteczny",
      description:
        "Pozwala na sfinansowanie zakupu nieruchomości, takiej jak mieszkanie, dom lub działka budowlana. Oprocentowanie jest zazwyczaj niższe niż w przypadku innych kredytów, a okres spłaty może wynosić nawet kilkadziesiąt lat. Aby uzyskać kredyt hipoteczny, konieczne jest posiadanie wkładu własnego oraz zdolności kredytowej.",
      icon: HouseIcon,
    },
    {
      id: 1,
      title: "Kredyt konsumpcyjny",
      description:
        "To rozwiązanie dla osób potrzebujących dodatkowych środków na bieżące wydatki, takie jak zakup sprzętu AGD, remont mieszkania czy wakacje. Cechuje się prostymi procedurami uzyskania oraz krótszym okresem spłaty w porównaniu do kredytu hipotecznego. Oprocentowanie może być zmienne lub stałe, w zależności od oferty banku.",
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

  return (
    <Section>
      {/* IMAGE WITH TITLE */}
      <div className="relative mx-auto">
        <img
          src={BankImage}
          alt="Blog Image"
          className="mt-[100px] max-w-[800px] w-full"
        />
        <Title classNames="absolute top-[50%] left-[30%] text-shadow-white max-w-[350px] sm:text-[60px]">
          Współpraca z Bankami
        </Title>
      </div>
      <Description>
        Poniżej przedstawiamy banki, z którymi współpracujemy.
      </Description>

      <ul className="flex flex-wrap justify-center items-center gap-[60px] mt-[70px] max-w-[800px] mx-auto p-8 pb-[100px] animate-slide-down ">
        <li>
          <ImageCard logo={MBankLogo} />
        </li>
        <li>
          <ImageCard logo={SantanderLogo} />
        </li>
        <li>
          <ImageCard logo={IngLogo} />
        </li>
        <li>
          <ImageCard logo={PekaoLogo} />
        </li>
        <li>
          <ImageCard logo={BnpParibasLogo} />
        </li>
        <li className="pb-2">
          <ImageCard logo={PkoBpLogo} />
        </li>
      </ul>

      <div className="bg-pattern mt-[100px] text-white">
        <Title classNames="mt-[200px]">O jaki kredyt możesz się starać?</Title>
        <ul className="flex flex-wrap justify-center items-center gap-[60px] mt-[70px] mx-auto p-8 pb-[200px]">
          {loansData.map((loanData) => (
            <li key={loanData.id}>
              <LoanCard {...loanData} />
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mx-auto mt-[100px]">
        <img
          src={RoadToBetterLoanImage}
          alt="Blog Image"
          className="mt-[50px] max-w-[700px] w-full"
        />
        <Title classNames="absolute top-[50%] left-[30%] text-shadow-white max-w-[350px] sm:text-[60px]">
          Droga do lepszego kredytu
        </Title>
      </div>
      <Description classNames="mb-[150px]">
        LadyFinanse <strong>pomaga</strong> klientom w poprawie ich{" "}
        <strong>wiarygodności kredytowej</strong>. Dzięki naszemu wysoce{" "}
        <strong>profesjonalnemu</strong> i <strong>metodologicznemu</strong>{" "}
        podejściu, pomożemy Ci poprawić Twoją sytuację finansową. Ściśle
        przestrzegamy Zasad <strong>Dobrych Praktyk</strong> opracowanych przez{" "}
        <strong>Konferencję Przedsiębiorstw Finansowych</strong> w Polsce.
        Dzięki temu możesz być <strong>spokojny</strong> - jesteś w{" "}
        <strong>dobrych rękach</strong>. <br />
        <br />
        <Link
          to="/contact"
          className="underline hover:text-slate-500 duration-300"
        >
          Skontaktuj się
        </Link>{" "}
        z nami, aby dowiedzieć się więcej.
      </Description>
    </Section>
  );
};

export default Loans;
