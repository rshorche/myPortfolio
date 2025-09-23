import { FaCode, FaPalette, FaRocket, FaMobileAlt } from "react-icons/fa";
import type { IconType } from "react-icons";

export interface Feature {
  icon: IconType;
  title: string;
  description: string;
}

export const features: Feature[] = [
    {
    icon: FaCode,
    title: "کدنویسی تمیز",
    description: "توسعه کدهای خوانا، بهینه و قابل نگهداری برای تضمین کیفیت بلندمدت پروژه.",
  },
  {
    icon: FaPalette,
    title: "طراحی پیکسلی دقیق",
    description: "تبدیل طرح‌های گرافیکی به رابط‌های کاربری زنده، جذاب و کاملاً کاربرپسند.",
  },
  {
    icon: FaRocket,
    title: "عملکرد بهینه",
    description: "تمرکز بر سرعت بارگذاری و اجرای روان اپلیکیشن برای بهترین تجربه کاربری.",
  },
  {
    icon: FaMobileAlt,
    title: "واکنش‌گرایی کامل",
    description: "اطمینان از نمایش بی‌نقص و عملکرد یکپارچه در انواع نمایشگرها و دستگاه‌ها.",
  },
];

export const certificates = [
  {
    title: "HTML, CSS, and Javascript for Web Developers",
    issuer: "Johns Hopkins University",
    platform: "Coursera",
    year: "2023",
    url: "https://www.coursera.org/account/accomplishments/verify/3BKYC4LTGHZV",
  },
];