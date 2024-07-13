import React, { useEffect, useMemo, useState } from "react";

// For display, title case is applied to tags, while uppercase letters already
// in the tag are preserved, unless there exists a version of the tag with less
// non-starting letters capitalized. E.g. if there's "research" and "Research",
// they'll be displayed as "Research" (2). If there's "research" and "reseARCH",
// they'll be displayed as "Research" (2) as well.
// However, the filter to group and sort tags and calculate counts is case-insensitive.
// This means "research" and "Research" as well as "Grants & sponsorships" and
// "grants & Sponsorships" will be grouped, but displayed as "Research" and "Grants 
// & Sponsorships" respectively.

// Function to capitalize the first letter of each word in a string while preserving existing uppercase letters
function capitalizeWordsPreserveCase(str) {
  return str.replace(/\b\w+/g, function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
}

// Case-insensitive filter function
const filterData = (nodes, filter) => nodes.filter((node) => {
  if (!filter) return true;
  const normalizedFilter = filter.toLowerCase();
  return node.frontmatter?.tags?.some(tag => tag.toLowerCase() === normalizedFilter) ||
         node.frontmatter?.role?.some(role => role.toLowerCase() === normalizedFilter) ||
         (node.year && node.year.toLowerCase().includes(normalizedFilter));
});

const TagSelector = ({ tags, nodes, callback }) => {
  const [selected, setSelected] = useState(false);

  // Create a sorted map of tags, merging those that are the same when normalized
  const sortedTagMap = useMemo(() => {
    const map = new Map();
    tags.group.forEach(tag => {
      const normalizedTag = tag.fieldValue.toLowerCase();
      if (!map.has(normalizedTag)) {
        map.set(normalizedTag, { 
          fieldValue: tag.fieldValue,
          totalCount: tag.totalCount,
          variations: [{ fieldValue: tag.fieldValue, count: tag.totalCount }]
        });
      } else {
        const existingTag = map.get(normalizedTag);
        existingTag.totalCount += tag.totalCount;
        existingTag.variations.push({ fieldValue: tag.fieldValue, count: tag.totalCount });
        // Keep the version with the highest individual count for display
        if (tag.totalCount > existingTag.variations[0].count) {
          existingTag.fieldValue = tag.fieldValue;
          existingTag.variations.sort((a, b) => b.count - a.count);
        }
      }
    });
    
    // Convert map to array, sort by normalized tag, and convert back to map
    return new Map([...map.entries()].sort((a, b) => a[0].localeCompare(b[0])));
  }, [tags]);

  const memoFilter = useMemo(() => filterData(nodes, selected), [nodes, selected]);

  useEffect(() => {
    callback(memoFilter);
  }, [selected, callback, memoFilter]);

  return (
    <div>
      <div className="buttons are-small">
        {Array.from(sortedTagMap.values()).map((tagInfo) => (
          <button
            className={`button ${selected && selected.toLowerCase() === tagInfo.fieldValue.toLowerCase() ? 'is-grey' : ''}`}
            key={tagInfo.fieldValue}
            onClick={() => setSelected(tagInfo.fieldValue)}
            disabled={selected && selected.toLowerCase() === tagInfo.fieldValue.toLowerCase()}
          >
            {capitalizeWordsPreserveCase(tagInfo.fieldValue)} ({tagInfo.totalCount})
          </button>
        ))}
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