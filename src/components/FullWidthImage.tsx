'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

// FullWidthImage Component
const FullWidthImage = () => (
  <div className="w-100">
    <Image
      src="/experience-islandsnow-bootstrap-main.png"
      alt="Island Snow Main Banner"
      layout="responsive"
      width={1920}
      height={1080}
      className="img-fluid"
    />
  </div>
);

export default FullWidthImage;
