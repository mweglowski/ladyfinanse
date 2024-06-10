import React, { useEffect, useState } from "react";
import Section from "../../UI/Section";
import RealEstatesImage from "../../../images/realestates.png";
import Title from "../../UI/Title";

const RealEstatesPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      console.log('fetching')
      try {
        const response = await fetch(`https://webscraper-api.vercel.app`);
        // const response = await fetch(`http://localhost:5000`)

        const message = await response.json();
        console.log(message)
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
      {/* <div className="relative mx-auto">
        <img
          src={RealEstatesImage}
          alt="Real Estates Image"
          className="mt-[50px] max-w-[700px] w-full"
        />
        <Title classNames="absolute top-[60%] left-[15%] text-shadow-white max-w-[350px] sm:text-[60px]">
          Nieruchomości
        </Title>
      </div> */}
      <div className="relative mx-auto">
        <Title classNames="text-shadow-white sm:text-[60px] mt-[100px]">
          Nieruchomości
        </Title>
      </div>

      {/* FILTERS */}

    
      {/* REAL ESTATES LIST */}
      {loading ? (
        "Loading..."
      ) : data.length === 0 ? (
        "No data available"
      ) : (
        <div className="flex flex-wrap justify-center gap-4 max-w-[1000px] mx-auto">
          {data.map((offerData, index) => {
            // const { imageSrc, title, link } = offerData;
            const { imageSrc } = offerData;

            return (
              <a
                key={index}
                className="border-2 border-gray-200 rounded-lg max-w-[320px] p-2"
                // href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={imageSrc}
                  alt={"Real Estate Image"}
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
