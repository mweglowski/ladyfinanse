import React, { useEffect, useState } from "react";
import Section from "../../UI/Section";
import RealEstatesImage from "../../../images/realestates.png";
import Title from "../../UI/Title";

const RealEstatesPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Determine the base URL based on the environment
        const baseURL =
          process.env.NODE_ENV === "development"
            ? "http://localhost:5000"
            : "https://webscraper-api.vercel.app";

        const response = await fetch(`${baseURL}/`);

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const message = await response.json();
        setData(message.data);
        console.log(message.data);
      } catch (error) {
        console.log("Error occurred!", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Section classNames="p-4">
      {/* TITLE WITH IMAGE */}
      <div className="relative mx-auto">
        <img
          src={RealEstatesImage}
          alt="Real Estates Image"
          className="mt-[50px] max-w-[700px] w-full"
        />
        <Title classNames="absolute top-[60%] left-[15%] text-shadow-white max-w-[350px] sm:text-[60px]">
          Nieruchomości
        </Title>
      </div>

      {/* FILTERS */}
      <img
        src="http://deslux.pl/wp-content/uploads/2023/03/IMG-20220331-WA0007-500x380.jpg"
        alt="Specific Real Estate Image"
        className="rounded-lg border-2 border-gray-200"
      />
      {/* REAL ESTATES LIST */}
      {loading ? (
        "Loading..."
      ) : data.length === 0 ? (
        "No data available"
      ) : (
        <div className="flex flex-wrap justify-center gap-4 max-w-[1000px] mx-auto">
          {data.map((offerData, index) => {
            const { imageSrc, title, link } = offerData;

            return (
              <a
                key={index}
                className="border-2 border-gray-200 rounded-lg max-w-[320px] p-2"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={imageSrc}
                  alt={title}
                  className="rounded-lg border-2 border-gray-200"
                />
                <div className="mt-2">{title}</div>
              </a>
            );
          })}
        </div>
      )}
    </Section>
  );
};

export default RealEstatesPage;
