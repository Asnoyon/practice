import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Frontend Developer"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5 ">
        {/* <h4 className=" text-lg font-normal">Hola Amingos 👀🙋‍♂️  </h4> */}
        <h1 className="text-6xl  font-bold text-white">
          Hi, I'm <span className="text-[#00FA9A] capitalize">Noyon</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#00FA9A"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        "I am a passionate Frontend  developer. With a strong foundation in web development and a keen eye for data, I create innovative solutions for user experience."
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner