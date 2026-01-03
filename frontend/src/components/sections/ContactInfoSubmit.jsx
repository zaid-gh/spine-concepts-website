import React, { useState } from "react";
import axios from "axios";

const API_URL =
  import.meta?.env?.VITE_API_URL ||
  "https://spine-concepts-website.onrender.com";

const ContactInfoSubmit = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");

    try {
      await axios.post(`${API_URL}/send-email`, formData);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="w-full flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col gap-6"
      >
        {/* Name */}
        <div className="relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <img
              src="/assets/images/icon/user.svg"
              alt=""
              className="w-5 h-5 opacity-60"
            />
          </div>
          <input
            id="name"
            type="text"
            placeholder="Full name"
            value={formData.name}
            onChange={handleChange}
            disabled={status === "sending"}
            className="
              w-full h-12 pl-12 pr-4 rounded-2xl
              bg-custom-light-gray
              text-neutral-800 font-light
              shadow-sm
              focus:outline-none focus:ring-2 focus:ring-custom-logo-aqua
              transition
            "
          />
        </div>

        {/* Email */}
        <div className="relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <img
              src="/assets/images/icon/email.svg"
              alt=""
              className="w-5 h-5 opacity-60"
            />
          </div>
          <input
            id="email"
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            disabled={status === "sending"}
            className="
              w-full h-12 pl-12 pr-4 rounded-2xl
              bg-custom-light-gray
              text-neutral-800 font-light
              shadow-sm
              focus:outline-none focus:ring-2 focus:ring-custom-logo-aqua
              transition
            "
          />
        </div>

        {/* Message (sin icono flotante, UX más limpio) */}
        <div>
          <textarea
            id="message"
            placeholder="Write your message"
            value={formData.message}
            onChange={handleChange}
            disabled={status === "sending"}
            rows={5}
            className="
              w-full p-4 rounded-2xl
              bg-custom-light-gray
              text-neutral-800 font-light
              shadow-sm resize-none
              focus:outline-none focus:ring-2 focus:ring-custom-logo-aqua
              transition
            "
          />
        </div>

        {/* Submit */}
        <div className="flex justify-center pt-2">
          <button
            type="submit"
            disabled={status === "sending"}
            className="
              w-12 h-12 rounded-full
              flex items-center justify-center
              bg-custom-logo-aqua text-white
              shadow-sm
              hover:bg-[#B1DBE3]
              transition
              disabled:opacity-60
            "
          >
            {status === "sending" ? (
              <span className="w-5 h-5 border-2 border-white/60 border-t-white rounded-full animate-spin" />
            ) : (
              <img
                src="/assets/images/icon/send.svg"
                alt="Send"
                className="w-4 h-4"
              />
            )}
          </button>
        </div>

        {/* Feedback */}
        <div className="flex justify-center min-h-[24px]">
          {status === "success" && (
            <p className="text-sm text-green-600">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600">
              There was an error. Please try again.
            </p>
          )}
        </div>
      </form>
    </section>
  );
};

export default ContactInfoSubmit;
