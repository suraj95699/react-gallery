import React from "react";

/*
 * return the images
 */
function Images(props) {
  return (
    <ul>
      {props.photos.map((photo) => (
        <li key={photo.id}>
          <img
            src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
          />
        </li>
      ))}
    </ul>
  );
}
export default Images;
