import React, { useState } from "react";

function Photo({ photo, onWordExtracted }) {
  const [startingPoint, setStartingPoint] = useState("");
  const [endPoint, setEndPoint] = useState("");
  const [extractedWord, setExtractedWord] = useState([]);

  const extractWord = () => {
    if (!photo.description) {
      console.error("No description available.");
      alert("No description available.");
      return;
    }

    const descriptionWords = photo.description.split(/\s+/);
    const start = parseInt(startingPoint);
    const end = parseInt(endPoint);

    if (start < 1 || end < 1) {
      console.error("Starting and ending points must be positive.");
      alert("Starting and ending points must be positive.");
      return;
    }

    if (end > descriptionWords.length) {
      console.log(descriptionWords);
      console.error("End point exceeds the total number of words in the description.");
      alert("End point exceeds the total number of words in the description.");
      return;
      console.log(descriptionWords);
    }

    if (end < start) {
      console.error("Ending point must be greater than or equal to the starting point.");
      alert("Ending point must be greater than or equal to the starting point.");
      return;
    }

    const wordsToExtract = descriptionWords.slice(start - 1, end).join(" ");
    setExtractedWord([wordsToExtract]);
    console.log(wordsToExtract);
    onWordExtracted(wordsToExtract);
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
        <button onClick={extractWord}> Extract words</button>
      </div>
    </div>
  );
}

export default Photo;