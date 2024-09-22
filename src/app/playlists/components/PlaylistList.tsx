// tsrafce
import { Playlist } from "@/app/model/Playlist";
import React from "react";

type Props = {
  playlists: Playlist[];
};

const PlaylistList = ({ playlists }: Props) => {
  return (
    <div>
      <div className="divide-y divide-gray-300 divide-solid ">
        {playlists.map((playlist, index) => (
          <p className="px-2 py-5" key={playlist.id}>{index+1}. {playlist.name}</p>
        ))}
      </div>

      {/* <pre>{JSON.stringify(playlists, null, 2)}</pre> */}
    </div>
  );
};

export default PlaylistList;
