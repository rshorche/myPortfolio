import type { IconType } from "react-icons";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { features, certificates } from "../data/aboutData";

interface AboutType {
  icon: IconType;
  title: string;
  description: string;
}

export default function About() {
  return (
    <div className="bg-c-elev border border-c-muted p-4 sm:p-7 shadow-c-depth rounded-2xl">
      <h2
        className="relative inline-block pb-2 sm:pb-4 mb-4 sm:mb-5 text-2xl sm:text-3xl font-lalezar 
             after:content-[''] after:absolute after:right-0 after:bottom-0 
             after:w-1/3 after:h-0.5 after:bg-c-accent after:rounded-2xl">
        درباره من
      </h2>
      <div className="space-y-4 text-c-sub text-sm font-light leading-6 sm:text-base">
        <p>
          مسیر برنامه‌نویسی من از یک نیاز شخصی آغاز شد: ابزاری برای مدیریت
          استراتژی‌های معاملاتی‌ام که هیچ‌کجا پیدایش نمی‌کردم. این چالش، جرقه‌ای
          بود که مرا به دنیای توسعه نرم‌افزار کشاند.
        </p>
        <p>
          در این مسیر، جذابیت ساخت رابط‌های کاربری تعاملی، مرا به سمت توسعه
          فرانت‌اند سوق داد. با تمرکز بر{" "}
          <strong className="font-bold text-c-text">
            React، TypeScript و Tailwind
          </strong>
          ، سرانجام موفق شدم همان ابزار شخصی را به یک پروژه کامل تبدیل کنم که
          اکنون با افتخار در نمونه‌کارهای من قرار دارد.
        </p>
        <p>
          حالا، هر روز با انگیزه حل چالش‌های جدید و ساخت تجربه‌های کاربری روان،
          مهارت‌هایم را ارتقا می‌دهم و آماده‌ام تا ایده‌های بعدی را به واقعیت
          تبدیل کنم.
        </p>
      </div>
      <div>
        <h3 className="sm:pb-4 my-5 sm:my-7 text-xl sm:text-2xl font-lalezar ">
          کارهای که من انجام میدم
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((featur: AboutType) => {
            const IconComponent = featur.icon;
            return (
              <li
                key={featur.title}
                className="flex flex-col sm:flex-row items-center text-center sm:text-right gap-4 border-t border-c-soft rounded-xl p-5 shadow-c-depth">
                <div className="text-c-accent ">
                  <IconComponent size={40} />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl mb-1.5 font-lalezar ">
                    {featur.title}
                  </h4>
                  <p className="text-sm leading-6">{featur.description} </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h3 className="my-5 sm:my-7 text-xl sm:text-2xl font-lalezar ">
          گواهینامه‌های آموزشی
        </h3>
        <ul>
          {certificates.map((certificate) => {
            return (
              <li key={certificate.title} className="flex justify-between ">
                <div className="flex justify-center items-center gap-2">
                  <Link
                    to={certificate.url}
                    target="_blank"
                    className="hover:text-c-accent">
                    <FaExternalLinkAlt />
                  </Link>
                  <span className="text-c-accent bg-c-muted text-xs px-3 py-1.5 rounded-lg">
                    2023
                  </span>
                </div>
                <div className="flex flex-col items-end ">
                  <h4>{certificate.title}</h4>
                  <p>
                    <span className="text-c-accent">
                      {certificate.platform}:{" "}
                    </span>
                    <span>{certificate.issuer}</span>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
