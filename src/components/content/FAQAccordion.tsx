"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border-b border-rule last:border-b-0">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="group flex w-full items-baseline justify-between gap-6 py-6 text-left"
            >
              <div className="flex items-baseline gap-5">
                <span className="font-mono text-xs text-ink-fade">
                  Q.{String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-2xl leading-tight text-ink transition-colors group-hover:text-accent">
                  {faq.question}
                </span>
              </div>
              <span
                aria-hidden="true"
                className="font-mono text-2xl text-ink-fade transition-transform group-hover:text-accent"
                style={{
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                +
              </span>
            </button>
            {isOpen && (
              <div className="pb-8 pl-12">
                <p className="font-body text-lg leading-relaxed text-ink-mid">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
