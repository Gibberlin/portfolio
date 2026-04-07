'use client'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

interface FormErrors {
  user_name?: string;
  user_email?: string;
  message?: string;
}

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateForm = (data: FormData): FormErrors => {
  const errors: FormErrors = {};
  
  const name = (data.get('user_name') as string)?.trim() || '';
  const email = (data.get('user_email') as string)?.trim() || '';
  const message = (data.get('message') as string)?.trim() || '';

  if (!name) {
    errors.user_name = 'Name is required';
  } else if (name.length < 2) {
    errors.user_name = 'Name must be at least 2 characters';
  } else if (name.length > 100) {
    errors.user_name = 'Name must be less than 100 characters';
  }

  if (!email) {
    errors.user_email = 'Email is required';
  } else if (!validateEmail(email)) {
    errors.user_email = 'Please enter a valid email address';
  }

  if (!message) {
    errors.message = 'Message is required';
  } else if (message.length < 10) {
    errors.message = 'Message must be at least 10 characters';
  } else if (message.length > 5000) {
    errors.message = 'Message must be less than 5000 characters';
  }

  return errors;
};

export default function EmailForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.current) return;

    // Validate form
    const formData = new FormData(form.current);
    const validationErrors = validateForm(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await Promise.race([
        emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        ),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Request timeout')), 10000)
        ),
      ]);

      setSubmitStatus('success');
      if (form.current) form.current.reset();
      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      if (error instanceof Error) {
        if (error.message === 'Request timeout') {
          setErrorMessage('Request timed out. Please check your connection and try again.');
        } else if (error.message.includes('network')) {
          setErrorMessage('Network error. Please check your internet connection.');
        } else {
          setErrorMessage('Failed to send message. Please try again or contact via social media.');
        }
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="w-full space-y-4 font-serif">
      <div>
        <label htmlFor="user_name" className="mb-2 block text-sm uppercase tracking-[0.14em] text-[var(--text-color)]">
          Name <span aria-label="required">*</span>
        </label>
        <input
          id="user_name"
          type="text"
          name="user_name"
          placeholder="Your Name"
          autoComplete="name"
          maxLength={100}
          required
          disabled={isSubmitting}
          aria-invalid={errors.user_name ? 'true' : 'false'}
          aria-describedby={errors.user_name ? 'user_name-error' : undefined}
          className="surface-input w-full rounded border p-3 text-base disabled:opacity-50 disabled:cursor-not-allowed"
        />
        {errors.user_name && (
          <p id="user_name-error" className="mt-1 text-xs text-red-600 dark:text-red-400">
            {errors.user_name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="user_email" className="mb-2 block text-sm uppercase tracking-[0.14em] text-[var(--text-color)]">
          Email <span aria-label="required">*</span>
        </label>
        <input
          id="user_email"
          type="email"
          name="user_email"
          placeholder="your.email@example.com"
          autoComplete="email"
          required
          disabled={isSubmitting}
          aria-invalid={errors.user_email ? 'true' : 'false'}
          aria-describedby={errors.user_email ? 'user_email-error' : undefined}
          className="surface-input w-full rounded border p-3 text-base disabled:opacity-50 disabled:cursor-not-allowed"
        />
        {errors.user_email && (
          <p id="user_email-error" className="mt-1 text-xs text-red-600 dark:text-red-400">
            {errors.user_email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 flex items-center justify-between">
          <span className="text-sm uppercase tracking-[0.14em] text-[var(--text-color)]">
            Message <span aria-label="required">*</span>
          </span>
          <span className="text-xs text-[var(--muted-text)]">
            Max 5000 characters
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message here..."
          required
          maxLength={5000}
          disabled={isSubmitting}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className="surface-input h-32 w-full rounded border p-3 text-base disabled:opacity-50 disabled:cursor-not-allowed resize-none"
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-600 dark:text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="min-h-11 w-full rounded bg-[var(--accent-primary)] p-3 text-base font-semibold text-black transition-all hover:shadow-lg hover:shadow-[var(--accent-primary)]/30 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)]"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <span className="animate-spin">⟳</span>
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </button>

      {/* Status Messages */}
      <div aria-live="polite" aria-atomic="true" role="status" className="min-h-6 space-y-2">
        {submitStatus === 'success' && (
          <div className="flex items-center gap-2 rounded bg-green-600/20 p-3 text-sm text-green-600 dark:bg-green-600/30 dark:text-green-400 border border-green-600/30">
            <span>✓</span>
            <p>Message sent successfully! I'll get back to you soon.</p>
          </div>
        )}
        {submitStatus === 'error' && errorMessage && (
          <div className="flex items-start gap-2 rounded bg-red-600/20 p-3 text-sm text-red-600 dark:bg-red-600/30 dark:text-red-400 border border-red-600/30">
            <span className="mt-0.5">⚠</span>
            <div>
              <p className="font-semibold">Failed to send message</p>
              <p className="mt-1">{errorMessage}</p>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}
