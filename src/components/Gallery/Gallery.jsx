import React, { useState } from "react";
import Photo from "../Photo/Photo";
import "../Gallery/Gallery.css";

const ACCESS_TOKEN = "SFlWyZnReaK2IWDm3mOGgZSezrr4DtirZm2hupSDF_E";

function Gallery() {
  const [category, setCategory] = useState("");
  const [photos, setPhotos] = useState([]);
  const [noPhotosMessage, setNoPhotosMessage] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${category}`,
        {
          headers: {
            Authorization: `Client-ID ${ACCESS_TOKEN}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch photos from api");
      }

      const data = await response.json();
      const results = data.results;

      if (results.length > 0) {
        setPhotos(results);
        setNoPhotosMessage("");
      } else {
        setPhotos([]);
        setNoPhotosMessage("No photos found for this category");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Picture Gallery</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a category name..."
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="input-search-field"
        />
        <button onClick={handleSearch} className="search-btn">
          Search
        </button>
      </div>
      <div className="gallery">
        {noPhotosMessage ? (
          <p className="gallery-no-photos">{noPhotosMessage}</p>
        ) : (
          photos.map((photo) => <Photo key={photo.id} photo={photo} />)
        )}
      </div>
    </div>
  );
}

export default Gallery;
