import React from "react";

const NewsCard = (props) => {
  return (
    <div class="container">
    <div
      className="card is-flex is-flex-direction-row is-flex-grow-1"
      key={props.slug}
    >
        <div className="card-content">
          <div className="media">
            <p className="subtitle is-6">{props.date || null}</p>
            <div className="media-content">
              <p className="title is-4">{props.title || "New Blog Entry"} </p>
              <div className="blog-card-text" dangerouslySetInnerHTML={{__html:props.html}}></div>
              <div className="card-footer p-2 has-text-centered is-align-self-center">
              Read More
              </div>
          </div>
          </div>
        </div>
    </div>
    </div>
  );
};

export default NewsCard;
