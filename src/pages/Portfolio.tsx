import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import { useState } from "react";
import { projectsData, filterButtons } from "../data/portfolioData";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "All") {
      return true;
    }
    return project.category === activeCategory;
  });

  return (
    <div className="bg-c-elev border border-c-muted p-4 sm:p-7 shadow-c-depth rounded-2xl">
      <h2
        className="relative inline-block pb-2 sm:pb-4 mb-4 sm:mb-5 text-2xl sm:text-3xl font-lalezar 
             after:content-[''] after:absolute after:right-0 after:bottom-0 
             after:w-1/3 after:h-0.5 after:bg-c-accent after:rounded-2xl">
        نمونه کارها
      </h2>

      <div className="flex gap-5 my-5">
        {filterButtons.map((button) => (
          <button
            key={button.value}
            onClick={() => setActiveCategory(button.value)}
            className={`px-1 sm:px-4 py-2 rounded-lg text-xs sm:text-sm transition-colors duration-300 ${
              activeCategory === button.value
                ? "text-c-accent"
                : "text-c-sub hover:text-c-text"
            }`}>
            {button.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {filteredProjects.map((data) => (
          <div
            key={data.title}
            className="flex-1 rounded-2xl bg-c-elev p-1 shadow shadow-c-sub/90 transition-all duration-300 hover:shadow-c-accent">
            <Link
              to={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-xl">
              <img
                src={data.imageUrl}
                alt={data.title}
                className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <BsEye className="text-c-accent text-2xl" />
              </div>
            </Link>

            <h3 className="mt-4 text-center font-lalezar text-xl text-c-text">
              {data.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
