import { useEffect, useState } from 'react';
import { Navbar, PlaylistCard, PlaylistModal } from '../components';
import { useUser } from '../contexts/user-context';
import { getPlaylists } from '../utils/playlist-utils';

export default function PlaylistPage() {
  const {
    userData: { playlists = [] },
    dispatchUserData,
  } = useUser();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getPlaylists(dispatchUserData);
  }, []);

  return (
    <div>
      <main className="pa-4 px-8">
        <Navbar showNavLinks />

        <section id="liked-videos" className="my-4">
          <div className="flex justify-space-between">
            <h2 className="heading-3 mb-4">Playlists</h2>
            <button className="btn btn-gray" onClick={() => setShowModal(true)}>
              Create Playlist
            </button>
          </div>
          <div className="flex flex-col gap-2 justify-space-around">
            {playlists.map((playlist) => (
              <PlaylistCard key={playlist._id} playlist={playlist} />
            ))}
          </div>
        </section>
      </main>

      <PlaylistModal showModal={showModal} setShowModal={setShowModal} createOnly />
    </div>
  );
}
