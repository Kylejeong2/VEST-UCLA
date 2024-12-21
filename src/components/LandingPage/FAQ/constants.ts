type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ["Frequently asked questions"];
export const mobileHeaderPhrase = ["Frequently", "asked", "questions"];
export const animate = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  open: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: "What is VEST?",
    answer:
      "We're a different kind of organization at UCLA focused on engineering, design, and marketing work for startups, plus sourcing and due diligence for VC firms.",
  },
  {
    question: "What makes VEST unique?",
    answer:
      "Unlike traditional consulting clubs, we do hands-on technical work with rapid development cycles. Our members write code, design products, and work directly with founders and VCs.",
  },
  {
    question: "What opportunities are available?",
    answer:
      "We offer direct access to internship and full-time opportunities at our partner startups and VCs. Members work on real projects that can be used in their resumes, gaining valuable technical and business experience.",
  },
  {
    question: "What are you looking for?",
    answer:
      "We value ambition, high agency, and passion over perfect technical skills. We're building a community of driven individuals who want to make a lasting impact in the startup ecosystem.",
  },
];
