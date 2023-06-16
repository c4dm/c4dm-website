import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const BlogCard = (props) => {
  return (
    <div
      className="card is-flex is-flex-direction-column is-flex-grow-1"
      key={props.slug}
    >
      <div className="card-image">
        <Link to={`${props.slug}/#header`}>
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
        </Link>
      </div>


      <div className="card-content is-flex is-flex-direction-column is-flex-grow-1">
        <div className="media is-flex-grow-1">
          <div className="media-content">
            <p className="subtitle is-7">{props.date || null}</p>
            <p className="title is-6">{props.title || "New Blog Entry"} </p>
            <p className="is-size-7"> by {props.author}</p>
          </div>
        </div>
        <div className="content is-size-7">
          <div
            className="blog-card-text"
            dangerouslySetInnerHTML={{ __html: props.html }}
          ></div>
        </div>
        <div className="card-footer p-2 has-text-centered is-align-self-center">
          <Link
            to={`${props.slug}/#header`}
            className="has-text-link has-text-weight-bold"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
