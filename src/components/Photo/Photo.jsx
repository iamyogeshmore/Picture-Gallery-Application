import React from "react";

function Photo({ photo }) {
  return (
    <div className="photo">
      <img src={photo.urls.small} alt={photo.description || "No description"} />
      <div className="photo-info">
        <a href={photo.user.links.html} target="_blank">
          Author {photo.user.name}
        </a>
        <p>{photo.description || "No description available"}</p>
      </div>
    </div>
  );
}

export default Photo;
