import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from '../components';
import VideoListItem from '../components/VideoListItem/VideoListItem';
import { useUser } from '../contexts/user-context';
import { getWatchLater, removeVideoFromWatchLater } from '../utils/watchLater-utils';

export default function WatchLater() {
  const {
    userData: { watchLater },
    dispatchUserData,
  } = useUser();

  useEffect(() => {
    getWatchLater(dispatchUserData);
  }, []);

  return (
    <div>
      <main className="pa-4 px-8">
        <Navbar showNavLinks />

        <section id="watch-later" className="my-4">
          <h2 className="heading-3 mb-4">Watch Later</h2>
          <div className="flex flex-col gap-2 justify-space-around">
            {watchLater.map((video) => (
              <Link to={`/videos/${video._id}`} key={video._id}>
                <VideoListItem video={video} removeItemHandler={removeVideoFromWatchLater} />
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
