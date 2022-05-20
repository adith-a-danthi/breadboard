import { Link } from 'react-router-dom';
import { Navbar, CategoryCard, VideoCard, Footer } from '../../components';

import './Home.css';

export default function Home() {
  return (
    <div>
      <main className="pa-4 px-8">
        <Navbar showNavLinks />
        <section className="text-center my-8">
          <h1 className="heading-1">Breadboard</h1>
          <h3 className="text-xl">Never get board of tech!</h3>

          <Link to="/">
            <button className="btn btn-gray mt-4">View All Videos</button>
          </Link>
        </section>

        <hr />

        <section className="mb-8">
          <h3 className="heading-3">Categories</h3>
          <div className="my-4 category-list">
            <CategoryCard icon="fas fa-mobile fa-xl" title="Phones" />
            <CategoryCard icon="fas fa-headphones fa-xl" title="Audio" />
            <CategoryCard icon="fas fa-gamepad fa-xl" title="Gaming" />
            <CategoryCard icon="fas fa-laptop fa-xl" title="Laptops" />
          </div>
        </section>

        <hr />

        <section className="mb-8">
          <h3 className="heading-3">Top Videos</h3>
          <div className="top-videos my-4">
            <VideoCard
              title="Pixel 4a"
              image="https://images.unsplash.com/photo-1598778932246-8d86324faa18?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1636"
              channel="@Google"
            />
            <VideoCard
              title="Sony WH-1000XM4"
              image="https://images.unsplash.com/photo-1574494461754-de04dc403eec?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
              channel="@Sony"
            />
            <VideoCard
              title="Super Nintendo"
              image="https://images.unsplash.com/photo-1602029908656-b54d40a76ad8?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
              channel="@Nintendo"
            />
            <VideoCard
              title="MacBook Air"
              image="https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
              channel="@Apple"
            />
            <VideoCard
              title="MacBook Air"
              image="https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
              channel="@Apple"
            />
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
