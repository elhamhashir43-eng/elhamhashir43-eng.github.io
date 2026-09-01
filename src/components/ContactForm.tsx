'use client';

import { FormEvent, useState } from 'react';

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  if (sent) {
    return (
      <div className="form-success" role="status">
        <span className="gold-rule" aria-hidden="true" />
        <h2>Thank you.</h2>
        <p>Your enquiry has been received. This presentation form is ready to connect to the client’s preferred inbox.</p>
        <button className="text-button" type="button" onClick={() => setSent(false)}>Send another enquiry →</button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-pair">
        <label>Name<input name="name" required autoComplete="name" /></label>
        <label>Company<input name="company" autoComplete="organization" /></label>
      </div>
      <div className="field-pair">
        <label>Email<input name="email" type="email" required autoComplete="email" /></label>
        <label>Phone<input name="phone" type="tel" autoComplete="tel" /></label>
      </div>
      <label>Message<textarea name="message" rows={5} required /></label>
      <button className="button form-button" type="submit">Send Enquiry <span aria-hidden="true">→</span></button>
    </form>
  );
}
