import React from "react";
import { Playlist } from "../../model/Playlist";

type Props = { playlist: Playlist };

const PlaylistEditor = ({ playlist }: Props) => {


  return (
    <div id={`playlist_${playlist.id}`} title={playlist.name}>
      {/* .grid.gap-5>.grid.gap-2*3>label{Name}+input[value="Playlist $$$"] */}
      <div className="grid gap-5">
        <div className="grid gap-2">
          <label>Name</label>
          <input type="text" value={playlist.name} className="text-black" />
        </div>

        <div className="grid gap-2">
          <label>
            <input type="checkbox" className="me-2" checked={playlist.public} />
            Public
          </label>
        </div>

        <div className="grid gap-2">
          <label>Desciption</label>
          <textarea className="text-black" value={playlist.description}/>
        </div>
      </div>
    </div>
  );
};

export default PlaylistEditor;
