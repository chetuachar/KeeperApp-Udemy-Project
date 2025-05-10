import "../css/Note.css";

const Note = (props) => {
  // key={note.key} title={note.title} content={note.content}
  const { title, content } = props;
  return (
    <div className="note">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Note;
