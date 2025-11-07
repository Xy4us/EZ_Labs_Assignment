import React, { useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [statusText, setStatusText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setStatusText("");
  };

  const validate = () => {
    const err = {};
    if (!form.user_name.trim()) err.user_name = "Name is required";
    if (!form.user_email.trim()) err.user_email = "Email is required";
    else if (!emailRegex.test(form.user_email.trim()))
      err.user_email = "Enter a valid email";
    if (form.user_phone && !/^\+?[\d\s\-()]{7,}$/.test(form.user_phone.trim()))
      err.user_phone = "Enter a valid phone";
    if (!form.message.trim()) err.message = "Message is required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusText("");
    if (!validate()) return;
    if (!API_URL) {
      setStatusText("API URL not configured");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.user_name,
          email: form.user_email,
          phone: form.user_phone,
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatusText("Form Submitted");
        setForm({ user_name: "", user_email: "", user_phone: "", message: "" });
        setErrors({});
      } else {
        const txt = await res.text();
        console.error("API error", res.status, txt);
        setStatusText(`Submit failed (${res.status})`);
      }
    } catch (err) {
      console.error("Network error:", err);
      setStatusText("Submit failed (network error)");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-center gap-y-4"
      noValidate
    >
      <input
        name="user_name"
        type="text"
        placeholder="Your name*"
        value={form.user_name}
        onChange={handleChange}
        required
        className="bg-white focus:outline-none w-full p-2 text-2xl rounded-lg"
        aria-invalid={!!errors.user_name}
      />
      {errors.user_name && (
        <p className="text-red-600 text-sm">{errors.user_name}</p>
      )}

      <input
        name="user_email"
        type="email"
        placeholder="Your email*"
        value={form.user_email}
        onChange={handleChange}
        required
        className="bg-white focus:outline-none w-full p-2 text-2xl rounded-lg"
        aria-invalid={!!errors.user_email}
      />
      {errors.user_email && (
        <p className="text-red-600 text-sm">{errors.user_email}</p>
      )}

      <input
        name="user_phone"
        type="tel"
        placeholder="Phone"
        value={form.user_phone}
        onChange={handleChange}
        className="focus:outline-none w-full p-2 text-2xl rounded-lg"
      />
      {errors.user_phone && (
        <p className="text-red-600 text-sm">{errors.user_phone}</p>
      )}

      <textarea
        name="message"
        rows="4"
        placeholder="Your message*"
        value={form.message}
        onChange={handleChange}
        required
        className="bg-white focus:outline-none w-full p-2 text-2xl rounded-lg"
        aria-invalid={!!errors.message}
      />
      {errors.message && (
        <p className="text-red-600 text-sm">{errors.message}</p>
      )}

      <div className="flex items-center gap-4 mt-2">
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-[#F15D2B] text-white rounded disabled:opacity-60"
        >
          {loading ? "Sending..." : "Submit"}
        </button>

        <div
          role="status"
          aria-live="polite"
          className={`text-sm ${
            statusText === "Form Submitted" ? "text-green-600" : "text-red-600"
          }`}
        >
          {statusText}
        </div>
      </div>
    </form>
  );
}
