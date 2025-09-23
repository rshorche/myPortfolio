import { contactData, socialLinks } from "../../data/sidebarData";

export default function ContactList() {
  return (
    <div className="px-4">
      <hr className="bg-c-soft h-[1px] border-0 my-4 mx-2 " />
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
        {contactData.map((data) => {
          const IconComponent = data.icon;
          return (
            <li key={data.title} className="flex items-center gap-4">
              <div className="flex justify-center items-center w-12 h-12 rounded-lg shadow-c-depth border-t border-c-sub/40">
                <IconComponent className="text-c-accent text-2xl" />
              </div>
              <div>
                <span className="text-xs mb-0.5 text-c-sub">{data.title}</span>
                {data.href ? (
                  <a
                    href={data.href}
                    className="block text-sm sm:text-base font-bold text-c-text hover:text-c-accent transition-colors">
                    {data.value}
                  </a>
                ) : (
                  <p className="text-sm sm:text-base font-bold text-c-text">
                    {data.value}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ul>
      <hr className="bg-c-soft h-[1px] border-0 my-4 mx-2 " />
      <ul className="flex items-center justify-start gap-4 px-2 pb-4 lg:justify-center">
        {socialLinks.map((social) => {
          const IconComponent = social.icon;
          return (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-c-sub hover:text-c-text transition-colors"
                aria-label={social.label}>
                <IconComponent />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
