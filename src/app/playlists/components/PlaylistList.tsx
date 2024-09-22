// tsrafce
import { Playlist } from "@/app/model/Playlist";
import React from "react";

type Props = {
  playlists: Playlist[];
  // ????
  // ???
};

const PlaylistList = ({ playlists, onSelect, selectedId }: Props) => {
  return (
    <div>
      <div className="divide-y divide-gray-300 divide-solid ">
        {playlists.map((playlist, index) => (
          <p
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

export default PlaylistList;
