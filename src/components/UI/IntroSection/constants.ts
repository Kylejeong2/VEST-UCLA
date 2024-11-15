import ic_document_duplicate from '../../../../public/svgs/ic_document_duplicate.svg';
import ic_identification from '../../../../public/svgs/ic_identification.svg';
import ic_lock_closed from '../../../../public/svgs/ic_lock_closed.svg';

export const desktopHeaderPhrase = ['Our 10-Week', 'Program Structure'];
export const desktopParagraphPhrase = [
  'Learn venture capital fundamentals and gain hands-on experience',
  'working with startups and VCs through our structured program.',
];

export const mobileHeaderPhrase = ['Our 10-Week', 'Program'];
export const mobileParagraphPhrase = [
  'Learn venture capital fundamentals and',
  'gain hands-on experience working with',
  'startups and VCs.',
];

export const edges = [
  {
    point: 'Weeks 1-3: VC Fundamentals',
    details: 'Learn about venture capital, funding stages, startup evaluation, and market analysis through workshops and real cases.',
    icon: ic_document_duplicate,
  },
  {
    point: 'Weeks 4-7: Hands-on Projects',
    details: 'Work directly with startups and VCs on real projects. Apply your skills in engineering, design, or market research.',
    icon: ic_identification,
  },
  {
    point: 'Weeks 8-10: Deal Analysis',
    details: 'Deep dive into deal sourcing, due diligence, and investment analysis. Present your findings to VC partners.',
    icon: ic_lock_closed,
  },
];
