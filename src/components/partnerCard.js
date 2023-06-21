import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const PartnerCard = (props) => {
  return (
    <div
      className="card is-flex is-flex-direction-column is-flex-grow-1"
      key={props.slug}
    >
      <Link to={props.link}>
        <div className="card-image">
          <figure className="image">
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
        { props.title ? 
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title">{props.title}</p>
            </div>
          </div>
        </div> : null }
      </Link>
    </div>
  );
};

export default PartnerCard;
       