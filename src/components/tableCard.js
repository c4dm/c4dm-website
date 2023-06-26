import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";


const TableCard = (props) => {
    const length = Object.keys(props).length;
    return (
      <div className="card columns is-flex is-flex-direction-row">
        <div
          className={`card-image column ${
            length > 1 ? "is-one-fifth" : "is-full"
          }`}
        >
          <div className="media">
            <div className="media-content">{props.first}</div>
          </div>
        </div>
        {length > 1 ? (
          <div
            className={`card-content column ${
              length > 2 ? "is-one-fifth" : "is-four-fifths"
            }`}
          >
            <div className="media">
              <div className="media-content">{props.second}</div>
            </div>
          </div>
        ) : undefined}
        {length > 2 ? (
          <div className="card-content is-three-fifths">
            <div className="media">
                <div className="media-content">
                    {props.third}
                </div>
            </div>
          </div>
        ) : undefined}
      </div>
    );

}

export default TableCard;