import React from "react";

const NewsCard = (props) => {
  return (
    <div className="container newsContainer">
    <div
      className="card columns is-flex is-flex-direction-row is-flex-grow-1"
      key={props.slug}
    >
        <div className="card-content column is-one-fifth">
          
            <p className="subtitle is-6">{props.date || null}</p>
        </div>

        <div className="media-content column is-four-fifth">
            
              <p className="title is-4">{props.title || "New Blog Entry"} </p>
              <div className="card-footer p-2 has-text-centered is-align-self-center">
              Read More
        </div>
          
          </div>
        </div>
    </div>
    
  );
};

export default NewsCard;
