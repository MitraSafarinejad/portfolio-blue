import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SmoothScroll from './components/SmoothScroll';
import Home from './pages/Home';
import Work from './pages/Work';
import WorkDetail from './pages/WorkDetail';
import Lab from './pages/Lab';
import Playground from './pages/Playground';
import Journal from './pages/Journal';
import JournalDetail from './pages/JournalDetail';
import Archive from './pages/Archive';
import About from './pages/About';
import Now from './pages/Now';
import Contact from './pages/Contact';

function ScrollToTop() {
  return null;
}

function App() {
  return (
    <HashRouter>
      <SmoothScroll>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<WorkDetail />} />
            <Route path="/lab" element={<Lab />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/journal/:slug" element={<JournalDetail />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/about" element={<About />} />
            <Route path="/now" element={<Now />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </SmoothScroll>
    </HashRouter>
  );
}

export default App;
