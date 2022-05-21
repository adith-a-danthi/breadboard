import { useUser } from '../contexts/user-context';
import { deletePlaylist, removeVideoFromPlaylist } from '../utils/playlist-utils';
import VideoListItem from './VideoListItem/VideoListItem';

export default function PlaylistCard({ playlist }) {
  const { title, videos } = playlist;
  const { dispatchUserData } = useUser();
  return (
    <div className="card outlined-card pa-4">
      {/* Header */}
      <div className="header flex gap-1 align-items-center">
        <div className="flex-grow">
          <h3 className="card-title text-truncate">{title}</h3>
          <p className="card-body">{videos.length} Videos</p>
        </div>
        <button
          className="btn btn-gray outlined small"
          onClick={() => deletePlaylist(dispatchUserData, playlist)}
        >
          Delete Playlist
        </button>
      </div>

      <hr />
      {/* Video List */}
      <div className="flex flex-col gap-2 justify-space-around">
        {playlist.videos?.map((video) => (
          <VideoListItem
            key={video._id}
            video={video}
            removeItemHandler={removeVideoFromPlaylist}
          />
        ))}
      </div>
    </div>
  );
}
