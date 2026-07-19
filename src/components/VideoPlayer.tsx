"use client";

import { useState } from "react";
import Image from "next/image";

export function VideoPlayer({ videoId, thumbnailUrl }: { videoId: string, thumbnailUrl?: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <iframe 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen={true} 
        className="w-full h-full" 
        frameBorder="0" 
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`} 
        title="Video Player"
      />
    );
  }

  return (
    <div 
      className="w-full h-full relative cursor-pointer group bg-[#020B1F]" 
      onClick={() => setIsPlaying(true)}
    >
      <img 
        src={thumbnailUrl || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
        alt="Video Thumbnail" 
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#010613]/80 to-transparent pointer-events-none"></div>
      
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-16 h-16 bg-cta rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(253,191,15,0.4)] group-hover:scale-110 transition-transform duration-300">
          <span className="material-symbols-outlined text-[#010613] text-3xl ml-1" style={{fontVariationSettings:"'FILL' 1"}}>play_arrow</span>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end pointer-events-none">
        <span className="text-xs font-medium text-white shadow-black drop-shadow-md">Click to watch training</span>
      </div>
    </div>
  );
}
