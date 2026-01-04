import React, { useMemo, useState } from "react";
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
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const errors = useMemo(() => {
    const e = {};
    if (!formData.name.trim()) e.name = "Please enter your name.";
    if (!formData.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()))
      e.email = "Please enter a valid email.";
    if (!formData.message.trim()) e.message = "Please write a message.";
    else if (formData.message.trim().length < 10)
      e.message = "Please add a bit more detail (min 10 characters).";
    return e;
  }, [formData]);

  const isValid = Object.keys(errors).length === 0;
  const isSending = status === "sending";

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (status === "error") setStatus("idle");
  };

  const handleBlur = (e) => {
    const { id } = e.target;
    setTouched((prev) => ({ ...prev, [id]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    if (!isValid || isSending) return;

    setStatus("sending");
    try {
      const res = await axios.post(`${API_URL}/send-email`, formData, {
        timeout: 15000,
      });
      if (!res?.data?.ok) throw new Error(res?.data?.error || "Send failed");
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTouched({ name: false, email: false, message: false });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const Field = ({ id, label, iconSrc, children, error }) => {
    const showError = touched[id] && error;
    return (
      <div className="w-full">
        <label
          htmlFor={id}
          className="block text-xs font-medium text-neutral-600 mb-2"
        >
          {label}
        </label>

        <div className="relative">
          {iconSrc ? (
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <img src={iconSrc} alt="" className="w-5 h-5 opacity-60" />
            </div>
          ) : null}

          {children}
        </div>

        <div className="mt-2 min-h-[18px]">
          {showError ? <p className="text-xs text-red-600">{error}</p> : null}
        </div>
      </div>
    );
  };

  return (
    <section className="w-full flex justify-center">
      <div
        className="
          w-full max-w-xl
          rounded-3xl
          border border-neutral-200/70
          bg-white/70
          backdrop-blur
          shadow-[0_10px_30px_rgba(0,0,0,0.06)]
          p-5 sm:p-7 lg:p-8
        "
      >
        <div className="mb-6">
          <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">
            Get in touch
          </p>
          <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-neutral-900">
            Send us a message
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            We’ll reply as soon as possible. Your information stays private.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field
              id="name"
              label="Full name"
              iconSrc="/assets/images/icon/user.svg"
              error={errors.name}
            >
              <input
                id="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSending}
                className={`
                  w-full h-12 pl-12 pr-4 rounded-2xl
                  bg-custom-light-gray
                  text-neutral-800 font-light
                  shadow-sm
                  border border-transparent
                  focus:outline-none focus:ring-2 focus:ring-custom-logo-aqua/70
                  transition
                  ${
                    touched.name && errors.name
                      ? "ring-2 ring-red-300/70 border-red-200"
                      : ""
                  }
                  ${isSending ? "opacity-80" : ""}
                `}
              />
            </Field>

            <Field
              id="email"
              label="Email address"
              iconSrc="/assets/images/icon/email.svg"
              error={errors.email}
            >
              <input
                id="email"
                type="email"
                placeholder="you@email.com"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSending}
                className={`
                  w-full h-12 pl-12 pr-4 rounded-2xl
                  bg-custom-light-gray
                  text-neutral-800 font-light
                  shadow-sm
                  border border-transparent
                  focus:outline-none focus:ring-2 focus:ring-custom-logo-aqua/70
                  transition
                  ${
                    touched.email && errors.email
                      ? "ring-2 ring-red-300/70 border-red-200"
                      : ""
                  }
                  ${isSending ? "opacity-80" : ""}
                `}
              />
            </Field>
          </div>

          <Field id="message" label="Message" error={errors.message}>
            <textarea
              id="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSending}
              rows={6}
              className={`
                w-full p-4 rounded-2xl
                bg-custom-light-gray
                text-neutral-800 font-light
                shadow-sm resize-none
                border border-transparent
                focus:outline-none focus:ring-2 focus:ring-custom-logo-aqua/70
                transition
                ${
                  touched.message && errors.message
                    ? "ring-2 ring-red-300/70 border-red-200"
                    : ""
                }
                ${isSending ? "opacity-80" : ""}
              `}
            />
          </Field>

          <div className="flex items-center justify-between gap-4">
            <p className="text-xs text-neutral-500">
              {formData.message.trim().length > 0
                ? `${formData.message.trim().length} characters`
                : " "}
            </p>

            <button
              type="submit"
              disabled={!isValid || isSending}
              className={`
                inline-flex items-center justify-center gap-2
                rounded-full
                px-5 h-12
                bg-custom-logo-aqua text-white
                shadow-sm
                transition
                active:scale-[0.99]
                ${
                  !isValid || isSending
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:bg-[#B1DBE3] hover:shadow-md"
                }
              `}
            >
              {isSending ? (
                <>
                  <span className="w-5 h-5 border-2 border-white/60 border-t-white rounded-full animate-spin" />
                  <span className="text-sm font-medium">Sending</span>
                </>
              ) : (
                <>
                  <img
                    src="/assets/images/icon/send.svg"
                    alt=""
                    className="w-4 h-4"
                  />
                  <span className="text-sm font-medium">Send message</span>
                </>
              )}
            </button>
          </div>

          <div className="min-h-[40px] flex justify-center items-center">
            {status === "success" && (
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm border border-emerald-200 bg-emerald-50 text-emerald-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Message sent successfully.
              </div>
            )}

            {status === "error" && (
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm border border-red-200 bg-red-50 text-red-700">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                Something went wrong. Please try again.
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactInfoSubmit;
