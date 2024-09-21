// tsrafce
import { Playlist } from "@/app/model/Playlist";
import React from "react";

type Props = {
  playlists: Playlist[];
};

const PlaylistList = ({ playlists }: Props) => {
  return (
    <div>
      PlaylistList
      <pre>{JSON.stringify(playlists, null, 2)}</pre>
    </div>
  );
};

export default PlaylistList;
