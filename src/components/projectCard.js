import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const ProjectCard = (props) => {
  return (
    <div
      className="card columns is-flex is-flex-direction-row"
      key={props.slug}
    >
        <div className="card-image column is-one-fifth">
          <figure className="image is-128x128">
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

        <div className="card-content column is-four-fifths">
          <div className="media">
            <div className="media-content">
              <p className="title is-6">{props.title || "Name"} </p>
              <p className="is-3">{props.author}  </p>
              <p>{props.grant}</p>
            </div>
          </div>
         
        </div>
    </div>
  );
};

export default ProjectCard;
