import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import CustomCursor from './CustomCursor';
import StoryMap from './StoryMap';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="grain">
      <CustomCursor />
      <Navigation />
      {isHome && <StoryMap />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
