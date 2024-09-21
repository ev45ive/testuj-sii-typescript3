import { Playlist } from "../model/Playlist";
import PlaylistDetails from "./components/PlaylistDetails";
import PlaylistEditor from "./components/PlaylistEditor";
import PlaylistList from "./components/PlaylistList";

export default function PlaylistsView() {
  const playlist: Playlist = {
    id: "123",
    name: "Playlist 123",
    public: true,
    description: "Awesome playlist",
  };

  return (
    <div className="container">
      <h1 className="text-2xl text-red-400 leading-loose mb-4">Playlists</h1>

      <div className="grid grid-cols-2 gap-5">
        <div>
          <PlaylistList />
        </div>
        <div>
          <PlaylistDetails playlist={playlist} />

          <PlaylistEditor />
        </div>
      </div>
    </div>
  );
}
