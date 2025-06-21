"use client";

import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { styled } from 'styled-components';
import { events } from '@/data/events';

// Define types
type EventPageProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

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
            <h1 className="text-[#4299e1] text-[7rem] leading-none mb-12 font-semibold w-full text-center">{event.title}</h1>
            <p className="text-[#4299e1] text-[1.75rem] mb-4 font-semibold w-full">{event.subtitle}</p>
            <p className="text-[1.25rem] w-full">
              {event.description}
            </p>
          </div>
          
                      {/* Event Image */}
            <div className="w-full my-10">
              <div className="w-[80%] aspect-[4/3] bg-gray-200 rounded-xl flex items-center justify-center text-gray-700 mx-auto overflow-hidden relative">
                <Image src={event.imageSrc} alt={event.title} fill className="object-contain" />
              </div>
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