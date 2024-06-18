import React, { useEffect, useState } from "react";
import Section from "../../UI/Section";
import Title from "../../UI/Title";

const RealEstatesPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use your deployed backend URL
        const response = await fetch(`https://webscraper-api.vercel.app`);
        const message = await response.json();
        setData(message.data);
      } catch (error) {
        console.log("Error occurred!", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Section classNames="bg-[#1a1a1a] text-white p-4">
      <div className="relative mx-auto">
        <Title classNames="text-shadow-white sm:text-[60px] mt-[100px]">
          Nieruchomości
        </Title>
      </div>

      {loading ? (
        "Loading..."
      ) : data.length === 0 ? (
        "No data available"
      ) : (
        <div className="flex flex-wrap justify-center gap-4 max-w-[1000px] mx-auto">
          {data.map((offerData, index) => {
            const { imageSrc } = offerData;
            return (
              <a
                key={index}
                className="border-2 border-gray-200 rounded-lg max-w-[320px] p-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`https://webscraper-api.vercel.app${imageSrc}`}
                  alt={`Real Estate Image ${index}`}
                  className="rounded-lg border-2 border-gray-200"
                />
                <div className="mt-2">{"Some default text"}</div>
              </a>
            );
          })}
        </div>
      )}
    </Section>
  );
};

export default RealEstatesPage;
