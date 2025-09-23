import { IoIosArrowDown } from "react-icons/io";
import avatar from "../../assets/images/avatar.png";
import cn from "../../libs/cn";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";

interface ProfileInfoProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function ProfileInfo({ isOpen, onToggle }: ProfileInfoProps) {
  const [isDark, setIsDark] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDark((prv) => !prv);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div className="flex overflow-hidden items-center justify-start lg:flex-col lg:text-center gap-4 sm:gap-6 p-4 sm:p-7">
      <button
        onClick={toggleTheme}
        className={cn(
          "p-2 border rounded-lg border-c-sub/20 shadow-c-depth",
          isDark ? "text-c-accent" : ""
        )}>
        {isDark ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
      </button>
      <figure className="bg-c-soft rounded-2xl md:rounded-3xl ">
        <img src={avatar} alt="رضا شورچه" className="w-20 sm:w-28 lg:w-36" />
      </figure>
      <div className="">
        <h1 className="font-lalezar text-base sm:text-2xl mb-2.5 sm:mb-4 ">
          رضا شورچه
        </h1>
        <p className="text-xs py-1 px-3 sm:py-1.5 sm:px-4 bg-c-muted font-light rounded-lg">
          Front-End Developer
        </p>
      </div>
      <button className="btn-toggle shadow-c-depth" onClick={onToggle}>
        <IoIosArrowDown
          className={cn(
            "sm:hidden transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
        <span className="hidden sm:block mx-2">
          {isOpen ? "بستن اطلاعات" : "نمایش اطلاعات"}
        </span>
      </button>
    </div>
  );
}
