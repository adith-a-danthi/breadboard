import { Link } from 'react-router-dom';
import { Navbar } from '../components';

export default function Page404() {
  return (
    <>
      <main className="px-8">
        <Navbar />
        <section className="text-center ma-8 py-8">
          <h1 className="heading-1">404</h1>
          <h3 className="heading-3 mb-8">Oops! You seem to have accessed a broken link.</h3>
          <Link to="/">
            <button className="btn btn-gray">
              <i className="fas fa-chevron-left mr-2"></i>
              Go To Home
            </button>
          </Link>
        </section>
      </main>
    </>
  );
}
