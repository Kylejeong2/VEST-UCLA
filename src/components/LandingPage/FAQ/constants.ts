type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Frequently asked questions'];
export const mobileHeaderPhrase = ['Frequently', 'asked', 'questions'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'What is VEST?',
    answer: "We are a community of entrepreneurial students that work tightly together with VC firms & startups.",
  },
  {
    question: 'What do you do?',
    answer: "We work with VC firms to help with scouting, research, and analysis on companies. We also work with early stage startups in (but not limited to) engineering, design, and marketing roles.",
  },
  {
    question: 'How can I join & what are the benefits?',
    answer: "You get to learn about tech startups and the world of vc through hands-on career experience through a community that is composed of entrepreneur devoted & creative students.",
  },
  {
    question: 'What is the application process?',
    answer: "The process includes submitting an application form with your resume and answering a few questions, followed by a casual interview with two executives. Selected candidates will receive an email invitation to join.",
  },
];
