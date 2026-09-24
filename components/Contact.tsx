import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, Copy, AlertCircle, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
const [sending, setSending] = useState(false);
const [sendError, setSendError] = useState('');
  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please add a brief subject.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please type your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!validate()) return;

  setSending(true);
  setSendError('');
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: '48e42f7b-787b-4f65-9124-b53480e349b3',
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }),
    });
    const result = await response.json();
    if (result.success) {
      setSubmitted(true);
    } else {
      setSendError('Sorry, your message could not be sent. Please try again or email me directly.');
    }
  } catch {
    setSendError('Sorry, something went wrong. Please try again or email me directly.');
  } finally {
    setSending(false);
  }
};

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `Hi Yusra,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-16 md:py-24 bg-white/50 border-t border-[#073B2A]/10" aria-label="Contact Section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#DCE9D8] text-[#073B2A] text-xs font-semibold tracking-wider uppercase mb-3">
            <Mail className="w-3.5 h-3.5 text-[#073B2A]" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#073B2A] tracking-tight">
            Let's Build Something.
          </h2>
          <div className="w-12 h-1 bg-[#F5B51B] mx-auto mt-3 rounded-full" />
          <p className="text-sm sm:text-base text-[#17201B]/80 mt-4 leading-relaxed">
            Have an opportunity, project idea, or collaboration in mind? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Email Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#073B2A]/10 shadow-xs">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[#DCE9D8] flex items-center justify-center text-[#073B2A]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-[#073B2A]">
                    Email Inquiry
                  </h3>
                  <p className="text-xs text-[#66736B]">Direct communication</p>
                </div>
              </div>

              <div className="bg-[#F5F0DE]/80 p-3 rounded-2xl border border-[#073B2A]/10 flex items-center justify-between gap-2 mt-2">
                <span className="text-xs sm:text-sm font-mono font-medium text-[#073B2A] truncate">
                  {PERSONAL_INFO.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-white hover:bg-[#DCE9D8] text-[#073B2A] transition-colors border border-[#073B2A]/10 shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#073B2A] hover:underline"
                >
                  <span>Open in Mail Client</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#F5B51B]" />
                </a>
                {copiedEmail && (
                  <span className="text-xs text-emerald-600 font-medium">
                    Copied to clipboard!
                  </span>
                )}
              </div>
            </div>

            {/* LinkedIn Profile Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#073B2A]/10 shadow-xs">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 rounded-2xl bg-[#DCE9D8] flex items-center justify-center text-[#073B2A]">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-[#073B2A]">
                    LinkedIn
                  </h3>
                  <p className="text-xs text-[#66736B]">Professional Network</p>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between gap-2 p-3 rounded-2xl bg-[#F5F0DE]/60 border border-[#073B2A]/10">
                <span className="text-xs font-mono text-[#073B2A] truncate min-w-0">
                  {PERSONAL_INFO.linkedinPlaceholderText}
                </span>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 bg-white hover:bg-[#DCE9D8] text-xs font-semibold text-[#073B2A] rounded-xl border border-[#073B2A]/10 transition-colors inline-flex items-center space-x-1 shrink-0"
                >
                  <span>Connect</span>
                  <ArrowUpRight className="w-3 h-3 text-[#073B2A]" />
                </a>
              </div>
            </div>

            {/* GitHub Profile Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#073B2A]/10 shadow-xs">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 rounded-2xl bg-[#DCE9D8] flex items-center justify-center text-[#073B2A]">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-[#073B2A]">
                    GitHub
                  </h3>
                  <p className="text-xs text-[#66736B]">Code Repositories</p>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between gap-2 p-3 rounded-2xl bg-[#F5F0DE]/60 border border-[#073B2A]/10">
                <span className="text-xs font-mono text-[#073B2A] truncate min-w-0">
                  {PERSONAL_INFO.githubPlaceholderText}
                </span>
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 bg-white hover:bg-[#DCE9D8] text-xs font-semibold text-[#073B2A] rounded-xl border border-[#073B2A]/10 transition-colors inline-flex items-center space-x-1 shrink-0"
                >
                  <span>View Repos</span>
                  <ArrowUpRight className="w-3 h-3 text-[#073B2A]" />
                </a>
              </div>
            </div>

            {/* Location & Status */}
            <div className="p-4 rounded-2xl bg-[#DCE9D8]/50 border border-[#073B2A]/10 flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-[#073B2A] shrink-0" />
              <div className="text-xs text-[#073B2A]">
                <span className="font-bold block">{PERSONAL_INFO.location}</span>
                <span>Available for on-site (Rawalpindi/Islamabad) &amp; remote roles</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#073B2A]/10 shadow-sm relative">
              
              {submitted ? (
                <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-[#073B2A]">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-sm text-[#66736B] max-w-md mx-auto leading-relaxed">
                    Your message has been sent successfully. I'll get back to you as soon as possible.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={mailtoLink}
                      className="px-6 py-3 rounded-full bg-[#073B2A] text-[#F5F0DE] hover:bg-[#0B4A35] font-semibold text-sm transition-colors flex items-center space-x-2"
                    >
                      <span>Send via Email App</span>
                      <Send className="w-4 h-4 text-[#F5B51B]" />
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-5 py-3 rounded-full border border-[#073B2A]/20 text-xs font-semibold text-[#073B2A] hover:bg-[#F5F0DE] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-[#073B2A] mb-1.5">
                        Your Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full px-4 py-3 rounded-2xl bg-[#F5F0DE]/50 border text-sm text-[#17201B] placeholder-[#66736B]/60 transition-all focus:outline-hidden focus:bg-white focus:ring-2 ${
                          errors.name
                            ? 'border-red-500 focus:ring-red-400'
                            : 'border-[#073B2A]/15 focus:border-[#073B2A] focus:ring-[#073B2A]/20'
                        }`}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'error-name' : undefined}
                      />
                      {errors.name && (
                        <p id="error-name" className="text-xs text-red-600 mt-1 flex items-center space-x-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-[#073B2A] mb-1.5">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="e.g. sarah@company.com"
                        className={`w-full px-4 py-3 rounded-2xl bg-[#F5F0DE]/50 border text-sm text-[#17201B] placeholder-[#66736B]/60 transition-all focus:outline-hidden focus:bg-white focus:ring-2 ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-400'
                            : 'border-[#073B2A]/15 focus:border-[#073B2A] focus:ring-[#073B2A]/20'
                        }`}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'error-email' : undefined}
                      />
                      {errors.email && (
                        <p id="error-email" className="text-xs text-red-600 mt-1 flex items-center space-x-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-bold uppercase tracking-wider text-[#073B2A] mb-1.5">
                      Subject <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: undefined });
                      }}
                      placeholder="e.g. Internship Opportunity / Web Development Project"
                      className={`w-full px-4 py-3 rounded-2xl bg-[#F5F0DE]/50 border text-sm text-[#17201B] placeholder-[#66736B]/60 transition-all focus:outline-hidden focus:bg-white focus:ring-2 ${
                        errors.subject
                          ? 'border-red-500 focus:ring-red-400'
                          : 'border-[#073B2A]/15 focus:border-[#073B2A] focus:ring-[#073B2A]/20'
                      }`}
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'error-subject' : undefined}
                    />
                    {errors.subject && (
                      <p id="error-subject" className="text-xs text-red-600 mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-[#073B2A] mb-1.5">
                      Message <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Share details regarding your team, role specifications, or freelance project requirements..."
                      className={`w-full px-4 py-3 rounded-2xl bg-[#F5F0DE]/50 border text-sm text-[#17201B] placeholder-[#66736B]/60 transition-all focus:outline-hidden focus:bg-white focus:ring-2 resize-none ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-400'
                          : 'border-[#073B2A]/15 focus:border-[#073B2A] focus:ring-[#073B2A]/20'
                      }`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'error-message' : undefined}
                    />
                    {errors.message && (
                      <p id="error-message" className="text-xs text-red-600 mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  {sendError && (
  <p className="text-xs text-red-600 flex items-center space-x-1">
    <AlertCircle className="w-3.5 h-3.5" />
    <span>{sendError}</span>
  </p>
)}
                  <button
                    id="submit-contact-button"
                    type="submit"
                    disabled={sending}
                    className="w-full py-4 px-6 rounded-2xl bg-[#073B2A] text-[#F5F0DE] hover:bg-[#0B4A35] font-semibold text-sm sm:text-base transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#F5B51B]"
                  >
                    <span>{sending ? 'Sending...' : 'Send Message'}</span>.
                    <Send className="w-4 h-4 text-[#F5B51B]" />
                  </button>

                  <p className="text-[11px] text-[#66736B] text-center pt-1">
                   Direct inquiries are welcomed. I'll get back to you as soon as possible.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
