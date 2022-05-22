import { Link } from 'react-router-dom';
import { Navbar, CategoryCard, VideoCard, Footer } from '../../components';
import { useVideos } from '../../contexts/videos-context';

import './Home.css';

export default function Home() {
  const { topVideos, categories } = useVideos();
  return (
    <div>
      <main className="pa-4 px-8">
        <Navbar showNavLinks />
        <section className="text-center my-8">
          <h1 className="heading-1">Breadboard</h1>
          <h3 className="text-xl">Never get board of tech!</h3>

          <Link to="/videos">
            <button className="btn btn-gray mt-4">View All Videos</button>
          </Link>
        </section>

        <hr />

        <section className="mb-8">
          <h3 className="heading-3">Categories</h3>
          <div className="my-4 category-list">
            {categories.map(({ _id, categoryName, categoryIcon }) => (
              <Link to={`/videos?category=${categoryName}`} key={_id}>
                <CategoryCard title={categoryName} icon={categoryIcon} size="fa-xl" />
              </Link>
            ))}
          </div>
        </section>

        <hr />

        <section className="mb-8">
          <h3 className="heading-3">Top Videos</h3>
          <div className="top-videos my-4">
            {topVideos?.map(({ _id, title, thumbnail, creator }) => (
              <Link to={`/videos/${_id}`} key={_id}>
                <VideoCard title={title} image={thumbnail} channel={creator} />
              </Link>
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
