import React, {useState, useEffect, useMemo} from "react";
import {Link} from "gatsby";
import {startCase, camelCase} from 'lodash';

const filterData = (nodes, filter) => nodes.filter((node) => !filter ? true : node.frontmatter?.tags?.includes(filter) || node.frontmatter?.role?.includes(filter) || node.year?.includes(filter));


const TagSelector = ({tags,nodes,callback}) => {
    const [selected, setSelected] = useState(false);

    const memoFilter = useMemo(() => filterData(nodes,selected), [nodes,selected])

    useEffect(() => {callback(memoFilter)}, [selected,filterData,memoFilter])

    return (
        <div>
        <div className="buttons are-small">
            {tags.group.map((tag) => (
            // If selected=='tag', then grey it out
                <button
                    className="button is-grey"
                    key={tag.fieldValue}
                    onClick={() => setSelected(tag.fieldValue)}
                    disabled={selected === tag.fieldValue}
                >
                    {(tag.fieldValue == 'PhD') ? tag.fieldValue : startCase(camelCase(tag.fieldValue))} ({tag.totalCount})
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