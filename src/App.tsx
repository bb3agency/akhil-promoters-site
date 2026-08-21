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
import { CompanyProfile } from './pages/WhoWeAre/CompanyProfile';
import { VisionMission } from './pages/WhoWeAre/VisionMission';
import { Values } from './pages/WhoWeAre/Values';
import { Partners } from './pages/WhoWeAre/Partners';
import { Story } from './pages/WhoWeAre/Story';
import { Leadership } from './pages/WhoWeAre/Leadership';
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
          <Route path="who-we-are/company-profile" element={<CompanyProfile />} />
          <Route path="who-we-are/vision-mission" element={<VisionMission />} />
          <Route path="who-we-are/values" element={<Values />} />
          <Route path="who-we-are/partners" element={<Partners />} />
          <Route path="who-we-are/story" element={<Story />} />
          <Route path="who-we-are/leadership" element={<Leadership />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<ComingSoon />} />
        </Route>
      </Routes>
    </Router>
  );
}
