import React from 'react';
import Image from 'next/image';

export interface BoardProps {
  imageSrc?: string;
  firstName: string;
  lastName: string;
  role: string;
}

const Board: React.FC<BoardProps> = ({ imageSrc, firstName, lastName, role }) => {
  return (
    <div className="w-full max-w-[240px] overflow-hidden rounded-xl border-2 border-blue-500 bg-[#1A1A1A] p-4">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-300">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={`${firstName} ${lastName}`}
            fill
            className="object-cover"
          />
        ) : (
          <div className="h-full w-full bg-gray-300" />
        )}
      </div>
      
      <div className="mt-4 text-left text-white">
        <h3 className="text-xl font-bold">
          {firstName} {lastName}
        </h3>
        <p className="text-sm text-gray-300">{role}</p>
      </div>
    </div>
  );
};

export default Board;