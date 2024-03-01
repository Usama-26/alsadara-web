import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import { Lightbox } from "yet-another-react-lightbox";

export function GalleryGrid({ images }) {
  const [index, setIndex] = useState(-1);

  const handleClick = (index) => setIndex(index);
  return (
    <div className="constrained-padded mx-auto my-10 overflow-hidden">
      <div className="mt-4">
        <h3 className="font-display lg:text-2xl text-xl mb-4">
          Portfolio Gallery
        </h3>
        <Gallery
          images={images}
          margin={4}
          rowHeight={300}
          enableImageSelection={false}
          onClick={handleClick}
        />
        <Lightbox
          slides={images}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </div>
    </div>
  );
}
