"use client";

import React, {
  ChangeEvent,
  FormEvent,
  MouseEventHandler,
  useState,
} from "react";
import { Playlist } from "../../model/Playlist";

type Props = { playlist: Playlist };

const PlaylistEditor = ({ playlist }: Props) => {
  const [playlistName, setPlaylistName] = useState(playlist.name);

  const eventHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPlaylistName(event.currentTarget.value);
  };

  return (
    <div id={`playlist_${playlist.id}`} title={playlist.name}>
      {/* .grid.gap-5>.grid.gap-2*3>label{Name}+input[value="Playlist $$$"] */}
      <div className="grid gap-5">
        <div className="grid gap-2">
          <label>Name</label>
          <input
            type="text"
            defaultValue={playlistName}
            className="text-black"
            onChange={eventHandler}
          />
          <div className="text-end">{playlistName.length} / 100</div>
        </div>

        <div className="grid gap-2">
          <label>
            <input type="checkbox" className="me-2" checked={playlist.public} />
            Public
          </label>
        </div>

        <div className="grid gap-2">
          <label>Desciption</label>
          <textarea
            className="text-black"
            value={playlist.description}
            // onInput={ (e: FormEvent<HTMLTextAreaElement> ) => {}}
            // onInput={ (e: React.SyntheticEvent<HTMLTextAreaElement> ) => {}}
            // onInput={ (e: React.SyntheticEvent<HTMLElement> ) => {}}
            // onInput={ (e: React.SyntheticEvent ) => {}}
            onInput={(e) => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default PlaylistEditor;
