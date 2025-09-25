// Array of companies with placeholder logos. Replace `logo` with paths in /public/images/companies/* when ready.
export type CompanyLogo = {
  name: string;
  logo: string; // path under /public or empty string for placeholder
  cols?: number; // how many columns to span in collage
  scale?: number; // fine-tune logo size
  keepColor?: boolean; // if true, do not force white
};

export const companies: CompanyLogo[] = [
  { name: "Amazon", logo: "/logos/where-we-work/amazon.png" },
  { name: "Anduril", logo: "/logos/where-we-work/anduril.svg" },
  { name: "Apple", logo: "/logos/where-we-work/apple.svg" },
  { name: "BlackRock", logo: "/logos/where-we-work/blackrock.png" },
  { name: "Browserbase", logo: "/logos/where-we-work/browserbase.png" },
  { name: "Capital One", logo: "/logos/where-we-work/capital-one.png" },
  { name: "Coinbase", logo: "/logos/where-we-work/coiinbase.png" },
  {
    name: "Cursor",
    logo: "/logos/where-we-work/cursor.png",
    keepColor: true,
    scale: 1,
  },
  { name: "Deloitte", logo: "/logos/where-we-work/deloitte.png" },
  { name: "Etched", logo: "/logos/where-we-work/etched.svg" },
  { name: "Google", logo: "/logos/where-we-work/google.png" },
  { name: "Harvey", logo: "/logos/where-we-work/harvey.png" },
  { name: "Mercor", logo: "/logos/where-we-work/mercor.png" },
  { name: "Meta", logo: "/logos/where-we-work/meta.png" },
  {
    name: "Northrop Grumman",
    logo: "/logos/where-we-work/northrop_gruman.svg",
  },
  { name: "Paramount", logo: "/logos/where-we-work/paramount.svg" },
  { name: "Polymarket", logo: "/logos/where-we-work/polymarket.png" },
  { name: "SafetyKit", logo: "/logos/where-we-work/safetykit.svg" },
  { name: "Scale AI", logo: "/logos/where-we-work/scale-ai.svg" },
  { name: "Snapchat", logo: "/logos/where-we-work/snapchat.png" },
  { name: "Stripe", logo: "/logos/where-we-work/stripe.png" },
  { name: "Tesla", logo: "/logos/where-we-work/tesla.png" },
  { name: "Vercel", logo: "/logos/where-we-work/vercel.svg" },
  { name: "NVIDIA", logo: "/logos/where-we-work/nvidia.png" },
];
