'use client'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';


export default function EmailForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.current) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )
    .then(() => {
      setSubmitStatus('success');
      if (form.current) form.current.reset();
    })
    .catch(() => {
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="w-full space-y-4 font-serif">
      <div>
        <label htmlFor="user_name" className="mb-2 block text-sm uppercase tracking-[0.14em] text-[var(--text-color)]">
          Name
        </label>
        <input
          id="user_name"
          type="text"
          name="user_name"
          placeholder="Your Name"
          autoComplete="name"
          required
          className="surface-input w-full rounded border p-3 text-base"
        />
      </div>
      <div>
        <label htmlFor="user_email" className="mb-2 block text-sm uppercase tracking-[0.14em] text-[var(--text-color)]">
          Email
        </label>
        <input
          id="user_email"
          type="email"
          name="user_email"
          placeholder="Your Email"
          autoComplete="email"
          required
          className="surface-input w-full rounded border p-3 text-base"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm uppercase tracking-[0.14em] text-[var(--text-color)]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          required
          className="surface-input h-32 w-full rounded border p-3 text-base"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="min-h-11 w-full rounded bg-green-600 p-3 text-base text-white hover:bg-green-700 disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      <div aria-live="polite" aria-atomic="true" className="min-h-6">
        {submitStatus === 'success' && (
          <p className="text-green-600">Message sent successfully!</p>
        )}
        {submitStatus === 'error' && (
          <p className="text-red-600">Failed to send message. Please try again.</p>
        )}
      </div>
    </form>
  );
}
