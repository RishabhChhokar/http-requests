import React, { useRef, useState } from "react";

import classes from "./AddMovie.module.css";

function AddMovie(props) {
  const [isAdding, setIsAdding] = useState(false);
  const titleRef = useRef(null);
  const openingTextRef = useRef(null);
  const releaseDateRef = useRef(null);

  function submitHandler(event) {
    event.preventDefault();

    if (
      titleRef.current.value.trim() === "" ||
      openingTextRef.current.value.trim() === "" ||
      releaseDateRef.current.value.trim() === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);
    setIsAdding(false);
  }

  function toggleFormHandler() {
    setIsAdding((prevState) => !prevState);
  }

  return (
    <React.Fragment>
      {!isAdding && <button onClick={toggleFormHandler}>Add New Movie</button>}
      {isAdding && (
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" ref={titleRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="opening-text">Opening Text</label>
            <textarea
              rows="5"
              id="opening-text"
              ref={openingTextRef}
            ></textarea>
          </div>
          <div className={classes.control}>
            <label htmlFor="date">Release Date</label>
            <input type="date" id="date" ref={releaseDateRef} />
          </div>
          <button>Add Movie</button>
          <button type="button" onClick={toggleFormHandler}>
            Cancel
          </button>
        </form>
      )}
    </React.Fragment>
  );
}

export default AddMovie;
