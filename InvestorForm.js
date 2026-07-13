"use client";

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  organisation: "",
  investmentRange: "",
  message: "",
  website: "", // honeypot
};

export default function InvestorForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ state: "loading", message: "" });

    try {
      const res = await fetch("/api/investor-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus({
        state: "success",
        message: "Thanks — we've received your enquiry and will be in touch shortly.",
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
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
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
          <label htmlFor="name">Full name *</label>
          <input id="name" type="text" required value={form.name} onChange={update("name")} />
        </div>
        <div className="field">
          <label htmlFor="email">Email *</label>
          <input id="email" type="email" required value={form.email} onChange={update("email")} />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" type="tel" value={form.phone} onChange={update("phone")} />
        </div>
        <div className="field">
          <label htmlFor="organisation">Organisation</label>
          <input
            id="organisation"
            type="text"
            value={form.organisation}
            onChange={update("organisation")}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="investmentRange">Indicative investment range</label>
        <select id="investmentRange" value={form.investmentRange} onChange={update("investmentRange")}>
          <option value="">Select a range</option>
          <option value="Under £50k">Under £50k</option>
          <option value="£50k – £250k">£50k – £250k</option>
          <option value="£250k – £1m">£250k – £1m</option>
          <option value="£1m+">£1m+</option>
          <option value="Prefer to discuss">Prefer to discuss</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">Tell us about your interest *</label>
        <textarea
          id="message"
          rows={5}
          required
          value={form.message}
          onChange={update("message")}
        />
      </div>

      <button className="btn btn-primary" type="submit" disabled={status.state === "loading"}>
        {status.state === "loading" ? "Sending…" : "Submit enquiry"}
      </button>

      {status.state === "success" && <p className="form-status success">{status.message}</p>}
      {status.state === "error" && <p className="form-status error">{status.message}</p>}

      <p className="form-note">
        By submitting this form you agree to our{" "}
        <a href="/privacy-policy">Privacy Policy</a>. We&rsquo;ll only use your details to
        respond to your enquiry.
      </p>
    </form>
  );
}
