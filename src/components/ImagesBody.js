import React from "react";
import Images from "./Images";
/*
 * this returns loading images
 */
function ImagesBody({ photos, imgTag, is_photoFinded }) {
  return (
    <div>
      <h2>{imgTag}</h2>
      <div className="photo-container">
        {is_photoFinded ? (
          <Images photos={photos} />
        ) : (
          <>
            <h2>No Images Found </h2>
            <p>Please try a different search term</p>
          </>
        )}
      </div>
    </div>
  );
}
export default ImagesBody;
