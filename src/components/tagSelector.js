import React, {useState, useEffect} from "react";
import {Link} from "gatsby";
import {startCase, camelCase, kebabCase} from 'lodash';

const TagSelector = (props) => {
  const [selected, setSelected] = useState(false);
//   useEffect(() => {props.callback(selected)}, [selected])

  return (
    <div>
      <div className="buttons are-small">
        {props.data.allTags.group.map((tag) => (
          // If selected=='tag', then grey it out
            <button
                className="button is-grey"
                key={tag.fieldValue}
                onClick={() => setSelected(tag.fieldValue)}
                disabled={selected === tag.fieldValue}
            >
                {startCase(camelCase(tag.fieldValue))} ({tag.totalCount})
            </button>
        ))}

        {/* // If selected==False, then grey this out */}
        <button 
            className="button" 
            onClick={() => setSelected(false)}
            disabled={!selected}
        >
            Clear Tags (x)
        </button>
      </div>
    </div>
  );
};

export default TagSelector;

// data - the data from a graphql query
// filterTemplate – the slug for the filtered template page
// root - the slug for the unfiltered page (accessed when we clear it)