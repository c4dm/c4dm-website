import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const PeopleCard = (props) => {
  return (
      // Table Row:
      
      <tr>
        {props.headings.map((header)=>(
          <td>{props[header]}</td>
          )
        )
        }
      </tr>

    // <div
    //   className="card is-flex is-flex-direction-column is-flex-grow-1"
    //   key={props.slug}
    // >
    //     <div className="card-image">
    //       <figure className="image">
    //         {props.image ? (
    //           <GatsbyImage alt="picture of event" image={props.image} />
    //         ) : (
    //           <StaticImage
    //             alt="default event picture as no event picture was specified"
    //             src="../../static/defaultevent.png"
    //           />
    //         )}
    //       </figure>
    //     </div>

    //     <div className="card-content">
    //       <div className="media">
    //         <div className="media-content">
    //           <p className="title is-4">{props.name || "Name"} </p>
    //           <p className="subtitle is-6">{props.role}</p>
    //         </div>
    //       </div>
    //       <div className="content">
    //         <p>{props.topic}</p>
    //       </div>
    //     </div>
    // </div>
  );
};

export default PeopleCard;
