import './VideoPage.css';

import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar, VideoCard } from '../../components';
import { useVideos } from '../../contexts/videos-context';
import { useAuth } from '../../contexts/auth-context';

export default function VideoPage() {
  // Hooks
  const { videoId } = useParams();
  const { videos } = useVideos();
  const {
    authState: { isAuthenticated },
  } = useAuth();
  const navigate = useNavigate();

  // Data
  const video = videos.find((video) => video._id === videoId);
  const recommendedVideos = videos.filter(
    (ele) => ele.category === video.category && ele._id !== video._id
  );

  useEffect(() => {
    video ?? navigate('/404');
  }, []);

  const clickHandler = () => {
    !isAuthenticated && navigate('/login');
  };

  return (
    <div>
      <main className="pa-4 px-8">
        <Navbar showNavLinks />

        <div className="video-page">
          <div className="video">
            {/* Video */}
            <section id="video-embed">
              <iframe
                width={'100%'}
                className="video-embed my-4"
                src={video?.videoUrl}
                title={video?.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </section>

            <section className="video-details">
              {/* Actions */}
              <div className="flex gap-1 justify-end">
                <button className="btn btn-gray outlined small" onClick={() => clickHandler()}>
                  <i className="fas fa-thumbs-up mr-2"></i>
                  Like
                </button>
                <button className="btn btn-gray outlined small" onClick={() => clickHandler()}>
                  <i className="fas fa-hourglass mr-2"></i>
                  Watch Later
                </button>
                <button className="btn btn-gray outlined small" onClick={() => clickHandler()}>
                  <i className="fas fa-list-ul mr-2"></i>
                  Add to playlist
                </button>
              </div>
              {/* Details */}
              <h1 className="text-xl">{video?.title}</h1>
              <p className="text-md">{video?.description}</p>
              <p className="text-base font-weight-bold">@{video?.creator}</p>
            </section>
          </div>

          {/* Recommended Videos */}
          <section className="recommended-videos">
            <h2>Recommended Videos</h2>
            <div className="videos">
              {recommendedVideos.map(({ _id, title, thumbnail, creator }) => (
                <Link to={`/videos/${_id}`} key={_id}>
                  <VideoCard key={_id} title={title} image={thumbnail} channel={creator} />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
