import './CategoryCard.css';

export default function CategoryCard({ icon, title, size }) {
  return (
    <div className="card-container">
      <span className="card-bg"></span>
      <div className="card-content">
        <div className="card-icon mb-4">
          <i className={`${icon} ${size}`}></i>
        </div>
        <h1 className="heading-3">{title}</h1>
      </div>
    </div>
  );
}
