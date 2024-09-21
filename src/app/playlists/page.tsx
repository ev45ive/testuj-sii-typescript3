import PlaylistDetails from "./components/PlaylistDetails";
import PlaylistEditor from "./components/PlaylistEditor";
import PlaylistList from "./components/PlaylistList";

export default function PlaylistsView() {
  return (
    <div className="container">
      
      <h1 className="text-2xl text-red-400 leading-loose mb-4">
        Playlists
      </h1>

      {/* .grid.grid-cols-2.gap-5>div*2 */}
      
      <div className="grid grid-cols-2 gap-5">
        <div>
          <PlaylistList/>
        </div>
        <div>
          <PlaylistDetails/>

          <PlaylistEditor/>
        </div>
      </div>

    </div>
  );
}
