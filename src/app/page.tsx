'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './style.css';
import TopMenu from '@/components/TopMenu';
import IslandSnowLogo from '@/components/IslandSnowLogo';
import MiddleMenu from '@/components/MiddleMenu';
import FooterMenu from '@/components/FooterMenu';
import FullWidthImage from '@/components/FullWidthImage';

// Main Component (Page)
const Home = () => (
  <main>
    <Container fluid id="footer">
      <TopMenu />
      <IslandSnowLogo />
      <MiddleMenu />
      <FullWidthImage />
      <FooterMenu />
    </Container>
  </main>
);

export default Home;
