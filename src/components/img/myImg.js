import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MyImage = ({ image }) => (
    <LazyLoadImage
        className="photo-item"
        effect="black-and-white"
        alt={image && image.alt}
        src={image && image.src} // use normal <img> attributes as props
    />
);

export default MyImage;
