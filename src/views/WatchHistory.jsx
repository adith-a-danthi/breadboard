import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from '../components';
import VideoListItem from '../components/VideoListItem/VideoListItem';
import { useUser } from '../contexts/user-context';
import { getHistory, removeVideoFromHistory } from '../utils/history-utils';

export default function WatchHistory() {
  const {
    userData: { history },
    dispatchUserData,
  } = useUser();

  useEffect(() => {
    getHistory(dispatchUserData);
  }, []);

  return (
    <div>
      <main className="pa-4 px-8">
        <Navbar showNavLinks />

        <section id="history" className="my-4">
          <h2 className="heading-3 mb-4">Watch History</h2>
          <div className="flex flex-col gap-2 justify-space-around">
            {history.map((video) => (
              <Link to={`/videos/${video._id}`} key={video._id}>
                <VideoListItem video={video} removeItemHandler={removeVideoFromHistory} />
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
