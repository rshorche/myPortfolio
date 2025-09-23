import { useState } from "react";
import cn from "../../libs/cn";
import ContactList from "./ContactList";
import ProfileInfo from "./ProfileInfo";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <aside className="w-full lg:max-w-64 lg:max-h-min relative mb-4 lg:sticky top-4 bg-c-elev rounded-2xl border border-c-soft shadow-2xl overflow-hidden">
      <ProfileInfo isOpen={isOpen} onToggle={handleToggle} />

      <div
        className={cn(
          "transition-all duration-500 ease-in-out overflow-hidden",
          isOpen ? "max-h-72" : "max-h-0",
          "lg:max-h-72"
        )}>
        <ContactList />
      </div>
    </aside>
  );
}
