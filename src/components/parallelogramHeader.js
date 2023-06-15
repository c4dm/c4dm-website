import React from "react";


const ParallelogramHeader = ({text,backgroundColor,textColor}) => {
    return (
      <div className={`parallelogram has-background-${backgroundColor}`}>
        <h1 className={`is-size-2-desktop is-size-3-tablet is-size-4-mobile has-text-centered has-text-weight-bold has-text-${textColor}`}>
          {text}
        </h1>
      </div>
    );
}

export default ParallelogramHeader;