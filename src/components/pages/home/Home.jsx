import React from "react";
import HomePageVideo from "./HomePageVideo";
import EmployeeImageCard from "./EmployeeImageCard";
import Title from "../../UI/Title";
import Description from "../../UI/Description";

function Home() {
  return (
    <div className="flex flex-col">
      {/* LANDING PAGE VIDEO */}
      <HomePageVideo />

      {/* GENERAL INFO ABOUT LADY TEAM */}
      <Title classNames={"mt-[150px]"}>LadyTeam</Title>
      <Description>
        Jesteśmy <strong>profesjonalną</strong> firmą specjalizującą się w{" "}
        <strong>kompleksowej obsłudze finansowej</strong>. Oferujemy szeroki
        zakres usług z zakresu nieruchomości, ubezpieczeń, pożyczek i kredytów,
        dostosowanych do indywidualnych potrzeb klienta. Naszym celem jest
        zapewnienie Ci <strong>spokoju</strong> i
        <strong> bezpieczeństwa finansowego</strong>, dlatego dbamy o każdy
        szczegół naszej współpracy. Poznaj nas bliżej i przekonaj się, dlaczego{" "}
        <strong>warto</strong> nam zaufać.
      </Description>

      {/* EMPLOYEES IMAGES */}
      <Title classNames={"mt-[150px]"}>Nasza Drużyna</Title>
      <div className="flex flex-wrap justify-center gap-[20px] p-8">
        <EmployeeImageCard />
        <EmployeeImageCard />
        <EmployeeImageCard />
        <EmployeeImageCard />
      </div>

      {/* ADDITIONAL INFO SECTION */}
      <div className="relative w-full bg-[#1a1a1a] text-slate-300 bg-pattern mt-[200px] pb-[150px]">
        <Title classNames={"mt-[150px]"}>Jesteś w dobrych rękach</Title>
        <Description>
          W firmie <strong>LadyFinanse</strong> staramy się pomóc naszym
          klientom w poprawie ich zdolności kredytowej. Jakkolwiek skomplikowana
          jest Twoja sytuacja finansowa, możesz być pewien, że razem{" "}
          <strong>znajdziemy rozwiązanie</strong>. Od 2000 roku nasz
          zaangażowany zespół ekspertów dokłada wszelkich starań, aby pomóc
          naszym klientom. Jesteśmy <strong>profesjonalni</strong> i{" "}
          <strong>dyskretni</strong>, więc nie obawiaj się zwrócić do nas po
          pomoc.
        </Description>
      </div>
    </div>
  );
}

export default Home;
