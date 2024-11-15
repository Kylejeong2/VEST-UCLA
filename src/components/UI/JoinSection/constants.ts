import { StaticImageData } from 'next/image';
import robert_fox from '../../../../public/images/robert_fox.png';
import cameron_williamson from '../../../../public/images/cameron_williamson.png';
import esther_howard from '../../../../public/images/esther_howard.png';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony: "Leading BVL's operations and ensuring our members get hands-on experience with VCs and startups.",
    person: 'Kyle & Tony',
    role: 'Presidents'
  },
  {
    testimony: "Structuring and developing BVL's future while creating impactful learning experiences.",
    person: 'Mergen',
    role: 'Director of Operations'
  },
  {
    testimony: "Managing club logistics and legal requirements to establish BVL as an official UCLA organization.",
    person: 'Jake',
    role: 'Director of Logistics & Legal'
  },
  {
    testimony: "Overseeing financial operations and maintaining our technical infrastructure.",
    person: 'Sam',
    role: 'Director of Finances'
  }
];

export const desktopHeaderPhrase = ['Meet Our Leadership', 'Team'];
