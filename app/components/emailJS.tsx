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
    .then((result) => {
      setSubmitStatus('success');
      if (form.current) form.current.reset();
    })
    .catch((error) => {
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4 w-full font-serif ">
      <div>
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full p-2 border rounded dark:bg-green-800 border-green-700"
        />
      </div>
      <div>
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full p-2 border rounded dark:bg-green-800 border-green-700"
        />
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full p-2 border rounded h-32 dark:bg-green-800 border-green-700"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      {submitStatus === 'success' && (
        <p className="text-green-600">Message sent successfully!</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-red-600">Failed to send message. Please try again.</p>
      )}
    </form>
  );
}
