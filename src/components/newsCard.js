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
            

          
          </div>
        </div>
    </div>
    
  );
};

export default NewsCard;
