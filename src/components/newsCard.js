import React from "react";
// import { Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const NewsCard = (props) => {
  return (
    <div
      className="card is-flex is-flex-direction-row is-flex-grow-1"
      key={props.slug}
    >
      {/* <Link to={`${props.slug}/#header`}> */}
        {/* <div className="card-image is-128x128">
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
        </div> */}

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
      {/* </Link> */}
    </div>
  );
};

export default NewsCard;
