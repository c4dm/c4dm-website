import React from "react";
import { Link, graphql } from "gatsby";
import {startCase, camelCase, kebabCase} from 'lodash';

const TagSelector = (props) => {
  return (
    <div>
        <h1>Tags</h1>
        <ul>
            {props.data.allTags.group.map(tag => (
                // If selected=='tag', then grey it out
            <li key={tag.fieldValue}>
                <Link to={`${props.filterTemplate}${kebabCase(tag.fieldValue)}/`}>
                {startCase(camelCase(tag.fieldValue))} ({tag.totalCount})
                </Link>
            </li>
            ))}
            <li>
                <Link to={props.root}>
                Clear Tags
                </Link>
            </li>
        </ul>
        </div>
  );
};

export default TagSelector;

// data - the data from a graphql query
// filterTemplate – the slug for the filtered template page
// root - the slug for the unfiltered page (accessed when we clear it)