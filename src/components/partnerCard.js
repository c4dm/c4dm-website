import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const PartnerCard = (props) => {
  return (
    <div className="card is-flex is-flex-direction-column is-flex-grow-1">
        <div className="card-image">
          <figure className="image is-256x256">
            {props.image ? (
              <GatsbyImage alt="picture of event" image={props.image} />
            ) : (
              <StaticImage
                alt="default event picture as no event picture was specified"
                src="../../static/defaultevent.png"
              />
            )}
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-6">{props.title || "Name"} </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default PartnerCard;
       