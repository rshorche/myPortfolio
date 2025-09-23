import { NavLink } from "react-router-dom";
import cn from "../../libs/cn";
import { navLinks } from "../../data/headerData";

export default function Header() {
  return (
    <header className="h-fit fixed bottom-0 left-0 right-0 md:block md:absolute md:top-0 md:left-0 md:right-auto z-10">
      <nav className="bg-c-elev backdrop-blur-sm border border-c-soft p-2 rounded-t-2xl md:rounded-tr-none md:rounded-tl-2xl md:rounded-br-2xl">
        <ul className="flex items-center justify-center gap-2 ">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    "px-1 sm:px-4 py-2 rounded-lg text-xs sm:text-sm transition-colors duration-300",
                    {
                      "text-c-accent": isActive,
                      "text-c-sub hover:text-c-text": !isActive,
                    }
                  )
                }>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
