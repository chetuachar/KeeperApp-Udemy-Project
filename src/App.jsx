//Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

import { useState } from "react";
import CreateNote from "./components/CreateNote";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([]);
  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote} />
      {notes &&
        notes.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        ))}
      <Footer />
    </div>
  );
}

export default App;
