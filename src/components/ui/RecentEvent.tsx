import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface EventProps {
  imageSrc?: string;
  title: string;
  date: string;
  description: string;
  slug: string;
}

const RecentEvent: React.FC<EventProps> = ({ imageSrc, title, date, description, slug }) => {
  return (
    <Link href={`/events/${slug}`} className="block cursor-pointer">
      <div className="w-full flex flex-col md:flex-row overflow-hidden rounded-2xl border-2 border-blue-500 bg-[#1A1A1A] p-4 md:p-5 gap-4 md:gap-5 mb-5 transition-transform hover:scale-[1.02]">
        <div className="relative aspect-square w-full md:w-[200px] h-[200px] overflow-hidden rounded-lg bg-gray-300 flex-shrink-0">
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
        <div className="flex flex-col h-full justify-center">
          <div className="text-white">
              <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
              <p className="text-sm text-gray-300 mt-1">{date}</p>
              
              <p className="mt-3 md:mt-4 text-sm leading-relaxed">
              {description}
              </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecentEvent;