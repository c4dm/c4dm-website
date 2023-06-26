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

      {!props.date &&
      !props.title &&
      !props.author &&
      !props.html ? undefined : (
        <div className="card-content is-flex is-flex-direction-column is-flex-grow-1">
          <div className="media is-flex-grow-1">
            <div className="media-content">
              {props.date ? (
                <p className="subtitle is-7">{props.date}</p>
              ) : undefined}
              {props.title ? (
                <p
                  className={`title is-${
                    props.largeTitle ? "4" : "6"
                  } is-capitalized`}
                >
                  {props.title}{" "}
                </p>
              ) : undefined}
              {props.author ? (
                <p className="is-size-7"> by {props.author}</p>
              ) : undefined}
            </div>
          </div>
          <div className="content is-size-7">
            <div
              className="blog-card-text"
              dangerouslySetInnerHTML={{ __html: props.html }}
            ></div>
          </div>
          {!props.html ? undefined : (
            <div className="card-footer p-2 has-text-centered is-align-self-center">
              <Link
                to={`${props.slug}/#header`}
                className="has-text-link has-text-weight-bold"
              >
                Read More
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogCard;
