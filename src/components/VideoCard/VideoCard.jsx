import './VideoCard.css';

export default function VideoCard({ title, image, channel }) {
  return (
    <div className="card outlined-card video-card ">
      <img className="card-img flex-grow pa-2" src={image} alt={title} />
      <div className="pa-2">
        <h3 className="card-title text-truncate">{title}</h3>
        <p className="card-body">{channel}</p>
      </div>
    </div>
  );
}
