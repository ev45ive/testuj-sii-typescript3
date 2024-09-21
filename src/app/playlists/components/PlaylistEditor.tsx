import React from "react";
import { Playlist } from "../../model/Playlist";

type Props = { playlist: Playlist };

const PlaylistEditor = ({ playlist }: Props) => {
  return <div>PlaylistEditor {playlist.name}</div>;
};

export default PlaylistEditor;
