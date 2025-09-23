import React, { useRef, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      console.error("فرم وجود ندارد!");
      return;
    }

    setIsSending(true);
    setFormStatus("");

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        () => {
          setFormStatus("پیام شما با موفقیت ارسال شد!");
          form.current?.reset();
        },
        (error) => {
          setFormStatus("خطا در ارسال پیام. لطفاً دوباره تلاش کنید.");
          console.error("FAILED...", error.text);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="bg-c-elev border border-c-muted p-4 sm:p-7 shadow-c-depth rounded-2xl">
      <h2
        className="relative inline-block pb-2 sm:pb-4 mb-4 sm:mb-5 text-2xl sm:text-3xl font-lalezar 
             after:content-[''] after:absolute after:right-0 after:bottom-0 
             after:w-1/3 after:h-0.5 after:bg-c-accent after:rounded-2xl">
        تماس با من
      </h2>

      <div className="w-full h-64 rounded-2xl overflow-hidden border border-c-soft mb-7">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204333.15935709446!2d51.21544256247732!3d35.70749814421422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3d399%3A0x82ace7e25e252434!2sTehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2snl!4v1678886362534!5m2!1sen!2snl"
          width="100%"
          height="100%"
          loading="lazy"
          title="موقعیت مکانی"
          className="grayscale invert-[90%]"></iframe>
      </div>

      <h3 className="my-5 sm:my-7 text-xl sm:text-2xl font-lalezar ">
        فرم تماس
      </h3>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col items-end justify-center gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
          <input
            name="from_name"
            type="text"
            placeholder="نام و نام خانوادگی"
            required
            className="border border-c-soft rounded-xl p-2 focus:outline outline-c-accent"
          />
          <input
            name="from_email"
            type="email"
            placeholder="ایمیل"
            required
            className="border border-c-soft rounded-xl p-2 focus:outline outline-c-accent"
          />
        </div>
        <textarea
          name="message"
          placeholder="پیام خود را بنویسید..."
          rows={10}
          required
          className="border border-c-soft rounded-xl p-2 w-full focus:outline outline-c-accent"
        />
        <div className="flex w-full items-center justify-end gap-4">
          {formStatus && <p className="text-sm">{formStatus}</p>}
          <button
            type="submit"
            disabled={isSending}
            className="flex items-center gap-2 px-6 py-2 bg-c-soft rounded-xl hover:bg-c-accent-dark hover:text-c-soft disabled:opacity-50 disabled:cursor-not-allowed transition-all">
            <FaPaperPlane />
            <span>{isSending ? "در حال ارسال..." : "ارسال"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
