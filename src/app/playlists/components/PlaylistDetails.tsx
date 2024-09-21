// tsrafce

import React from "react";
import { Playlist } from "@/app/model/Playlist";

type Props = {};

const playlist: Playlist = {
  id: "123",
  name: "Playlist 123",
  public: true,
  description: "Awesome playlist",
};

// type Playlist = typeof playlist

const PlaylistDetails = (props: Props) => {
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
