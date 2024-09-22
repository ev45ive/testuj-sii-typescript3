"use client";

import React, { ChangeEvent, MouseEventHandler } from "react";
import { Playlist } from "../../model/Playlist";

type Props = { playlist: Playlist };

const PlaylistEditor = ({ playlist }: Props) => {
  // const eventHandler = (e: ChangeEvent<HTMLInputElement>) => {
  // const eventHandler = (e: 'mój lewy but') => {
  // const eventHandler = (e: ChangeEvent<HTMLInputElement>) => {

  // {event => {}}  -> Ctrl+. -> Extract to const
  const eventHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log("e.currentTarget.value", event.currentTarget.value);
  };

  const publicCheck: MouseEventHandler<HTMLInputElement> = (event) => {};

  return (
    <div id={`playlist_${playlist.id}`} title={playlist.name}>
      {/* .grid.gap-5>.grid.gap-2*3>label{Name}+input[value="Playlist $$$"] */}
      <div className="grid gap-5">
        <div className="grid gap-2">
          <label>Name</label>
          <input
            type="text"
            defaultValue={playlist.name}
            className="text-black"
            onChange={eventHandler}
          />
          <div className="text-end">0 / 100</div>
        </div>

        <div className="grid gap-2">
          <label>
            <input
              type="checkbox"
              className="me-2"
              checked={playlist.public}
              onClick={publicCheck}
            />
            Public
          </label>
        </div>

        <div className="grid gap-2">
          <label>Desciption</label>
          <textarea className="text-black" value={playlist.description} />
        </div>
      </div>
    </div>
  );
};

export default PlaylistEditor;
