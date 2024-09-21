// tsrafce

import { Playlist } from "@/app/model/Playlist";
import React from "react";

type Props = {
  playlist: Playlist;
};

// TS
const user = { name: "Artem" };

// TSX
const html = (
  <div id="123">
    <div>{user.name}</div>
    <div>{user.name}</div>
    <div>{user.name}</div>
  </div>
);

// JS
const html2 = {
  type: "div",
  props: { id: "123" },
  children: [
    {
      type: "div",
      children: [user.name],
    },
    {
      type: "div",
      children: [user.name],
    },
    {
      type: "div",
      children: [user.name],
    },
  ],
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
