import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const PartnerCard = (props) => {
  return (
          <div class="card is-flex is-flex-direction-column is-flex-grow-1" key={props.slug}>
            <div class="card-image">
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
            <div class="card-content">
              <div className="media">
                <div className="media-content">
                  <p class="title">
                    {props.title || "Name"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        

  );
};

export default PartnerCard;
       