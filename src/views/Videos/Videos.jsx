import { Link, useSearchParams } from 'react-router-dom';
import { Navbar, VideoCard } from '../../components';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import { useVideos } from '../../contexts/videos-context';
import { useState } from 'react';

import './Videos.css';

export default function Videos() {
  const { categories, videos } = useVideos();
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam ?? '');

  const filteredVideos = selectedCategory
    ? videos.filter((video) => video.category === selectedCategory)
    : videos;

  return (
    <div>
      <main className="pa-4 px-8">
        <Navbar showNavLinks />

        <CategoryFilter
          className="px-4"
          categories={categories}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />

        <section id="videos-list" className="flex gap-2 flex-wrap justify-space-around video-list">
          {filteredVideos.map(({ _id, title, thumbnail, creator }) => (
            <Link to={`/videos/${_id}`} key={_id}>
              <VideoCard key={_id} title={title} image={thumbnail} channel={creator} />
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
