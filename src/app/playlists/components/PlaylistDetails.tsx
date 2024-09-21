// tsrafce

import { Playlist } from "@/app/model/Playlist";
import React from "react";

type Props = {
  playlist: Playlist;
};

const PlaylistDetails = ({ playlist }: Props) => {
  return (
    <div>
      {/* .grid.gap-5>.grid.gap-2*3>strong{Name}+div{Playlist $$$} */}
      <div className="grid gap-5">
        <div className="grid gap-2">
          <strong>Name</strong>
          <div>{playlist.name}</div>
        </div>
        <div className="grid gap-2">
          <strong>Public</strong>
          <div>{playlist.public ? "Yes" : "No"}</div>
        </div>
        <div className="grid gap-2">
          <strong>Description</strong>
          <div>{playlist.description} </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistDetails;
