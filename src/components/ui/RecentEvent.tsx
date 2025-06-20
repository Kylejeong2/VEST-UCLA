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
      <div className="w-full flex flex-row overflow-hidden rounded-2xl border-2 border-blue-500 bg-[#1A1A1A] p-5 gap-5 mb-5 transition-transform hover:scale-[1.02]">
        <div className="relative aspect-square w-[200px] h-[200px] overflow-hidden rounded-lg bg-gray-300 flex-shrink-0">
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
          <div className="mt-4 text-white">
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="text-sm text-gray-300">{date}</p>
              
              <p className="mt-4 text-sm">
              {description}
              </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecentEvent;