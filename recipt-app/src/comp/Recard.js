import React, { useState } from "react";
import './Recard.css';
const Recard = ({ title, image, prepTime, type, nutrition, ingredients = [], instructions }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="recipe-card">
      <img src={image} alt={title} className="recipe-card-image" />
      <div className="recipe-card-content">
        <h3 className="recipe-title">{title}</h3>
        <div className="recipe-meta">
          <p className="prep-time">
            <span role="img" aria-label="clock">⏱</span> {prepTime} minutes
          </p>
          <p className="recipe-type">{type}</p>
          <p className="recipe-nutrition">{nutrition}</p>
        </div>
        <button className="show-details-btn" onClick={toggleDetails}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
        {showDetails && (
          <div className="recipe-details">
            <h4>Ingredients:</h4>
            <ul className="ingredients-list">
              {ingredients.map((ingredient, index) => (
                <li key={index} className="ingredient-item">{ingredient}</li>
              ))}
            </ul>
            <h4>Instructions:</h4>
            <p className="instructions-text">{instructions}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recard;
