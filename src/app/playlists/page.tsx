import { Playlist } from "../model/Playlist";
import PlaylistDetails from "./components/PlaylistDetails";
import PlaylistEditor from "./components/PlaylistEditor";
import PlaylistList from "./components/PlaylistList";
import { mockPlaylists } from "./mockPlaylists";

export default function PlaylistsView() {
  const playlists: Playlist[] = mockPlaylists;
  const selected = playlists[0];

  const selectPlaylistById = (id: string) => {
    const selected = playlists.find((p) => p.id == id)!;
    console.log("selected", selected);
  };

  return (
    <div className="container">
      <h1 className="text-2xl text-red-400 leading-loose mb-4">Playlists</h1>

      <div className="grid grid-cols-2 gap-5">
        <div>
          <PlaylistList
            playlists={playlists}
            selectedId={"234"}
            onSelect={selectPlaylistById}
          />
        </div>
        <div>
          <PlaylistDetails playlist={selected} />

          <PlaylistEditor playlist={selected} />
        </div>
      </div>
    </div>
  );
}
