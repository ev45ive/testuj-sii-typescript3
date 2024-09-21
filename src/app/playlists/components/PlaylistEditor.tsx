import React from "react";
import { Playlist } from "../../model/Playlist";

type Props = {};

const PlaylistEditor = (props: Props) => {

  const playlist: Playlist = {
    id: "123",
    name: "PLaylis 1123",
    description: "",
    public: false,
  };

  return <div>PlaylistEditor</div>;
};

export default PlaylistEditor;
