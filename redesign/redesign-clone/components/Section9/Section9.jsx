"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, ArrowLeft } from "lucide-react";
import ImageReveal from "@/components/common/ImageReveal";

// Deliberate, graceful animation duration for form switching (sliding up to fade out / rising from bottom)
const FORM_SWITCH_DURATION = 2800; // ms (2.8 seconds - deeply unhurried, serene, slow)
const FORM_SWITCH_EASING = "cubic-bezier(0.45, 0, 0.15, 1)"; // Deeply cushioned ease-in-out curve

export default function Section9({ className = "" }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    sessionType: "in-person", // "in-person" | "telehealth"
    preferredTime: "Morning (9am - 12pm)",
    note: "",
  });

  const handleOpenForm = (e) => {
    if (e) e.preventDefault();
    setIsFormOpen(true);
    setIsSubmitted(false);
  };

  const handleCloseForm = (e) => {
    if (e) e.preventDefault();
    setIsFormOpen(false);
    setTimeout(() => {
      setIsSubmitted(false);
    }, FORM_SWITCH_DURATION);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="booking"
      aria-label="Schedule an Intake Call"
      className={`relative w-full bg-secondary overflow-hidden min-h-0 lg:min-h-[66vh] flex items-center ${className}`}
    >
      <div className="w-full px-6 py-10 md:px-8 md:py-10 lg:px-0 lg:py-[95.04px]">
        <div className="w-full">
          <div className="fluid-grid-sec9 w-full">

            {/* Left Media Asset (Armchair Sanctuary Detail - stays intact) */}
            <div className="sec9-media-left w-full h-full">
              <ImageReveal direction="up" className="relative w-full h-full min-h-0 overflow-hidden">
                <Image
                  src="/images/sections/cta-sanctuary-detail.jpg"
                  alt="Armchair with cushions and vase beside a warm textured wall"
                  fill
                  sizes="(max-width: 1024px) 70vw, 20vw"
                  className="object-cover object-center block"
                />
                <div className="media-overlay" />
              </ImageReveal>
            </div>

            {/* Center Content Block: Bidirectional Sliding Transition */}
            <div className="sec9-content-center w-full h-full relative grid grid-cols-1 grid-rows-1 items-center overflow-hidden">

              {/* View 1: Default Editorial Text Block (Slides UP & fades out to the top) */}
              <div
                style={{
                  transform: isFormOpen ? "translateY(-70px)" : "translateY(0px)",
                  opacity: isFormOpen ? 0 : 1,
                  pointerEvents: isFormOpen ? "none" : "auto",
                  transition: `transform ${FORM_SWITCH_DURATION}ms ${FORM_SWITCH_EASING}, opacity ${FORM_SWITCH_DURATION}ms ${FORM_SWITCH_EASING}`,
                  willChange: "transform, opacity",
                }}
                className="col-start-1 row-start-1 w-full flex flex-col justify-center"
              >
                {/* Eyebrow */}
                <p className="font-sans text-[11px] sm:text-[14px] font-medium tracking-[0.14em] uppercase text-accent m-0 mb-3">
                  Take the first step
                </p>

                {/* Heading */}
                <h2 className="font-heading font-light text-[26px] sm:text-[34px] md:text-[40px] lg:text-[47.8px] leading-[1.2] tracking-[-0.01em] text-ink m-0 mb-5">
                  <span className="block">Ready to slow down and</span>
                  <span
                    style={{ fontFamily: "var(--font-wedding-day), 'WeddingdayPersonal', cursive" }}
                    className="font-normal text-accent block text-[1.35em] sm:text-[1.45em] md:text-[1.55em] leading-[1.1] mt-1 sm:mt-2"
                  >
                    reconnect?
                  </span>
                </h2>

                {/* Body Copy */}
                <p className="font-body font-light text-[14px] sm:text-[15.5px] lg:text-[16.7px] leading-[1.7] text-ink m-0 mb-6 max-w-[620px]">
                  If you&apos;re looking for a therapist who combines practical tools with depth-oriented work—and who understands the realities of living and working in a fast-paced environment—I may be a good fit.
                </p>

                {/* Consultation CTA Trigger */}
                <div>
                  <button
                    type="button"
                    onClick={handleOpenForm}
                    className="btn-sharp-filled inline-block w-full sm:w-auto text-center py-4 px-8 text-[12.5px] sm:text-[13px] tracking-[0.14em] uppercase font-semibold bg-primary text-on-primary border-2 border-primary rounded-none shadow-sm transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-primary-hover hover:border-primary-hover hover:-translate-y-[2px] active:translate-y-0 cursor-pointer"
                  >
                    Schedule a consultation
                  </button>
                  <p className="font-sans text-[11px] sm:text-[12.5px] text-muted tracking-[0.03em] mt-3.5 text-center sm:text-left">
                    In-person in Santa Monica &bull; Secure telehealth in California
                  </p>
                </div>
              </div>

              {/* View 2: Interactive Appointment Booking Form (Slides IN from the bottom) */}
              <div
                style={{
                  transform: isFormOpen ? "translateY(0px)" : "translateY(70px)",
                  opacity: isFormOpen ? 1 : 0,
                  pointerEvents: isFormOpen ? "auto" : "none",
                  transition: `transform ${FORM_SWITCH_DURATION}ms ${FORM_SWITCH_EASING}, opacity ${FORM_SWITCH_DURATION}ms ${FORM_SWITCH_EASING}`,
                  willChange: "transform, opacity",
                }}
                className="col-start-1 row-start-1 w-full flex flex-col justify-center"
              >
                {!isSubmitted ? (
                  /* Form Input View */
                  <div className="bg-white/90 backdrop-blur-md border border-line p-6 sm:p-7 shadow-[0_10px_35px_rgba(43,45,47,0.06)] max-w-[620px] w-full">
                    
                    {/* Form Header */}
                    <div className="flex items-start justify-between mb-5 pb-3 border-b border-line/70">
                      <div>
                        <span className="font-sans text-[10.5px] sm:text-[11.5px] uppercase tracking-[0.16em] text-accent font-semibold block mb-1">
                          Intake Consultation Request
                        </span>
                        <h3 className="font-heading font-light text-[21px] sm:text-[25px] text-ink leading-tight">
                          Schedule with Dr. Maya Reynolds
                        </h3>
                      </div>
                      <button
                        type="button"
                        onClick={handleCloseForm}
                        className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.12em] text-muted hover:text-ink transition-colors p-1 cursor-pointer"
                        title="Back to description"
                        aria-label="Back to description"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Back</span>
                      </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3.5">
                      {/* Name & Email Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block font-sans text-[10.5px] uppercase tracking-[0.1em] text-muted mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className="w-full bg-secondary/80 border border-line focus:border-primary px-3 py-2.5 sm:py-2 text-[16px] sm:text-[13px] font-body text-ink focus:outline-none transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block font-sans text-[10.5px] uppercase tracking-[0.1em] text-muted mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="name@example.com"
                            className="w-full bg-secondary/80 border border-line focus:border-primary px-3 py-2.5 sm:py-2 text-[16px] sm:text-[13px] font-body text-ink focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      {/* Phone & Session Type */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block font-sans text-[10.5px] uppercase tracking-[0.1em] text-muted mb-1">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(310) 555-0192"
                            className="w-full bg-secondary/80 border border-line focus:border-primary px-3 py-2.5 sm:py-2 text-[16px] sm:text-[13px] font-body text-ink focus:outline-none transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block font-sans text-[10.5px] uppercase tracking-[0.1em] text-muted mb-1">
                            Session Preference
                          </label>
                          <div className="grid grid-cols-2 gap-1.5 h-[42px] sm:h-[37px]">
                            <button
                              type="button"
                              onClick={() => setFormData((p) => ({ ...p, sessionType: "in-person" }))}
                              className={`text-[11px] font-medium tracking-[0.04em] uppercase border transition-all cursor-pointer flex items-center justify-center ${
                                formData.sessionType === "in-person"
                                  ? "bg-primary text-white border-primary shadow-xs"
                                  : "bg-secondary/60 text-ink/75 border-line hover:border-primary/50"
                              }`}
                            >
                              In-Person
                            </button>
                            <button
                              type="button"
                              onClick={() => setFormData((p) => ({ ...p, sessionType: "telehealth" }))}
                              className={`text-[11px] font-medium tracking-[0.04em] uppercase border transition-all cursor-pointer flex items-center justify-center ${
                                formData.sessionType === "telehealth"
                                  ? "bg-primary text-white border-primary shadow-xs"
                                  : "bg-secondary/60 text-ink/75 border-line hover:border-primary/50"
                              }`}
                            >
                              Telehealth
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Preferred Time Window */}
                      <div>
                        <label className="block font-sans text-[10.5px] uppercase tracking-[0.1em] text-muted mb-1">
                          Preferred Time Window
                        </label>
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full bg-secondary/80 border border-line focus:border-primary px-3 py-2.5 sm:py-2 text-[16px] sm:text-[13px] font-body text-ink focus:outline-none transition-colors cursor-pointer"
                        >
                          <option value="Morning (9am - 12pm)">Morning (9:00 AM – 12:00 PM PST)</option>
                          <option value="Afternoon (12pm - 4pm)">Afternoon (12:00 PM – 4:00 PM PST)</option>
                          <option value="Late Afternoon (4pm - 6:30pm)">Late Afternoon (4:00 PM – 6:30 PM PST)</option>
                        </select>
                      </div>

                      {/* Optional Note */}
                      <div>
                        <label className="block font-sans text-[10.5px] uppercase tracking-[0.1em] text-muted mb-1">
                          What brings you to therapy? (Optional)
                        </label>
                        <input
                          type="text"
                          name="note"
                          value={formData.note}
                          onChange={handleChange}
                          placeholder="e.g. Anxiety, EMDR, burnout, perfectionism..."
                          className="w-full bg-secondary/80 border border-line focus:border-primary px-3 py-2.5 sm:py-2 text-[16px] sm:text-[13px] font-body text-ink focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Submit Action */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn-sharp-filled w-full py-3.5 text-center text-[12.5px] tracking-[0.14em] uppercase font-semibold bg-primary text-on-primary border-2 border-primary rounded-none shadow-sm transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-primary-hover hover:border-primary-hover active:translate-y-0 cursor-pointer disabled:opacity-75"
                        >
                          {isSubmitting ? "Submitting Request..." : "Confirm Appointment Request"}
                        </button>
                        <p className="font-sans text-[10.5px] text-muted text-center tracking-[0.02em] mt-2">
                          100% Confidential &bull; HIPAA Compliant &bull; We will follow up within 24 hours
                        </p>
                      </div>
                    </form>
                  </div>
                ) : (
                  /* Confirmation View (Shown once appointment is booked) */
                  <div className="bg-white/95 backdrop-blur-md border border-line p-7 sm:p-8 shadow-[0_12px_40px_rgba(43,45,47,0.07)] max-w-[620px] w-full text-center">
                    <div className="w-13 h-13 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                      <Check className="w-7 h-7" strokeWidth={2.5} />
                    </div>

                    <span className="font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.18em] text-accent font-semibold block mb-1">
                      Request Confirmed
                    </span>

                    <h3 className="font-heading font-light text-[23px] sm:text-[28px] text-ink leading-tight mb-3">
                      The schedule for your appointment has been sent
                    </h3>

                    <p className="font-body font-light text-[13.5px] sm:text-[14.5px] text-body leading-[1.65] max-w-[480px] mx-auto mb-4">
                      Thank you, <strong className="font-medium text-ink">{formData.fullName || "Client"}</strong>! We have received your consultation request for{" "}
                      <span className="text-primary font-medium">
                        {formData.sessionType === "telehealth" ? "California Telehealth" : "In-Person Santa Monica"}
                      </span>{" "}
                      during your preferred window (<span className="text-ink">{formData.preferredTime}</span>).
                    </p>

                    <div className="bg-secondary/70 border border-line/60 p-3.5 mb-6 text-left max-w-[460px] mx-auto text-[12px] font-sans text-muted space-y-1">
                      <p className="text-ink font-medium">What happens next:</p>
                      <p>&bull; We will review Dr. Reynolds&apos; calendar and notify you via <span className="text-ink underline">{formData.email}</span> once confirmed for the exact time slot.</p>
                      <p>&bull; You will receive a calendar invite and intake documentation link.</p>
                    </div>

                    {/* Reversal Action: Replaces form back with original text block */}
                    <button
                      type="button"
                      onClick={handleCloseForm}
                      className="btn-sharp-filled inline-block py-3.5 px-8 text-[12.5px] tracking-[0.14em] uppercase font-semibold bg-ink text-white border-2 border-ink rounded-none hover:bg-primary hover:border-primary transition-all duration-300 cursor-pointer"
                    >
                      Done &bull; Return to Overview
                    </button>
                  </div>
                )}
              </div>

            </div>

            {/* Right Media Feature (Journal, Cup & Stone - stays intact) */}
            <div className="sec9-media-right w-full h-full">
              <ImageReveal direction="down" delay={140} className="relative w-full aspect-[4/3] md:aspect-[4/3] lg:aspect-auto lg:h-full min-h-0 overflow-hidden mt-8 md:mt-0">
                <Image
                  src="/images/sections/booking-warm-stone.webp"
                  alt="Journal, ceramic cup, and smooth stone on a wooden table in morning light"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover block"
                  style={{ objectPosition: "50% 50%" }}
                />
                <div className="media-overlay" />
              </ImageReveal>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
