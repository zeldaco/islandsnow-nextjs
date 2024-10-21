'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

const IslandSnowLogo = () => (
  <div className="d-flex justify-content-center my-3">
    <a className="navbar-brand mx-auto" href="https://example.com">
      <Image
        src="/experience-islandsnow-bootstrap-logo.png"
        alt="Island Snow"
        height={40}
        width={250}
      />
    </a>
  </div>
);

export default IslandSnowLogo;
