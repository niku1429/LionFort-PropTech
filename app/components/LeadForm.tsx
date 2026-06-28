"use client";

import { useState } from "react";

export default function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const res = await fetch("/api/telegram", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      setMessage("Lead submitted successfully.");
      setForm({
        name: "",
        phone: "",
        email: "",
      });
    } else {
      setMessage("Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <section className="lead-section">

      <div className="container">

        <div className="lead-box">

          <h2>Get Free Guidance</h2>

          <p>
            Fill in your details and we&apos;ll contact you soon.
          </p>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              type="tel"
              placeholder="Contact Number"
              required
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <button type="submit">
              {loading ? "Submitting..." : "Submit"}
            </button>

          </form>

          {message && <p className="success">{message}</p>}

        </div>

      </div>

    </section>
  );
}

