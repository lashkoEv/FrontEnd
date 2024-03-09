import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import { getImages } from "../../utils";

import "./Gallery.css";

export const Gallery = () => {
  return (
    <section className="gallery">
      <ImageGallery
        items={getImages()}
        showBullets={true}
        autoPlay={true}
        showPlayButton={false}
      />
    </section>
  );
};
