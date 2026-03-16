import React from 'react';

const BBSLogo = ({ className = "" }) => (
  <div className={`flex items-center space-x-3 ${className}`}>
    {/* Le Badge Noir B.B.S */}
    <div className="bg-[#1f1f1f] text-white px-3 py-1 rounded-md border border-slate-700">
      <span className="text-xl md:text-2xl font-black tracking-tighter">B.B.S</span>
    </div>
    
    {/* Le texte complet en Vert Émeraude */}
    <div className="flex flex-col -space-y-1">
      <span className="text-[#007A7A] text-lg md:text-xl font-extrabold uppercase leading-tight">
        Bouyedi Business
      </span>
      <div className="flex items-center space-x-2">
        <span className="text-[#007A7A] text-sm font-black">&</span>
        <span className="text-[#007A7A] text-lg md:text-xl font-extrabold uppercase leading-tight">
          Services
        </span>
      </div>
    </div>
  </div>
);

export default BBSLogo;
