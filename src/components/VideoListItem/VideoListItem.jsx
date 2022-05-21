import { Link } from 'react-router-dom';
import { useUser } from '../../contexts/user-context';
import './VideoListItem.css';

export default function VideoListItem({ video, removeItemHandler }) {
  const { title, thumbnail, creator } = video;
  const { dispatchUserData } = useUser();

  return (
    <>
      <div className="video-list-item">
        {/* Details */}
        <img className="thumbnail" src={thumbnail} alt={title} />
        <div className="flex-grow mx-4 align-self-start">
          <Link to={`/videos/${video._id}`}>
            <h3 className="text-lg">{title}</h3>
            <p className="text-base">@{creator}</p>
          </Link>
        </div>

        {/* Action Button */}
        <button
          className="btn btn-gray outlined small align-self-end ma-4"
          onClick={() => removeItemHandler(dispatchUserData, video)}
        >
          <i className="fas fa-times mr-2"></i>
          Remove
        </button>
      </div>
    </>
  );
}
