import React, { useState, FormEvent, ChangeEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    submitting: boolean;
    message: string | null;
    success: boolean;
  }>({ submitting: false, message: null, success: false });

  const accessKey =
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
    process.env.REACT_APP_API_ACCESS_KEY;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!accessKey) {
      setStatus({
        submitting: false,
        message: "Contact form is not configured. Please set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.",
        success: false,
      });
      return;
    }
    setStatus({ submitting: true, message: null, success: false });

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...formData,
          access_key: accessKey,
        }),
      });
      const result = await res.json();

      if (result.success) {
        setStatus({
          submitting: false,
          message: "Your message has been sent. I'll get back to you soon!",
          success: true,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.message || "Something went wrong.");
      }
    } catch (err) {
      setStatus({
        submitting: false,
        message: err instanceof Error ? err.message : "Something went wrong. Please try again.",
        success: false,
      });
    }
  };

  return (
    <div className="contact-form">
      {status.message && (
        <div
          className={`contact-form__feedback ${status.success ? "contact-form__feedback--success" : "contact-form__feedback--error"}`}
          role="alert"
        >
          {status.message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="contact-form__form">
        <label htmlFor="contact-name" className="contact-form__label">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
          className="contact-form__input"
        />
        <label htmlFor="contact-email" className="contact-form__label">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          required
          className="contact-form__input"
        />
        <label htmlFor="contact-message" className="contact-form__label">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Your message..."
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="contact-form__textarea"
        />
        <button
          type="submit"
          disabled={status.submitting}
          className="btn btn--primary contact-form__submit"
        >
          {status.submitting ? "Sending…" : "Send message"}
        </button>
      </form>
      <style jsx>{`
        .contact-form {
          max-width: 480px;
          margin: 0 auto;
          padding: var(--space-xl);
          background: var(--color-bg);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
        }
        .contact-form__feedback {
          padding: var(--space-md);
          border-radius: var(--radius-sm);
          margin-bottom: var(--space-lg);
          font-size: 0.9375rem;
        }
        .contact-form__feedback--success {
          background: rgba(26, 95, 74, 0.12);
          color: var(--color-success);
        }
        .contact-form__feedback--error {
          background: rgba(179, 58, 58, 0.1);
          color: var(--color-error);
        }
        .contact-form__form {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }
        .contact-form__label {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-ink);
        }
        .contact-form__input,
        .contact-form__textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          font-family: var(--font-sans);
          font-size: 1rem;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          background: var(--color-bg-elevated);
          color: var(--color-ink);
          transition: border-color var(--transition);
        }
        .contact-form__input:focus,
        .contact-form__textarea:focus {
          outline: none;
          border-color: var(--color-accent);
        }
        .contact-form__textarea {
          resize: vertical;
          min-height: 120px;
        }
        .contact-form__submit {
          margin-top: var(--space-md);
        }
      `}</style>
    </div>
  );
}
