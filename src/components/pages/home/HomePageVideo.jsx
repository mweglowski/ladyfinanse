import React, { useEffect, useState } from "react";
import CompanyFeatureText from "./CompanyFeatureText";
import CompanyLogo from "../../../icons/logo.png";
import Title from "../../UI/Title";

const texts = [
  "Doświadczenie",
  "Szeroki Zakres Usług",
  "Profesjonalizm",
  "Rzetelność",
  "Bogata Baza Ofert",
  "Indywidualne Podejście do Klienta",
  "Wysoka Jakość Usług",
  "Dogłębna Znajomość Rynku",
];

const HomePageVideo = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen max-h-[1000px] w-full">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        disableRemotePlayback
      >
        <source src="./assets/videos/fast-town.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      <div className="video-mask absolute top-0 left-0 w-full h-full"></div>

      {/* LOGO WITH FEATURES */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center text-center bg-[#000000aa]">
        <div className="relative w-[370px] h-[370px] top-[160px]">
          <img src={CompanyLogo} alt="Company Logo" className="mb-4" />
          <Title classNames="absolute bottom-[-15px] text-[#e3ce78] w-full italic-title">
            LadyFinanse
          </Title>
        </div>
        <div className="absolute bottom-[140px] ">
          <CompanyFeatureText text={texts[currentTextIndex]} />
        </div>
      </div>
    </div>
  );
};

export default HomePageVideo;
