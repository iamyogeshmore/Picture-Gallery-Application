import React, { useState } from "react";

function Photo({ photo, onWordExtracted }) {
  const [startingPoint, setStartingPoint] = useState("");
  const [endPoint, setEndPoint] = useState("");
  const [extractedWord, setExtractedWord] = useState([]);

  const extractWord = () => {
    if (photo.description && startingPoint !== "" && endPoint !== "") {
      const words = photo.description
        .split(" ")
        .slice(startingPoint - 1, endPoint)
        .join(" ");
      setExtractedWord([words]);
      console.log(words);
      onWordExtracted(words);
    }
  };

  return (
    <div className="photo">
      <img src={photo.urls.small} alt={photo.description || "No description"} />
      <div className="photo-info">
        <a href={photo.user.links.html} target="_blank">
          Author {photo.user.name}
        </a>
        <p>{photo.description || "No description available"}</p>
        <input
          type="number"
          value={startingPoint}
          onChange={(e) => setStartingPoint(e.target.value)}
        />
        <input
          type="text"
          value={endPoint}
          onChange={(e) => setEndPoint(e.target.value)}
        />
        <button onClick={extractWord}> words</button>
      </div>
    </div>
  );
}

export default Photo;
