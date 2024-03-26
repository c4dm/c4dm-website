import React from "react";

const TableCard = (props) => {
    const length = Object.keys(props).length;
    return (
      <div className="card table-card columns">
        <div
          className={`card-image column ${
            length > 1 ? "is-2-desktop" : "is-full" //is 2 6ths
          } is-full-mobile`}
        >
          <div className="media">
            <div className="media-content">{props.first}</div>
          </div>
        </div>
        {length > 1 ? (
          <div
            className={`card-content column ${
              length > 2 ? "is-one-fifth" : "is-four-fifths"
            } is-full-mobile`}
          >
            <div className="media">
              <div className="media-content">{props.second}</div>
            </div>
          </div>
        ) : undefined}
        {length > 2 ? (
          <div className="card-content column is-three-fifths is-full-mobile">
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