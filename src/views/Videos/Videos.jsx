import { Link } from 'react-router-dom';
import { Navbar, VideoCard } from '../../components';
import { useVideos } from '../../contexts/videos-context';

import './Videos.css';

export default function Videos() {
  const { videos } = useVideos();

  return (
    <div>
      <main className="pa-4 px-8">
        <Navbar showNavLinks />

        <section id="videos-list" className="flex gap-2 flex-wrap justify-space-around video-list">
          {videos.map(({ _id, title, thumbnail, creator }) => (
            <Link to={`/videos/${_id}`} key={_id}>
              <VideoCard key={_id} title={title} image={thumbnail} channel={creator} />
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
