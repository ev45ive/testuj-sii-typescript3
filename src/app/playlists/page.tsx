"use client";

import { useState } from "react";
import { Playlist } from "../model/Playlist";
import PlaylistDetails from "./components/PlaylistDetails";
import PlaylistEditor from "./components/PlaylistEditor";
import PlaylistsList from "./components/PlaylistList";
import { mockPlaylists } from "./mockPlaylists";

export default function PlaylistsView() {
  const playlists = mockPlaylists;
  // const [selected, setSelected] = useState<Playlist | undefined>( undefined );
  const [selected, setSelected] = useState<Playlist>();

  const selectPlaylistById = (id: string) => {
    const selected = playlists.find((p) => p.id == id);
    setSelected(selected);
  };

  return (
    <div className="container">
      <h1 className="text-2xl text-red-400 leading-loose mb-4">Playlists</h1>

      <div className="grid grid-cols-2 gap-5">
        <div>
          <PlaylistsList
            items={playlists}
            selectedId={selected?.id}
            onSelect={selectPlaylistById}
          />
        </div>
        <div>
          {/* {selected && <PlaylistDetails playlist={selected} />} */}

          <PlaylistDetails playlist={selected} />

          {/* {false && <PlaylistEditor playlist={selected} />} */}
        </div>
      </div>
    </div>
  );
}
