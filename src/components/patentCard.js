import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const PatentCard = (props) => {
  return (
    <div
      className="card is-flex is-flex-direction-row is-flex-grow-1"
      key={props.slug}
    >
        <div className="card-content">
          <div className="media">
            <div className="media-content">

            </div>
          </div>
         
        </div>
    </div>
  );
};

export default PatentCard;
