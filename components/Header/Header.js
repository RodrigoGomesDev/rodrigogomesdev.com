import { Howl } from "howler";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const multiPop = new Howl({
  src: ["/sounds/multi-pop.mp3"],
});

const Header = () => {
  return (
    <nav className="w-full fixed top-0 py-8 z-50 select-none bg-gradient-to-b from-black shadow-black transition-all duration-300">
      <div className="flex justify-between section-container">
        <a href="#home" className="link">
          <Image
            src="/logo.svg"
            alt="Logo - Shubh Porwal"
            width={25}
            height={25}
          />
        </a>
        <div className="outer-menu relative flex items-center gap-8 z-[1]">
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Header;
