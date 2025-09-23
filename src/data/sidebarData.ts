import { FaGithub, FaLinkedinIn, FaTelegram } from "react-icons/fa";
import {
  MdOutlineCalendarToday,
  MdOutlineEmail,
  MdOutlinePhone,
} from "react-icons/md";

export const contactData = [
  {
    icon: MdOutlineEmail,
    title: "ایمیل",
    value: "rshorche@gmail.com",
    href: "mailto:rshorche@gmail.com",
  },
  {
    icon: MdOutlinePhone,
    title: "موبایل",
    value: "۰۹۱۲۳۴۵۶۷۸۹",
    href: "tel:+989123456789",
  },
  {
    icon: MdOutlineCalendarToday,
    title: "تاریخ تولد",
    value: "۳ مرداد ۱۳۷۳",
  },
];

export const socialLinks = [
  {
    href: "https://www.linkedin.com/in/rshorche",
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/rshorche",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://t.me/rshorche",
    icon: FaTelegram,
    label: "Telegram",
  },
];
