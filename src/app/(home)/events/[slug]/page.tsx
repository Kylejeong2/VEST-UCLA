"use client";

import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { styled } from 'styled-components';

// Define types
type EventPageProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// Sample events data (in a real app, this would come from a database)
const events = [
  {
    id: 1,
    title: "Event 1",
    slug: "event-1",
    date: "01/02/2025",
    subtitle: "Event 1 Subtitle",
    imageSrc: "/images/grid_background.png",
    description: "Event 1 Description"
  },
  {
    id: 2,
    title: "Event 2",
    slug: "event-2",
    date: "02/15/2025",
    subtitle: "Event 2 Subtitle",
    imageSrc: "/images/grid_background.png",
    description: "Event 2 Description"
  },
  {
    id: 3,
    title: "Event 3",
    slug: "event-3",
    date: "03/21/2025",
    subtitle: "Event 3 Subtitle",
    imageSrc: "/images/grid_background.png",
    description: "Event 3 Description"
  },
  {
    id: 4,
    title: "Event 4",
    slug: "event-4",
    date: "04/10/2025",
    subtitle: "Event 4 Subtitle",
    imageSrc: "/images/grid_background.png",
    description: "Event 4 Description"
  }
];

// Create BlurCircle styled component
const BlurCircle = styled.div`
  position: fixed;
  top: -800px;
  left: -400px;
  width: 1270px;
  height: 1270px;
  background-color: #1e3a8a;
  border-radius: 50%;
  filter: blur(250px);
  z-index: -1;
  pointer-events: none;
`;

export default function EventPage({ params, searchParams }: EventPageProps) {
  // Find the event that matches the slug
  const event = events.find(e => e.slug === params.slug);
  
  // If event not found, return 404
  if (!event) {
    notFound();
  }
  
  return (
    <div className="w-full min-h-screen bg-[#061529] text-white relative overflow-hidden">
      {/* BlurCircle */}
      <div 
        className="absolute pointer-events-none" 
        style={{
          top: "-500px",
          left: "-200px",
          width: "1270px",
          height: "1270px",
          backgroundColor: "#1e3a8a",
          borderRadius: "50%",
          filter: "blur(250px)",
          opacity: 0.7,
          zIndex: 0
        }}
      />
      <div className="w-full bg-cover bg-center relative" style={{ 
        backgroundImage: "url('/images/grid_background.png')",
        zIndex: 1
      }}>
        <div className="w-[90%] max-w-[1440px] mx-auto relative z-10">
          {/* Event Banner */}
          <div className="pt-40 pb-10 text-left">
            <h1 className="text-[#4299e1] text-[7rem] mb-6 font-semibold w-full text-center">{event.title}</h1>
            <p className="text-[#4299e1] text-[1.75rem] mb-4 font-semibold w-full">{event.subtitle}</p>
            <p className="text-[1.75rem] w-full">
              {event.description}
            </p>
          </div>
          
          {/* Event Image */}
          <div className="w-full my-10">
            <div className="w-[80%] aspect-[4/3] bg-gray-200 rounded-xl flex items-center justify-center text-gray-700 mx-auto">
              group picture
            </div>
          </div>
          
          {/* Event Content */}
          <div className="w-full py-10">
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur. Proin pharetra quam orci sit. Sit elementum etiam consectetur sagittis elementum volutpat sit nec ornare consequat at ac nunc sit. Felis enim sit malesuada laoreet hendrerit amet.
            </p>
            <p className="mb-5">
              Ullamcorper nunc adipiscing viverra quisque blandit pharetra elementum fringilla. Tristique sapien vel leo risus. Pellentesque ullamcorper orci egestas dignissim eu erat. Ipsum habitasse ipsum nibh amet aliquet scelerisque tincidunt. Egestas risus elit mauris pulvinar cras eu ut egestas. Augue platea arcu vitae dictum ultrices quis consectetur nibh.
            </p>
            <p className="mb-5">
              Faucibus congue non at nibh dui in. Sed dignissim nullam in lobortis tempor in magna aliquam est. Feugiat pellentesque auctor amet phasellus amet ultrices consequat vitae hac.
            </p>
            <p className="mb-5">
              Commodo tortor sed vel tortor lorem. Faucibus in duis ut fermentum massa eu sit. Cras lobortis commodo sed sit mi varius. Sagittis sed velit ornare bibendum tincidunt velit. Vel aliquam nulla imperdiet at aliquam.
            </p>
          </div>
        </div>
      </div>
      
      {/* Back Button */}
      <div className="w-[90%] mx-auto py-10 text-[1.75rem]">
        <Link href="/events" className="text-white hover:text-[#4299e1]">
          ← Back to Events
        </Link>
      </div>
    </div>
  );
} 