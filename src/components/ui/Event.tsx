import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface EventProps {
  imageSrc?: string;
  title: string;
  date: string;
  description: string;
  id?: number;
}

const Event: React.FC<EventProps> = ({ imageSrc, title, date, description, id }) => {
  // Create a URL-friendly event name from the title
  const eventNameSlug = title?.toLowerCase().replace(/\s+/g, '-') || 'event';
  const queryParams = new URLSearchParams({
    title,
    date,
    description,
    imageSrc: imageSrc || '',
    id: id?.toString() || ''
  }).toString();

  return (
    <Link 
      href={`/events/${eventNameSlug}?${queryParams}`}
      className="block cursor-pointer transition-transform hover:scale-[1.02]"
    >
      <div className="w-full max-w-[360px] overflow-hidden rounded-2xl border-2 border-blue-500 bg-[#1A1A1A] p-5">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-300">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="h-full w-full bg-gray-300" />
        )}
      </div>
      
      <div className="mt-4 text-white">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-sm text-gray-300">{date}</p>
        
        <p className="mt-4 text-sm">
          {description}
        </p>
      </div>
      </div>
    </Link>
  );
};

export default Event;