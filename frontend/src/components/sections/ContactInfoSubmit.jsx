import React, { useState } from "react";
import axios from "axios";

const ContactInfoSubmit = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // "success" | "error" | null

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      await axios.post(
        "https://spine-concepts-website.onrender.com/send-email",
        formData
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className="w-full h-full flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="
          flex flex-col gap-6 w-full
          max-w-md mx-auto
        "
      >
        {/*  Name */}
        <div className="relative w-full">
          <input
            id="name"
            type="text"
            placeholder="Full name"
            value={formData.name}
            onChange={handleChange}
            className="
              w-full pl-12 pr-4 py-3 rounded-2xl
              bg-custom-light-gray shadow-sm
              focus:outline-none focus:ring-2 focus:ring-custom-logo-aqua
              font-light text-neutral-800
            "
          />
          <img
            src="/assets/images/icon/user.svg"
            alt="user icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-60"
          />
        </div>

        {/*Email */}
        <div className="relative w-full">
          <input
            id="email"
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="
              w-full pl-12 pr-4 py-3 rounded-2xl
              bg-custom-light-gray shadow-sm
              focus:outline-none focus:ring-2 focus:ring-custom-logo-aqua
              font-light text-neutral-800
            "
          />
          <img
            src="/assets/images/icon/email.svg"
            alt="email icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-60"
          />
        </div>

        {/* Message */}
        <div className="relative w-full">
          <textarea
            id="message"
            placeholder="Write your message"
            value={formData.message}
            onChange={handleChange}
            className="
              w-full h-40 p-4 rounded-2xl bg-custom-light-gray
              shadow-sm resize-none
              focus:outline-none focus:ring-2 focus:ring-custom-logo-aqua
              font-light text-neutral-800
            "
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="
              w-12 h-12 rounded-full flex items-center justify-center
              bg-custom-logo-aqua text-white
              hover:bg-[#B1DBE3] transition shadow-sm
            "
          >
            <img
              src="/assets/images/icon/send.svg"
              alt="Send"
              className="w-4 h-4"
            />
          </button>
        </div>

        {/* Status Messages*/}
        {status === "success" && (
          <p className="text-sm text-green-600 text-center">
            Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-600 text-center">
            There was an error. Please try again.
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactInfoSubmit;
