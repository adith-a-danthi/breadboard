import './PlaylistModal.css';

import { useState } from 'react';
import { useUser } from '../../contexts/user-context';
import {
  addVideoToPlaylist,
  createPlaylist,
  removeVideoFromPlaylist,
} from '../../utils/playlist-utils';

export default function PlaylistModal({ showModal, setShowModal, createOnly, video }) {
  const [newPlaylistTitle, setNewPlaylistTitle] = useState('');
  const {
    userData: { playlists },
    dispatchUserData,
  } = useUser();

  const createPlaylistHandler = () => {
    if (newPlaylistTitle.length !== 0) {
      createPlaylist(dispatchUserData, { title: newPlaylistTitle, description: '' });
      setNewPlaylistTitle('');
      createOnly && setShowModal(false);
    }
  };

  const videoInPlaylist = (playlist) =>
    playlist.videos.some((playlistVideo) => playlistVideo._id === video._id);

  const playlistCheckboxHandler = (playlist) => {
    videoInPlaylist(playlist)
      ? removeVideoFromPlaylist(dispatchUserData, playlist, video)
      : addVideoToPlaylist(dispatchUserData, playlist, video);
  };

  return (
    <div>
      {showModal && <div className="bg-overlay"></div>}
      <dialog className="custom-modal" open={showModal}>
        <div className="flex justify-end">
          <button className="btn btn-gray outlined small" onClick={() => setShowModal(false)}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        {!createOnly && (
          <>
            <h5 className="heading-5 mb-2">Select a Playlist</h5>
            <ul className="list-group">
              {playlists?.map((playlist) => (
                <li className="text-base my-2" key={playlist._id}>
                  <input
                    className="input"
                    type="checkbox"
                    id={playlist.title}
                    name={playlist.title}
                    checked={videoInPlaylist(playlist)}
                    onChange={() => playlistCheckboxHandler(playlist)}
                  />
                  <label className="text-base ml-2" htmlFor={playlist.title}>
                    {playlist.title}
                  </label>
                </li>
              ))}
            </ul>
            <hr />
          </>
        )}
        <h5 className="heading-5 mb-2">Create a Playlist</h5>
        <input
          type="email"
          className="input mb-4"
          placeholder="Playlist Title"
          value={newPlaylistTitle}
          onChange={(e) => setNewPlaylistTitle(e.target.value)}
        />
        <button className="btn btn-gray" onClick={() => createPlaylistHandler()}>
          Create Playlist
        </button>
      </dialog>
    </div>
  );
}
