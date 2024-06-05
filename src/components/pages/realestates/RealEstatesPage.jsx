import React from "react";
import Section from "../../UI/Section";
import RealEstatesImage from "../../../images/realestates.png";
import Title from "../../UI/Title";

const RealEstatesPage = () => {
  return (
    <Section>
			{/* TITLE WITH IMAGE */}
      <div className="relative mx-auto">
        <img
          src={RealEstatesImage}
          alt="Real Estates Image"
          className="mt-[50px] max-w-[800px] w-full"
        />
        <Title classNames="absolute top-[60%] left-[15%] text-shadow-white max-w-[350px] sm:text-[60px]">
          Nieruchomości
        </Title>
      </div>

			{/* FILTERS */}


			{/* REAL ESTATES LIST */}

			
    </Section>
  );
};

export default RealEstatesPage;
