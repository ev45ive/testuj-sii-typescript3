"use client";

// tsrafce
import React from "react";

type NamedItem = {
  id: string;
  name: string;
};

type Props = {
  items: NamedItem[];
  // selectedId: string;
  // selectedId: string | undefined;
  selectedId?: string;
  onSelect: (id: string) => void;
};

const NamedItemsList = ({ items, onSelect, selectedId }: Props) => {
  return (
    <div>
      <div className="divide-y divide-gray-300 divide-solid ">
        {items.map((playlist, index) => (
          <p
            data-testid="playlist-item"
            className={`px-2 py-5 ${
              selectedId == playlist.id ? "bg-slate-600 text-black" : ""
            }`}
            onClick={() => {
              onSelect(playlist.id);
            }}
            key={playlist.id}
          >
            {index + 1}. {playlist.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default NamedItemsList;
