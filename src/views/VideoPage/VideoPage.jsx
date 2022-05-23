import './VideoPage.css';

import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Navbar, VideoCard, PlaylistModal } from '../../components';
import { useVideos } from '../../contexts/videos-context';
import { useAuth } from '../../contexts/auth-context';
import { addLikedVideo, removeLikedVideo } from '../../utils/likedVideos-utils';
import { useUser } from '../../contexts/user-context';
import { addVideoToWatchLater, removeVideoFromWatchLater } from '../../utils/watchLater-utils';
import { addVideoToHistory } from '../../utils/history-utils';

export default function VideoPage() {
  // Hooks
  const { videoId } = useParams();
  const { videos } = useVideos();
  const {
    authState: { isAuthenticated },
  } = useAuth();
  const navigate = useNavigate();
  const { userData, dispatchUserData } = useUser();
  const [showModal, setShowModal] = useState(false);

  // Data
  const { likedVideos, watchLater } = userData;

  const isLiked = likedVideos.some((video) => video._id === videoId);
  const isWatchLater = watchLater.some((video) => video._id === videoId);

  const video = videos.find((video) => video._id === videoId);
  const recommendedVideos = videos.filter(
    (ele) => ele.category === video.category && ele._id !== video._id
  );

  useEffect(() => {
    video ?? navigate('/404');
    isAuthenticated && addVideoToHistory(dispatchUserData, video);
  }, []);

  const navigationGuard = () => {
    !isAuthenticated && navigate('/login');
  };

  const handleLike = () => {
    navigationGuard();
    isLiked ? removeLikedVideo(dispatchUserData, video) : addLikedVideo(dispatchUserData, video);
  };

  const handleWatchLater = () => {
    navigationGuard();
    isWatchLater
      ? removeVideoFromWatchLater(dispatchUserData, video)
      : addVideoToWatchLater(dispatchUserData, video);
  };

  const handlePlaylistModal = () => {
    isAuthenticated ? setShowModal(true) : navigate('/login');
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
                <button
                  className={'btn btn-gray small' + (isLiked ? '' : ' outlined')}
                  onClick={() => handleLike()}
                >
                  <i className="fas fa-thumbs-up mr-2"></i>
                  Like
                </button>
                <button
                  className={'btn btn-gray small' + (isWatchLater ? '' : ' outlined')}
                  onClick={() => handleWatchLater()}
                >
                  <i className="fas fa-hourglass mr-2"></i>
                  Watch Later
                </button>
                <button
                  className="btn btn-gray outlined small"
                  onClick={() => handlePlaylistModal()}
                >
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

      <PlaylistModal showModal={showModal} setShowModal={setShowModal} video={video} />
    </div>
  );
}
