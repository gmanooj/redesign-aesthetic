"use client";

import React, { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "Where is your Santa Monica office, and do you offer telehealth?",
    answer:
      "My office is at 123th Street 45 W, Santa Monica, CA 90401, a quiet, private space with natural light and an uncluttered feel. I also offer secure telehealth for clients located in California.",
  },
  {
    question: "Who do you typically work with?",
    answer:
      "Adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many are high-achieving, thoughtful entrepreneurs, creatives, and professionals who feel exhausted or stuck in overthinking.",
  },
  {
    question: "What is a therapy session with you like?",
    answer:
      "Warm, collaborative, and grounded. Sessions are structured enough to feel supportive, with space for reflection and depth, using CBT, EMDR, mindfulness-based practices, and body-oriented techniques.",
  },
  {
    question: "How do you approach trauma therapy and EMDR?",
    answer:
      "I work with single-incident trauma and long-standing patterns from childhood, relationships, or chronic stress, paced carefully with an emphasis on safety and stabilization.",
  },
  {
    question: "How do we get started?",
    answer:
      "Reach out through the consultation booking form. Whether you choose in-person sessions in Santa Monica or telehealth in California, we can see together whether I'm a good fit.",
  },
];

export default function FAQ({ className = "" }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faqs"
      aria-label="Frequently Asked Questions"
      className={`relative w-full bg-secondary py-16 md:py-24 border-t border-line ${className}`}
    >
      <div className="max-w-[1140px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-16">
          
          {/* Left Column: Heading & Context */}
          <div className="md:w-[38%] md:sticky md:top-28">
            <span className="font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-muted font-medium mb-3 block">
              PRACTICE POLICIES &amp; QUESTIONS
            </span>
            <h2 className="font-heading font-light text-[30px] sm:text-[38px] md:text-[44px] leading-[1.2] text-ink mb-5">
              Therapy FAQs in Santa Monica
            </h2>
            <p className="font-body font-light text-[14px] sm:text-[15.5px] leading-[1.75] text-body/85 mb-8">
              Everything you need to know about starting therapy with me in Santa Monica or by telehealth in California.
            </p>
            <div>
              <Link
                href="#booking"
                className="btn-sharp-filled inline-block text-[12px] sm:text-[12.5px] font-semibold tracking-[0.14em] uppercase text-on-primary bg-primary border-2 border-primary rounded-none px-7 py-3.5 shadow-sm transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-primary-hover hover:border-primary-hover hover:-translate-y-[2px] active:translate-y-0 cursor-pointer"
              >
                Get in touch
              </Link>
            </div>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="md:w-[62%] flex flex-col divide-y divide-line">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-5 sm:py-6 first:pt-0 last:pb-0">
                  <h3 className="m-0 font-normal">
                    <button
                      onClick={() => toggle(idx)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${idx}`}
                      className="w-full text-left flex justify-between items-center gap-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <span className="font-heading text-[19px] sm:text-[22px] md:text-[24px] leading-[1.3] text-ink group-hover:text-primary transition-colors duration-200">
                        {faq.question}
                      </span>
                      <span
                        className={`text-accent text-2xl font-light transform transition-transform duration-300 ${
                          isOpen ? "rotate-45" : "rotate-0"
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-answer-${idx}`}
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-body font-light text-[14px] sm:text-[15.5px] leading-[1.75] text-body/80 pb-2">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
