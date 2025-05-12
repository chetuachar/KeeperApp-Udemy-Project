import React, { useState } from "react";
import "../css/CreateNote.css";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  };

  const handleOnClick = (event) => {
    event.preventDefault();
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  };
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleOnChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={handleOnChange}
        />
        <button onClick={handleOnClick}>Add</button>
      </form>
    </div>
  );
};

CreateNote.propTypes = {};

export default CreateNote;
