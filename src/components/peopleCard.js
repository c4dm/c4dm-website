import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const PeopleCard = (props) => {
  return (

    <div

      className="card columns is-flex is-flex-direction-row"
      key={props.url}
    >
        <div className="card-image column is-1 has-text-centered">
          <figure className="image is-64x64 is-inline-block">
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


        <div className="card-content column is-one-fifth">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{props.name || "Name"} </p>
              <p className="subtitle is-7">{props.person.acadposition || "Academic Position"}  </p>
            </div>
          </div>
        </div>

        <div className="card-content column is-auto">
          <div className="media">
            <div className="media-content">
              <p className="is-3">{props.person.blurb || "description"}  </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default PeopleCard;
