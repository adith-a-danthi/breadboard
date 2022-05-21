import { useEffect } from 'react';
import { Navbar } from '../components';
import VideoListItem from '../components/VideoListItem/VideoListItem';
import { useUser } from '../contexts/user-context';
import { getLikedVideos, removeLikedVideo } from '../utils/likedVideos-utils';

export default function LikedVideos() {
  const {
    userData: { likedVideos = [] },
    dispatchUserData,
  } = useUser();

  useEffect(() => {
    getLikedVideos(dispatchUserData);
  }, []);

  return (
    <div>
      <main className="pa-4 px-8">
        <Navbar showNavLinks />

        <section id="liked-videos" className="my-4">
          <h2 className="heading-3 mb-4">Liked Videos</h2>
          <div className="flex flex-col gap-2 justify-space-around">
            {likedVideos.map((video) => (
              <VideoListItem key={video._id} video={video} removeItemHandler={removeLikedVideo} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
