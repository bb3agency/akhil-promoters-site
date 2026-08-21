/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ProjectDetails } from './pages/ProjectDetails';
import { BuyersGuide } from './pages/BuyersGuide';
import { SupportServices } from './pages/SupportServices';
import { WhoWeAre } from './pages/WhoWeAre';
import { ComingSoon } from './pages/ComingSoon';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetails />} />
          <Route path="buyers-guide" element={<BuyersGuide />} />
          <Route path="support-services" element={<SupportServices />} />
          <Route path="who-we-are" element={<WhoWeAre />} />
          <Route path="who-we-are/*" element={<WhoWeAre />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<ComingSoon />} />
        </Route>
      </Routes>
    </Router>
  );
}
