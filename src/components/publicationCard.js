import React from "react";

const PublicationCard = (props) => {
  return (
    <div
      className="card is-flex is-flex-direction-row is-flex-grow-1"
      key={props.slug}
    >
        

        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <strong className="is-6">{props.title || "Name"} </strong>
              <p className="is-3">{props.author}  </p>

              <em>{props.journal || props.conference || props.booktitle}, {props.year}</em>
            </div>
          </div>
         
        </div>
    </div>
  );
};

export default PublicationCard;
