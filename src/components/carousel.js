import React, {useState, useEffect} from "react";

// TODO: check if it works properly on mobile

// TODO: potenitally refactor code to make it more effecient

// This carousel implementation uses bulma columns and inline style transform and css transition
// It needs at least 6 items to be displayed properly on all screen sizes

const getSlidePosition = (currentItem,firstItem,numberOfItems,direction,transitionSpeed) => {
    // calculate position index of item to the left
    const leftItem = firstItem === 0 ? numberOfItems - 1 : firstItem - 1;
    // calculate position index of item most to the right
    const rightItem = leftItem === 0 ? numberOfItems - 1 : leftItem - 1;

    if (currentItem === leftItem) {
        return {
            transform: `translateX(-${(currentItem + 1) * 100}%)`,
            transition: `transform ${direction==="left"?0:transitionSpeed/1000}s`,
        };
    }
    else if (currentItem < firstItem) {
        return {
          transform: `translateX(${(numberOfItems - firstItem) * 100}%)`,
          transition: `transform ${
            direction === "right" && currentItem === rightItem ? 0 : transitionSpeed / 1000
          }s`,
        };
    } else {
      return {
        transform: `translateX(-${firstItem * 100}%)`,
        transition: `transform ${
          direction === "right" && currentItem === rightItem
            ? 0
            : transitionSpeed / 1000
        }s`,
      };
    }
}

const Carousel = ({content,transitionSpeed=1000}) => {
    // Define which item is currently first in the carousel array
    const [position, setPosition] = useState(0);
    // flag whether carousel position can be changed
    const [allowNewPosition,setAllowNewPosition] = useState(true);
    // Save which direction the carousel is sliding
    const [slideDirection, setSlideDirection] = useState("");

    // Change "pages" of carousel after click on arrow icon 
    const changePosition = (direction) => {
        if (allowNewPosition) {
            if (direction === "left") {
                setPosition(
                position === 0 ? content.length - 1 : position - 1
                );
            } else {
                setPosition(
                position === content.length - 1 ? 0 : position + 1
                );
            }
            setAllowNewPosition(false)
            setSlideDirection(direction)
        }
    }

    // Wait for end of transition before allowing to change the carousel position
    useEffect(()=>{
        const blockContentChange = setTimeout(()=>{
            setAllowNewPosition(true)
        },transitionSpeed)
        return () => clearTimeout(blockContentChange)
    },[setAllowNewPosition,position])

    return (
      <div className="carousel">
        <div className="carousel-inner">
          <span className="icon" onClick={() => changePosition("left")}>
            <i className={"fas fa-circle-arrow-left"}></i>
          </span>
          <span className="icon" onClick={() => changePosition("right")}>
            <i className={"fas fa-circle-arrow-right"}></i>
          </span>
          <div className="columns is-flex">
            {content.map((item, i) => (
              <div
                className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile is-flex"
                key={`carousel-item-${i}`}
                style={getSlidePosition(i,position,content.length,slideDirection,transitionSpeed)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Carousel;