"use client";

import { ArrowIcon } from "@/public/icons";
import * as Accordion from "@radix-ui/react-accordion";

type FaqItem = {
  question: string;
  answer: string;
};

const NEWFAQ: React.FC = () => {
  const faqItems: FaqItem[] = [
    {
      question: "What is AlphaSync?",
      answer:
        "Yes. All treatments are prescribed by licensed providers and fulfilled by U.S. pharmacies.",
    },
    {
      question: "How does AlphaSync work?",
      answer:
        "Yes. Hormones and many peptides require lab work to ensure safety and efficacy.",
    },
    {
      question: "Do physicians need to manage inventory or shipping?",
      answer: "No mandatory membership. Pay only for what you need.",
    },
    {
      question: "Does AlphaSync influence clinical decision-making?",
      answer: "Absolutely. All shipments are discreet and confidential.",
    },
      {
      question: "What types of products are available through AlphaSync?",
      answer: "Absolutely. All shipments are discreet and confidential.",
    },
      {
      question: "What types of practices is AlphaSync built for?",
      answer: "Absolutely. All shipments are discreet and confidential.",
    },
      {
      question: "How does AlphaSync support compliance?",
      answer: "Absolutely. All shipments are discreet and confidential.",
    },
      {
      question: "How does AlphaSync help practices scale?",
      answer: "Absolutely. All shipments are discreet and confidential.",
    },
  ];

  return (
    <Accordion.Root
      type="single"
      collapsible
      defaultValue="item-0"
      className="space-y-3"
    >
      {faqItems.map((item, index) => (
        <Accordion.Item
          key={index}
          value={`item-${index}`}
          className=" last:border-b-0 border-b border-b-gray-200"
        >
          <Accordion.Trigger className="w-full p-3 md:p-5 cursor-pointer">
            <Accordion.Header>
              <div className="flex items-center justify-between">
                <h4 className="text-base font-medium md:text-2xl text-black">
                  {item.question}
                </h4>

                <span className="relative flex items-center justify-center rtl:pb-3 ltr:pt-0.5 shrink-0 w-5 h-5">
                  <span className="faq-arrow">
                    <ArrowIcon />
                  </span>
                </span>
              </div>
            </Accordion.Header>

            <Accordion.Content className="faq-anim">
              <p className="mt-2 text-base text-start lg:text-xl text-neutral-700">
                {item.answer}
              </p>
            </Accordion.Content>
          </Accordion.Trigger>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

export default NEWFAQ;
