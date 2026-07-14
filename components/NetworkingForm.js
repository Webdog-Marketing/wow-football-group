"use client";

import { useState } from "react";
import { countryCodes } from "../data/countryCodes";

const initialState = {
  name: "",
  email: "",
  club: "",
  role: "",
  whatsappCode: "+44",
  whatsapp: "",
  message: "",
  website: "", // honeypot
};

export default function NetworkingForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ state: "loading", message: "" });

    try {
      const res = await fetch("/api/networking-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          whatsapp: form.whatsapp.trim()
            ? `${form.whatsappCode} ${form.whatsapp.trim()}`
            : "",
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus({
        state: "success",
        message: "Thanks for signing up — we'll send your WhatsApp invite shortly.",
      });
      setForm(initialState);
    } catch (err) {
      setStatus({ state: "error", message: err.message });
    }
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      {/* Honeypot field, hidden from real users */}
      <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
        <label htmlFor="website-net">Leave this field empty</label>
        <input
          id="website-net"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={update("website")}
        />
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="net-name">Full name *</label>
          <input id="net-name" type="text" required value={form.name} onChange={update("name")} />
        </div>
        <div className="field">
          <label htmlFor="net-email">Email *</label>
          <input
            id="net-email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
          />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="net-club">Club / organisation</label>
          <input id="net-club" type="text" value={form.club} onChange={update("club")} />
        </div>
        <div className="field">
          <label htmlFor="net-role">Your role</label>
          <input id="net-role" type="text" value={form.role} onChange={update("role")} />
        </div>
      </div>

      <div className="field">
        <label htmlFor="net-whatsapp">WhatsApp number *</label>
        <div className="phone-row">
          <select
            id="net-whatsappCode"
            aria-label="Country code"
            value={form.whatsappCode}
            onChange={update("whatsappCode")}
          >
            {countryCodes.map((c) => (
              <option key={c.name} value={c.dial}>
                {c.dial} {c.name}
              </option>
            ))}
          </select>
          <input
            id="net-whatsapp"
            type="tel"
            required
            placeholder="7XXX XXXXXX"
            value={form.whatsapp}
            onChange={update("whatsapp")}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="net-message">Anything else we should know?</label>
        <textarea
          id="net-message"
          rows={4}
          value={form.message}
          onChange={update("message")}
        />
      </div>

      <button className="btn btn-primary" type="submit" disabled={status.state === "loading"}>
        {status.state === "loading" ? "Sending…" : "Join the network"}
      </button>

      {status.state === "success" && <p className="form-status success">{status.message}</p>}
      {status.state === "error" && <p className="form-status error">{status.message}</p>}

      <p className="form-note">
        By submitting this form you agree to our{" "}
        <a href="/privacy-policy">Privacy Policy</a>. We&rsquo;ll add your WhatsApp number to
        our football networking group and won&rsquo;t share it outside WOW Football Group.
      </p>
    </form>
  );
}
