import React from "react";
import {Link} from "gatsby";
import {startCase, camelCase, kebabCase} from 'lodash';

const TagSelector = (props) => {
  return (
    
    <div>
        
        <div className="buttons are-small">
            {/* <h3 className="subtitle">tags:</h3> */}
            {props.data.allTags.group.map(tag => (
                // If selected=='tag', then grey it out
            <button className="button" key={tag.fieldValue}>
                <Link to={`${props.root}/tags/${kebabCase(tag.fieldValue)}/`}>
                {startCase(camelCase(tag.fieldValue))} ({tag.totalCount})
                </Link>
            </button>
            ))}

            {/* // If selected==False, then grey this out */}
            <button className="button">
                <Link to={props.root}>
                Clear Tags (x)
                </Link>
            </button>
        </div>
    </div>
  );
};

export default TagSelector;

// data - the data from a graphql query
// filterTemplate – the slug for the filtered template page
// root - the slug for the unfiltered page (accessed when we clear it)