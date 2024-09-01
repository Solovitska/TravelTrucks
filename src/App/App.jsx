import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from '../components/Loader/Loader.jsx';
import Reviews from '../components/Reviews/Reviews.jsx';

const HomePage = lazy(() =>
  import('../pages/HomePage/HomePage.jsx')
);
const CamperPage = lazy(() =>
  import('../pages/CamperPage/CamperPage.jsx')
);
const CatalogPage = lazy(() =>
  import('../pages/CatalogPage/CatalogPage.jsx')
);
const NotFoundPage = lazy(() =>
  import('../pages/NotFoundPage/NotFoundPage.jsx')
);
const Features = lazy(() =>
  import('../components/Features/Features.jsx')
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CamperPage />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
